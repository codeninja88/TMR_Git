var express = require('express');
var indexRoute = express.Router();


indexRoute.get('/', function(req, res) {

    res.render('pages/index');

});


module.exports = indexRoute;