import { NextApiRequest } from "next";

export function middleware() {
    const res = NextApiRequest.next()

    res.headers.append('Access-Control-Allow-Credentials', "true");

    return res;
}


export const config = {
    matcher: '/api/:path*',
}