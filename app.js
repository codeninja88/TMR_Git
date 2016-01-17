var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));



//all page templates / skeletons are stored within the views directory
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



//PAGE ROUTING_________________________________________________________
//Index / Home page
app.get('/', function(req, res) {
  res.render('pages/index');
});

//Blog page
app.get('/blog', function(req, res) {
  res.render('pages/blog');
});

app.listen(app.get('port'), function() {
  console.log('Site is running on port', app.get('port'));
});


