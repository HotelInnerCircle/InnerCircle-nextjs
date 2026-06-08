import { NextResponse } from 'next/server';
import { ConnectDB } from '@/lib/config/db';
import Blog from '@/lib/models/Blog';
import { requireAdminAuth } from '@/lib/adminAuth';

export async function GET(req, { params }) {
  try {
    await ConnectDB();
    const blog = await Blog.findById(params.id).lean();
    if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ blog });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  try {
    await ConnectDB();
    const body = await req.json();
    const blog = await Blog.findByIdAndUpdate(params.id, body, { new: true });
    if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error('Blog PUT error:', error);
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  try {
    await ConnectDB();
    const blog = await Blog.findByIdAndDelete(params.id);
    if (!blog) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    if (blog.imgFileId && process.env.IMAGEKIT_PRIVATE_KEY) {
      const auth = Buffer.from(process.env.IMAGEKIT_PRIVATE_KEY + ':').toString('base64');
      await fetch(`https://api.imagekit.io/v1/files/${blog.imgFileId}`, {
        method: 'DELETE',
        headers: { Authorization: `Basic ${auth}` },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Blog DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
