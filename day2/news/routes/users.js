var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/news', function(req, res, next) {
  let {
    channel
  } = req.query
  res.send(`频道为channel:${channel}`);
});

module.exports = router;
