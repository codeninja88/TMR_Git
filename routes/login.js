var express = require('express');
var loginRoute = express.Router();


loginRoute.get('/', function(req, res) {

    res.render('pages/login');

});


loginRoute.post('/', function(req, res) {

    if (req.userLogin !== 'test') {
        res.render('pages/index');
    } else {
        res.render('pages/blog');
    }
});


module.exports = loginRoute;