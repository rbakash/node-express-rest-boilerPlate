var express = require('express');
var router = express.Router();
var todoListHandler = require('../services/todoList');

/* POST Todolist Item */
router.get('/add',function (req, res) {
    console.log(req);
    console.log('\n');
    console.log(req.url);
    todoListHandler.addItem(req, res);
});
router.get('*', function(req, res){
    console.log(req);
    console.log('\n');
    console.log(req.url);
    res.send('what???', 404);
  });
module.exports = router;