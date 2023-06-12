import mysql from 'mysql2';
import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';

const db = new Sequelize('erp', 'root', '',{

    host: 'localhost',
    //user: process.env.MYSQL_USER,
    //password: process.env.MYSQL_PASSWORD,
    //database: process.env.MYSQL_DATABASE,
    dialect: 'mysql'
})

export default db

/*

dotenv.config();

const pool = mysql
    .createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    })
    .promise();

    export async  function getUserByID(id){
        const [row] = await pool.query(
            `SELECT * FROM user WHERE iduser = ?`,
            [id]
        );
      
        return row[0];

    
    }
//getUserByID(1);
*/