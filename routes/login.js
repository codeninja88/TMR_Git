var express = require('express');
var loginRoute = express.Router();


loginRoute.get('/', function(req, res) {

    res.render('pages/login');

});


loginRoute.post('/login', function(req, res) {
    if (row.user_username === "test") {
        res.render('pages/index');
    } else {
        res.render('pages/blog');
    }
});


module.exports = loginRoute;