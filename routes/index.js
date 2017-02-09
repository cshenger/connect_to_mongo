var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//validatePresenceOf
function validatePresenceOf(value) {
  return value && value.length;
}

//mongoose
mongoose.connect('mongodb://localhost/todo_development');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Task = new Schema({
  task: { type: String, validate: [validatePresenceOf, 'a task is required'] }
});

var Task = mongoose.model('Task', Task); 

router.get('/tasks', function(req, res, next) {
  Task.find(function(err, docs) {
  	if (err) console.error(err);
  	res.render('tasks/index', {
      title: 'Todos index view',
      docs: docs
    });
    //console.log(docs);
  });
});

//new
router.get('/tasks/new', function(req, res, next) {
  res.render('tasks/new.jade', {
  	title: 'New Task'
  });
});

//post new
router.post('/tasks', function(req, res) {
  var task = new Task({
    task: req.body.task
  });
  task.save(function (err) {
    if (!err) {
      req.flash('info', 'Task created');
      res.redirect('/tasks');
    } else {
      req.flash('warning', err);
      res.redirect('/tasks/new');
    }
  });

  console.log(req.body);
});

//edit
router.get('/tasks/:id/edit', function(req, res, next) {
  Task.findById(req.params.id, function(err, doc) {
    res.render('tasks/edit.jade', {
      title: 'Edit Task View',
      task: doc
    });
  });
});

//put
router.post('/tasks/:id/edit', function(req, res){
  console.log('edit');
  Task.findById(req.params.id, function (err, doc){
    doc.updated_at = new Date();
    doc.task = req.body.task;
    doc.save(function(err) {
      if (!err){
        res.redirect('/tasks');
      } else {
        console.err(err);
      }
    });
  });
});

//delete
router.post('/tasks/:id/delete', function(req, res){
  Task.findOne({ _id: req.params.id }, function(err, doc) {
    doc.remove(function() {
      res.redirect('/tasks');
    });
  });
});

module.exports = router;
