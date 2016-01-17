var express = require('express');
var loginRoute = express.Router();


loginRoute.get('/', function(req, res) {

    res.render('pages/login');

});


loginRoute.post('/', function(req, res) {

    if (req.body.username == 'test') {
        req.session.username = req.body.username;
        res.render('pages/index');
    } else {
        res.render('pages/blog');
    }
});


module.exports = loginRoute;