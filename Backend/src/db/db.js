const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
  });

const createTable = async () => {
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                resume VARCHAR(255)
            );
        `;
        await pool.query(query);
        console.log('Table ensured successfully');
    } catch (err) {
        console.error('Error ensuring table:', err);
    }
};

createTable();

module.exports = pool;
