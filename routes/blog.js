var express = require('express');
var blogRoute = express.Router();


blogRoute.get('/', function(req, res) {

    res.render('pages/blog');

});


module.exports = blogRoute;