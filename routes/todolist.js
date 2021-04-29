var express = require('express');
var router = express.Router();
var todoListHandler = require('../services/todoList');
var url = require('url');


/* POST Todolist Item */
router.get('/add',function (req, res) {
    console.log(req);
    console.log('\n');
    console.log(req.url);
    todoListHandler.addItem(req, res);
});
router.get('*', function(req, res){
    console.log('host: ',req.get('host'));
    console.log('\n');
    console.log(req.url);
    console.log('original URl : ',req.originalUrl);
    res.send('what???', 404);
  });
module.exports = router;