import mysql from 'mysql2/promise';

import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  host: process.env.DB_HOSTNAME || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'books_api',
});