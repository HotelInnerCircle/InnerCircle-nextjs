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

    const isVideo = file.type.startsWith('video/');
    const folder = isVideo ? '/media/videos' : '/media/images';
    const prefix = isVideo ? 'video' : 'img';
    const fileName = `${prefix}_${Date.now()}_${file.name.replace(/\s+/g, '_')}`;

    const auth = Buffer.from(privateKey + ':').toString('base64');

    const ikRes = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        file: base64File,
        fileName,
        folder,
        useUniqueFileName: true,
      }),
    });

    if (!ikRes.ok) {
      const err = await ikRes.text();
      console.error('ImageKit upload error:', err);
      return NextResponse.json({ error: 'ImageKit upload failed' }, { status: 500 });
    }

    const ikData = await ikRes.json();
    return NextResponse.json({ url: ikData.url, fileId: ikData.fileId, type: isVideo ? 'video' : 'image' });
  } catch (error) {
    console.error('Media upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
