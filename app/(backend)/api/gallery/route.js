import { NextResponse } from 'next/server';
import { ConnectDB } from '@/lib/config/db';
import GalleryImage from '@/lib/models/GalleryImage';
import { requireAdminAuth } from '@/lib/adminAuth';

export async function GET() {
  try {
    await ConnectDB();
    const images = await GalleryImage.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json({ images });
  } catch (error) {
    console.error('Gallery GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}
