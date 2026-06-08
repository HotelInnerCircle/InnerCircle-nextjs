import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    tag: { type: String, default: 'Hotel Guide' },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    img: { type: String, required: true },
    imgFileId: { type: String, default: '' },
    highlights: [{ type: String }],
    location: { type: String, default: 'Somajiguda, Hyderabad' },
    readTime: { type: String, default: '5 min read' },
    published: { type: Boolean, default: true },
    metaTitle: { type: String, default: '' },
    metaDescription: { type: String, default: '' },
    metaKeywords: { type: String, default: '' },
    focusKeyword: { type: String, default: '' },
    noIndex: { type: Boolean, default: false },
    canonicalUrl: { type: String, default: '' },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
