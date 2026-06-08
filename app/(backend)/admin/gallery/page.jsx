'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { FaTrash, FaUpload, FaImages, FaSpinner } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const CATEGORIES = [
  { value: 'rooms', label: 'Rooms' },
  { value: 'banquetHall', label: 'Banquet Hall' },
  { value: 'dining', label: 'Dining & Restaurants' },
  { value: 'guests', label: 'Guests' },
  { value: 'exterior', label: 'Exterior' },
  { value: 'decor', label: 'Decor & Events' },
];

export default function GalleryAdmin() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('rooms');
  const [filterCat, setFilterCat] = useState('all');
  const [deleting, setDeleting] = useState(null);
  const fileRef = useRef();

  const fetchImages = async () => {
    try {
      const res = await fetch('/api/gallery');
      const data = await res.json();
      setImages(data.images || []);
    } catch {
      toast.error('Failed to load images');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchImages(); }, []);

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleUpload = async () => {
    if (!file) return toast.error('Select an image first');
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('title', title);
      fd.append('category', category);

      const res = await fetch('/api/gallery/upload', { method: 'POST', body: fd });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Upload failed');

      toast.success('Image uploaded successfully');
      setShowModal(false);
      setFile(null);
      setPreview(null);
      setTitle('');
      setCategory('rooms');
      fetchImages();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this image?')) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      toast.success('Image deleted');
      setImages((prev) => prev.filter((img) => img._id !== id));
    } catch {
      toast.error('Failed to delete image');
    } finally {
      setDeleting(null);
    }
  };

  const filtered = filterCat === 'all' ? images : images.filter((i) => i.category === filterCat);

  return (
    <div className="bg-white min-h-screen p-6 rounded-lg mr-2 mt-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FaImages className="text-2xl text-amber-500" />
          <h1 className="text-2xl font-bold text-gray-800">Gallery Management</h1>
          <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            {images.length} images
          </span>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition shadow-md"
        >
          <FaUpload className="text-sm" /> Upload Image
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFilterCat('all')}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${filterCat === 'all' ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-amber-50'}`}
        >
          All
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.value}
            onClick={() => setFilterCat(c.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${filterCat === c.value ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-amber-50'}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <FaSpinner className="text-3xl text-amber-500 animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
          <FaImages className="text-5xl mb-3 opacity-30" />
          <p className="text-lg">No images found</p>
          <p className="text-sm mt-1">Upload your first image to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((img) => (
            <div key={img._id} className="group relative rounded-xl overflow-hidden shadow border border-gray-100 aspect-square">
              <Image
                src={img.url}
                alt={img.title || img.category}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
              {/* Overlay info */}
              <div className="absolute inset-0 flex flex-col justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="self-start bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full capitalize">
                  {img.category}
                </span>
                <div className="flex items-center justify-between">
                  {img.title && (
                    <p className="text-white text-xs truncate max-w-[75%]">{img.title}</p>
                  )}
                  <button
                    onClick={() => handleDelete(img._id)}
                    disabled={deleting === img._id}
                    className="ml-auto flex items-center justify-center w-7 h-7 bg-red-500 hover:bg-red-600 text-white rounded-full transition flex-shrink-0"
                  >
                    {deleting === img._id ? (
                      <FaSpinner className="text-xs animate-spin" />
                    ) : (
                      <FaTrash className="text-xs" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-gray-800">Upload Image</h2>
              <button onClick={() => { setShowModal(false); setFile(null); setPreview(null); }}>
                <MdClose className="text-2xl text-gray-500 hover:text-gray-800" />
              </button>
            </div>

            {/* Drop zone */}
            <div
              onClick={() => fileRef.current.click()}
              className="border-2 border-dashed border-amber-300 rounded-xl p-4 text-center cursor-pointer hover:bg-amber-50 transition mb-4 h-48 flex flex-col items-center justify-center overflow-hidden"
            >
              {preview ? (
                <div className="relative w-full h-full">
                  <Image src={preview} alt="Preview" fill className="object-contain" />
                </div>
              ) : (
                <>
                  <FaUpload className="text-3xl text-amber-400 mb-2" />
                  <p className="text-sm text-gray-500">Click to select image</p>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG, WEBP supported</p>
                </>
              )}
            </div>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />

            <div className="space-y-3 mb-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title (optional)</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Deluxe Room View"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleUpload}
              disabled={uploading || !file}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-semibold rounded-full transition flex items-center justify-center gap-2"
            >
              {uploading ? <><FaSpinner className="animate-spin" /> Uploading...</> : <><FaUpload /> Upload to ImageKit</>}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
