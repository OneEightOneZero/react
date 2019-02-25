var express = require('express');
var request = require('request');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  request.get('https://m.toutiao.com/list/?tag=video&ac=wap&count=20&format=json_raw&as=A1457C764A41F74&cp=5C6AC19F07943E1&min_behot_time=0&_signature=1Y7F0AAAieymeM-.Mi2uANWOxc&i=',(err,response,body)=>{
    console.log(body)
    res.send(body);
  })
});

module.exports = router;
