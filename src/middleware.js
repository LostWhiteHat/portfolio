import { NextRequest } from 'next/server';

export function middleware() {
    const res = NextRequest.next()

    res.headers.append('Access-Control-Allow-Credentials', "true");

    return res;
}


export const config = {
    matcher: '/api/:path*',
}