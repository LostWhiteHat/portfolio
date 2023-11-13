import type { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER_PORTFOLIO,
    password: process.env.DATABASE_PASS_PORTFOLIO,
    database: process.env.DATABASE_SCHEMA,
    port: process.env.DATABASE_PORT,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const conn = await pool.connect();
        const rows = await conn.query({
            text: 'SELECT * FROM projects',
        });
        conn.release();
        res.status(200).json(rows.rows);
    }
}
