var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var user = req.query.user;
  res.render('renmai', { title: '人脉收集',username:user });
});

module.exports = router;
