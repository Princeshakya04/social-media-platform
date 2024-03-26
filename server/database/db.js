import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

connection.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to database: ', err.message);
      return;
    }
    console.log('Connected to database!');
    connection.release();
  });

  
export default connection;