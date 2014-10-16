var express = require('express');
var router = express.Router();
var connection = require('../database');


/* GET users listing. */
router.get('/', function(req, res,next) {
    connection.query('INSERT INTO user SET ?', req.query, function(err, result) {
        if (err) next(err);
        res.render("success",{message :'Hi '+req.query.name+' ,您的信息保存成功！'});
    });
});
router.get('/add', function(req, res) {
    var user = req.query.user;
    res.render('renmai', { title: '人脉收集',user:user });
});
router.get('/list', function(req, res,next) {
    var user = req.query.user || '';
    connection.query('select * from user where host = ?',user, function(err, result) {
        if (err) next(err);
        var data = {
            userlist:result,
            host: user
        };
        res.render("userlist",data);
    });
});
module.exports = router;
