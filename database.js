/**
 * Created by liuxing on 14-10-11.
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'renmai'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
var data = {
    name:'liux',
    tel:'1333'
}
module.exports = connection;