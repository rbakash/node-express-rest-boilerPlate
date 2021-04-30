const mysql = require("mysql");
const dotenv = require('dotenv');

dotenv.config({
    path: '../config.env'
});


var devDB = mysql.createPool({
  // socketPath: "/cloudsql/todolist-312216:us-central1:dev",
  host:process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  port: process.env.DATABASE_PORT, 
});

module.exports = devDB;