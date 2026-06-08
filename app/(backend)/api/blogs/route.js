import { NextResponse } from 'next/server';
import { ConnectDB } from '@/lib/config/db';
import Blog from '@/lib/models/Blog';
import { requireAdminAuth } from '@/lib/adminAuth';

export async function GET() {
  try {
    await ConnectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Blog GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(req) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  try {
    await ConnectDB();
    const body = await req.json();
    const { title, slug, tag, excerpt, content, img, imgFileId, highlights, location, readTime, published } = body;

    if (!title || !slug || !excerpt || !content || !img) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const existing = await Blog.findOne({ slug });
    if (existing) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 });
    }

    const blog = await Blog.create({
      title, slug, tag, excerpt, content, img, imgFileId: imgFileId || '',
      highlights: highlights || [], location, readTime, published: published ?? true,
    });

    return NextResponse.json({ success: true, blog }, { status: 201 });
  } catch (error) {
    console.error('Blog POST error:', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
