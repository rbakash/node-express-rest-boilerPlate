const fs = require("fs").promises;
const path = require("path");
const devDBConfig = require("../helper/db-helper");
let mysql = require("mysql");
console.log(devDBConfig);
let devDBconnection = mysql.createConnection(devDBConfig);

exports.addItem = async (req, res) => {
  try {

    let sql = `SELECT * FROM tbl_todo`;
    devDBconnection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
    });

    devDBconnection.end();

    res.send({ name: "addItem" });

    // Create the json if its not there and if its there append the new item to the to do list
  } catch (error) {
    console.error(error);
  }
};
