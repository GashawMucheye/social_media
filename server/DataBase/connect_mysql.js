import mysql2 from 'mysql2';
import { config } from 'dotenv';
config();

export const mysqlDb = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQLPASSWORD,
  database: 'social',
});
