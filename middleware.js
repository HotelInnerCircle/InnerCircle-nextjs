import { NextResponse } from 'next/server';

export function middleware(request) {
  const adminAuth = request.cookies.get('adminAuth')?.value;
  const SESSION_SECRET = process.env.SESSION_SECRET;

  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isLoginPage = request.nextUrl.pathname === '/admin/login';

  const isAuthenticated = SESSION_SECRET && adminAuth === SESSION_SECRET;

  if (isAdminRoute && !isLoginPage && !isAuthenticated) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  if (isLoginPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
