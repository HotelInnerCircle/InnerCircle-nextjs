import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const SESSION_SECRET = process.env.SESSION_SECRET;

  if (!SESSION_SECRET) {
    console.error('SESSION_SECRET env variable is not set');
    return NextResponse.json(
      { success: false, error: 'Server misconfiguration' },
      { status: 500 }
    );
  }

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const res = NextResponse.json({
      success: true,
      message: 'Login successful',
    });

    res.cookies.set('adminAuth', SESSION_SECRET, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60,
      path: '/',
    });

    return res;
  }

  return NextResponse.json(
    { success: false, error: 'Invalid credentials' },
    { status: 401 }
  );
}
