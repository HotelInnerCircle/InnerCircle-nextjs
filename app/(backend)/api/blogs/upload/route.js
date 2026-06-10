import { NextResponse } from 'next/server';
import { requireAdminAuth } from '@/lib/adminAuth';

export async function POST(req) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
    if (!privateKey) {
      return NextResponse.json({ error: 'ImageKit not configured' }, { status: 500 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64File = buffer.toString('base64');

    const fileName = `blog_${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
    const auth = Buffer.from(privateKey + ':').toString('base64');

    const fd = new FormData();
    fd.append('file', `data:${file.type || 'image/jpeg'};base64,${base64File}`);
    fd.append('fileName', fileName);
    fd.append('folder', '/blog');
    fd.append('useUniqueFileName', 'true');

    const ikRes = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
      method: 'POST',
      headers: { Authorization: `Basic ${auth}` },
      body: fd,
    });

    if (!ikRes.ok) {
      const err = await ikRes.text();
      console.error('ImageKit upload error:', err);
      return NextResponse.json({ error: 'ImageKit upload failed' }, { status: 500 });
    }

    const ikData = await ikRes.json();
    return NextResponse.json({ url: ikData.url, fileId: ikData.fileId }, { status: 200 });
  } catch (error) {
    console.error('Blog image upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
