var express = require('express');
var router = express.Router();
const Habit = require('../modelo/habit');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  res.json({"status": "success", "message": "Hello World!"});
});

router.post('/habits', async function(req, res, next) {
  const { name, description, frequency, duration, priority, completed } = req.body;
  const habit = new Habit({ name, description, frequency, duration, priority, completed });
 await  habit.save();
 res.json(habit);
});


module.exports = router;