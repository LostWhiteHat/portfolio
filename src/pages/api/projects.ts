import type { NextApiRequest, NextApiResponse } from 'next';
import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

type ResponseData = {
    language: string;
    title: string;
    description: string;
    link: string;
    key: number;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'GET') {
        const conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM projects');
        conn.release();
        res.status(200).json(rows);
    }
}
