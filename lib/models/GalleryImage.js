import mongoose from 'mongoose';

const GalleryImageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    fileId: { type: String, default: '' },
    title: { type: String, default: '' },
    category: { type: String, default: 'rooms' },
  },
  { timestamps: true }
);

export default mongoose.models.GalleryImage ||
  mongoose.model('GalleryImage', GalleryImageSchema);
