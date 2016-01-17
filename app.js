var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));





/*__________________________________________________*/
//route files stored in ROUTES directory
var indexRoute = require('./routes/index');
var blogRoute = require('./routes/blog');
app.use('/', indexRoute);
app.use('/blog', blogRoute);


/*__________________________________________________*/
//page templates stored in VIEWS directory
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



/*__________________________________________________*/
//page render files stored in VIEWS>PAGES directory
//Index / Home page
//app.get('/', function(req, res) {
//  res.render('pages/index');
//});

//Blog page
//app.get('/blog', function(req, res) {
//  res.render('pages/blog');
//});



app.listen(app.get('port'), function() {
  console.log('Site is running on port', app.get('port'));
});


