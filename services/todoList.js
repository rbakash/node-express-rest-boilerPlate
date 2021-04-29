const fs = require("fs").promises;
const path = require("path");
const devDB = require("../helper/db-helper")

exports.addItem = async (req, res) => {
  try {
    res.send({name:"addItem"});


    // Create the json if its not there and if its there append the new item to the to do list
  } catch (error) {
      console.error(error);
  }
};
