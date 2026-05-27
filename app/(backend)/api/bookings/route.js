import { NextResponse } from 'next/server';
import Booking from '@/lib/models/Booking';
import { ConnectDB } from '@/lib/config/db';
import { requireAdminAuth } from '@/lib/adminAuth';

export async function POST(req) {
  try {
    await ConnectDB();
    const body = await req.json();

    // Whitelist only expected fields — prevents mass assignment
    const {
      name, email, phone, roomTitle, roomType,
      category, price, checkIn, checkOut, adults, children,
    } = body;

    const booking = await Booking.create({
      name, email, phone, roomTitle, roomType,
      category, price, checkIn, checkOut, adults, children,
    });

    return NextResponse.json(
      { message: 'Booking saved successfully', booking },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking POST error:', error);
    return NextResponse.json(
      { message: 'Failed to save booking' },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  const authError = requireAdminAuth(req);
  if (authError) return authError;

  try {
    await ConnectDB();
    const bookings = await Booking.find().sort({ createdAt: -1 });
    return NextResponse.json({ bookings });
  } catch (error) {
    console.error('Booking GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
  }
}
