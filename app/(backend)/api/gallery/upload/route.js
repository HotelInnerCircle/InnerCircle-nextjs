import { NextResponse } from 'next/server';
import { ConnectDB } from '@/lib/config/db';
import GalleryImage from '@/lib/models/GalleryImage';
import { requireAdminAuth } from '@/lib/adminAuth';

export async function POST(req) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  try {
    const formData = await req.formData();
    const file = formData.get('file');
    const title = formData.get('title') || '';
    const category = formData.get('category') || 'rooms';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
    const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/b7gayfw2v';

    if (!privateKey) {
      return NextResponse.json({ error: 'ImageKit not configured' }, { status: 500 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64File = buffer.toString('base64');

    const fileName = `gallery_${Date.now()}_${file.name.replace(/\s+/g, '_')}`;

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
        folder: '/Gallery/admin',
        useUniqueFileName: true,
      }),
    });

    if (!ikRes.ok) {
      const err = await ikRes.text();
      console.error('ImageKit upload error:', err);
      return NextResponse.json({ error: 'ImageKit upload failed' }, { status: 500 });
    }

    const ikData = await ikRes.json();

    await ConnectDB();
    const image = await GalleryImage.create({
      url: ikData.url,
      fileId: ikData.fileId,
      title,
      category,
    });

    return NextResponse.json({ success: true, image }, { status: 201 });
  } catch (error) {
    console.error('Gallery upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
