import { NextResponse } from 'next/server';
import { ConnectDB } from '@/lib/config/db';
import GalleryImage from '@/lib/models/GalleryImage';
import { requireAdminAuth } from '@/lib/adminAuth';

export async function DELETE(req, { params }) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  try {
    await ConnectDB();
    const image = await GalleryImage.findById(params.id);
    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 });
    }

    if (image.fileId && process.env.IMAGEKIT_PRIVATE_KEY) {
      const auth = Buffer.from(process.env.IMAGEKIT_PRIVATE_KEY + ':').toString('base64');
      await fetch(`https://api.imagekit.io/v1/files/${image.fileId}`, {
        method: 'DELETE',
        headers: { Authorization: `Basic ${auth}` },
      });
    }

    await GalleryImage.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Gallery DELETE error:', error);
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
