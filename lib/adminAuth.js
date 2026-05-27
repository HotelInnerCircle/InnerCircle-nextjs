import { NextResponse } from 'next/server';

export function requireAdminAuth(request) {
  const adminAuth = request.cookies.get('adminAuth')?.value;
  const expected = process.env.SESSION_SECRET;

  if (!expected || !adminAuth || adminAuth !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}
