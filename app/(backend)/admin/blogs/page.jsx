'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { FaTrash, FaUpload, FaSpinner, FaEdit, FaPlus, FaArrowLeft, FaEye, FaEyeSlash, FaDownload, FaSearch } from 'react-icons/fa';
import { MdClose, MdBlog } from 'react-icons/md';
import { BsFilePost } from 'react-icons/bs';
import TiptapEditor from '@/app/components/TiptapEditor';

const TAGS = ['Hotel Guide', 'Travel Guide', 'Medical Travel', 'Local Guide', 'Food & Dining', 'Events'];

const emptyForm = {
  title: '', slug: '', tag: 'Hotel Guide', excerpt: '', content: '',
  img: '', imgFileId: '', highlights: '', location: 'Somajiguda, Hyderabad',
  readTime: '5 min read', published: true,
  metaTitle: '', metaDescription: '', metaKeywords: '', focusKeyword: '', noIndex: false,
};

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function BlogAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('list'); // 'list' | 'create' | 'edit'
  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [imgUploading, setImgUploading] = useState(false);
  const [imgPreview, setImgPreview] = useState('');
  const [deleting, setDeleting] = useState(null);
  const [seeding, setSeeding] = useState(false);
  const fileRef = useRef();

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data.blogs || []);
    } catch {
      toast.error('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

  const handleField = (key, value) => {
    setForm((f) => {
      const updated = { ...f, [key]: value };
      if (key === 'title' && !editId) {
        updated.slug = slugify(value);
      }
      return updated;
    });
  };

  const handleImageFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImgUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/blogs/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      setForm((f) => ({ ...f, img: data.url, imgFileId: data.fileId }));
      setImgPreview(data.url);
      toast.success('Image uploaded');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setImgUploading(false);
    }
  };

  const handleSave = async () => {
    if (!form.title || !form.slug || !form.excerpt || !form.content || !form.img) {
      return toast.error('Please fill title, excerpt, content, and upload an image');
    }
    setSaving(true);
    try {
      const payload = {
        ...form,
        highlights: form.highlights
          ? form.highlights.split('\n').map((h) => h.trim()).filter(Boolean)
          : [],
      };

      const url = editId ? `/api/blogs/${editId}` : '/api/blogs';
      const method = editId ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save');

      toast.success(editId ? 'Blog updated!' : 'Blog created!');
      setView('list');
      setForm(emptyForm);
      setEditId(null);
      setImgPreview('');
      fetchBlogs();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (blog) => {
    setForm({
      title: blog.title,
      slug: blog.slug,
      tag: blog.tag || 'Hotel Guide',
      excerpt: blog.excerpt,
      content: blog.content,
      img: blog.img,
      imgFileId: blog.imgFileId || '',
      highlights: (blog.highlights || []).join('\n'),
      location: blog.location || 'Somajiguda, Hyderabad',
      readTime: blog.readTime || '5 min read',
      published: blog.published ?? true,
      metaTitle: blog.metaTitle || '',
      metaDescription: blog.metaDescription || '',
      metaKeywords: blog.metaKeywords || '',
      focusKeyword: blog.focusKeyword || '',
      noIndex: blog.noIndex ?? false,
    });
    setImgPreview(blog.img);
    setEditId(blog._id);
    setView('edit');
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this blog post?')) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      toast.success('Blog deleted');
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch {
      toast.error('Failed to delete');
    } finally {
      setDeleting(null);
    }
  };

  const handleSeed = async () => {
    if (!confirm('Import all 4 existing static blog posts into the database? Already-imported blogs will be skipped.')) return;
    setSeeding(true);
    try {
      const res = await fetch('/api/admin/seed-blogs', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Seed failed');
      const inserted = data.results.filter((r) => r.status === 'inserted').length;
      const skipped = data.results.filter((r) => r.status !== 'inserted').length;
      toast.success(`Done! ${inserted} imported, ${skipped} already existed.`);
      fetchBlogs();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSeeding(false);
    }
  };

  const cancelForm = () => {
    setView('list');
    setForm(emptyForm);
    setEditId(null);
    setImgPreview('');
  };

  if (view === 'create' || view === 'edit') {
    return (
      <div className="bg-white min-h-screen p-6 rounded-lg mr-2 mt-1">
        <button onClick={cancelForm} className="flex items-center gap-2 text-gray-500 hover:text-gray-800 mb-6 text-sm font-medium">
          <FaArrowLeft /> Back to Blogs
        </button>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {editId ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main form */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => handleField('title', e.target.value)}
                placeholder="Blog post title"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Slug *</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => handleField('slug', e.target.value)}
                placeholder="url-friendly-slug"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <p className="text-xs text-gray-400 mt-1">URL: /blog/{form.slug}</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Excerpt * <span className="font-normal text-gray-400">(shown on listing page)</span></label>
              <textarea
                value={form.excerpt}
                onChange={(e) => handleField('excerpt', e.target.value)}
                rows={3}
                placeholder="Short summary of the blog post..."
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Content *</label>
              <TiptapEditor
                content={form.content}
                onChange={(html) => handleField('content', html)}
                placeholder="Start writing your blog content here..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Highlights <span className="font-normal text-gray-400">(one per line, shown as bullet points on listing card)</span>
              </label>
              <textarea
                value={form.highlights}
                onChange={(e) => handleField('highlights', e.target.value)}
                rows={4}
                placeholder={"Prime location\nFree Wi-Fi\nNear hospitals"}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none"
              />
            </div>
          </div>

          {/* Sidebar settings */}
          <div className="space-y-5">
            {/* Featured Image */}
            <div className="border border-gray-200 rounded-xl p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Featured Image *</label>
              <div
                onClick={() => fileRef.current.click()}
                className="border-2 border-dashed border-amber-300 rounded-xl h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-amber-50 transition overflow-hidden relative"
              >
                {imgUploading ? (
                  <FaSpinner className="text-2xl text-amber-400 animate-spin" />
                ) : imgPreview ? (
                  <Image src={imgPreview} alt="Preview" fill className="object-cover" />
                ) : (
                  <>
                    <FaUpload className="text-2xl text-amber-400 mb-1" />
                    <p className="text-xs text-gray-400">Click to upload image</p>
                  </>
                )}
              </div>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageFile} />
              {imgPreview && (
                <p className="text-xs text-gray-400 mt-2 truncate">✓ Image uploaded to ImageKit</p>
              )}
            </div>

            {/* Tag */}
            <div className="border border-gray-200 rounded-xl p-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category Tag</label>
              <select
                value={form.tag}
                onChange={(e) => handleField('tag', e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                {TAGS.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>

            {/* Meta */}
            <div className="border border-gray-200 rounded-xl p-4 space-y-3">
              <label className="block text-sm font-semibold text-gray-700">Post Details</label>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Location</label>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => handleField('location', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Read Time</label>
                <input
                  type="text"
                  value={form.readTime}
                  onChange={(e) => handleField('readTime', e.target.value)}
                  placeholder="5 min read"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm text-gray-700 font-medium">Published</span>
                <button
                  onClick={() => handleField('published', !form.published)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition ${form.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}
                >
                  {form.published ? <><FaEye /> Live</> : <><FaEyeSlash /> Draft</>}
                </button>
              </div>
            </div>

            {/* SEO Panel */}
            <div className="border border-gray-200 rounded-xl p-4 space-y-4">
              <div className="flex items-center gap-2">
                <FaSearch className="text-green-500" />
                <span className="text-sm font-semibold text-gray-700">SEO Settings</span>
              </div>

              {/* Meta Title */}
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-xs font-medium text-gray-500">Meta Title</label>
                  <span className={`text-xs font-mono ${
                    (form.metaTitle || form.title).length > 60 ? 'text-red-500' :
                    (form.metaTitle || form.title).length > 50 ? 'text-yellow-500' : 'text-green-500'
                  }`}>
                    {(form.metaTitle || form.title).length}/60
                  </span>
                </div>
                <input
                  type="text"
                  value={form.metaTitle}
                  onChange={(e) => handleField('metaTitle', e.target.value)}
                  placeholder={form.title || 'Defaults to post title'}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
                <div className="h-1 mt-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      (form.metaTitle || form.title).length > 60 ? 'bg-red-400' :
                      (form.metaTitle || form.title).length > 50 ? 'bg-yellow-400' : 'bg-green-400'
                    }`}
                    style={{ width: `${Math.min(((form.metaTitle || form.title).length / 60) * 100, 100)}%` }}
                  />
                </div>
              </div>

              {/* Meta Description */}
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-xs font-medium text-gray-500">Meta Description</label>
                  <span className={`text-xs font-mono ${
                    (form.metaDescription || form.excerpt).length > 160 ? 'text-red-500' :
                    (form.metaDescription || form.excerpt).length > 140 ? 'text-yellow-500' : 'text-green-500'
                  }`}>
                    {(form.metaDescription || form.excerpt).length}/160
                  </span>
                </div>
                <textarea
                  value={form.metaDescription}
                  onChange={(e) => handleField('metaDescription', e.target.value)}
                  rows={3}
                  placeholder={form.excerpt ? form.excerpt.slice(0, 60) + '…' : 'Defaults to excerpt'}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none"
                />
                <div className="h-1 mt-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      (form.metaDescription || form.excerpt).length > 160 ? 'bg-red-400' :
                      (form.metaDescription || form.excerpt).length > 140 ? 'bg-yellow-400' : 'bg-green-400'
                    }`}
                    style={{ width: `${Math.min(((form.metaDescription || form.excerpt).length / 160) * 100, 100)}%` }}
                  />
                </div>
              </div>

              {/* Focus Keyword */}
              <div>
                <label className="text-xs font-medium text-gray-500 mb-1 block">Focus Keyword</label>
                <input
                  type="text"
                  value={form.focusKeyword}
                  onChange={(e) => handleField('focusKeyword', e.target.value)}
                  placeholder="e.g. hotels in somajiguda"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>

              {/* Keywords */}
              <div>
                <label className="text-xs font-medium text-gray-500 mb-1 block">
                  Keywords <span className="text-gray-400 font-normal">(comma-separated)</span>
                </label>
                <input
                  type="text"
                  value={form.metaKeywords}
                  onChange={(e) => handleField('metaKeywords', e.target.value)}
                  placeholder="hotel somajiguda, hyderabad hotel, luxury stay"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>

              {/* Google Preview */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-2">Google Preview</p>
                <p className="text-[11px] text-green-700 mb-0.5 truncate">
                  hotelinnercircle.in › blog › {form.slug || 'your-slug'}
                </p>
                <p className="text-sm text-blue-700 font-medium leading-snug line-clamp-1">
                  {(form.metaTitle || form.title || 'Post Title').slice(0, 60)}
                  {(form.metaTitle || form.title || '').length > 60 ? '…' : ''}
                </p>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed line-clamp-2">
                  {(form.metaDescription || form.excerpt || 'Your meta description will appear here in Google search results.').slice(0, 155)}
                  {(form.metaDescription || form.excerpt || '').length > 155 ? '…' : ''}
                </p>
              </div>

              {/* noIndex toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div>
                  <p className="text-sm text-gray-700 font-medium">No Index</p>
                  <p className="text-xs text-gray-400">Hide from search engines</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleField('noIndex', !form.noIndex)}
                  className={`relative w-10 h-5 rounded-full transition-colors ${form.noIndex ? 'bg-red-400' : 'bg-gray-200'}`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${form.noIndex ? 'translate-x-5' : ''}`} />
                </button>
              </div>
            </div>

            {/* Save button */}
            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-bold rounded-full transition flex items-center justify-center gap-2 shadow-lg"
            >
              {saving ? <><FaSpinner className="animate-spin" /> Saving...</> : editId ? 'Update Blog' : 'Publish Blog'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen p-6 rounded-lg mr-2 mt-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <BsFilePost className="text-2xl text-amber-500" />
          <h1 className="text-2xl font-bold text-gray-800">Blog Management</h1>
          <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            {blogs.length} posts
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="flex items-center gap-2 px-4 py-2.5 border border-amber-400 text-amber-600 hover:bg-amber-50 font-semibold rounded-full transition text-sm disabled:opacity-50"
            title="Import the 4 existing static blog posts into the database"
          >
            {seeding ? <FaSpinner className="animate-spin" /> : <FaDownload className="text-sm" />}
            Import Static Blogs
          </button>
          <button
            onClick={() => setView('create')}
            className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full transition shadow-md"
          >
            <FaPlus className="text-sm" /> New Blog Post
          </button>
        </div>
      </div>

      {/* Blog List */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <FaSpinner className="text-3xl text-amber-500 animate-spin" />
        </div>
      ) : blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
          <BsFilePost className="text-5xl mb-3 opacity-30" />
          <p className="text-lg">No blog posts yet</p>
          <p className="text-sm mt-1">Create your first blog post to get started</p>
        </div>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex items-center gap-4 p-4 border border-gray-100 rounded-2xl hover:border-amber-200 hover:shadow-sm transition-all"
            >
              <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={blog.img} alt={blog.title} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 uppercase tracking-wide">
                    {blog.tag}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${blog.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {blog.published ? 'Live' : 'Draft'}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800 text-sm leading-tight truncate">{blog.title}</h3>
                <p className="text-gray-400 text-xs mt-0.5 truncate">/blog/{blog.slug}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`/blog/${blog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100 transition"
                  title="View blog"
                >
                  <FaEye className="text-xs" />
                </a>
                <button
                  onClick={() => handleEdit(blog)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-50 text-amber-500 hover:bg-amber-100 transition"
                  title="Edit"
                >
                  <FaEdit className="text-xs" />
                </button>
                <button
                  onClick={() => handleDelete(blog._id)}
                  disabled={deleting === blog._id}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition"
                  title="Delete"
                >
                  {deleting === blog._id ? <FaSpinner className="text-xs animate-spin" /> : <FaTrash className="text-xs" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
