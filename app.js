var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( {extended: true} ));

app.locals.pretty = true; // makes sure code is readable in JS console


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));
// SESSION SETUP
app.use(session(
    {
        secret: 'agileisawesome',
        saveUninitialized: true,
        resave: true
    }
));




/*__________________________________________________*/
//route files stored in ROUTES directory
var indexRoute = require('./routes/index');
app.use('/', indexRoute);

var loginRoute = require('./routes/login');
app.use('/login', loginRoute);

var blogRoute = require('./routes/blog');
app.use('/blog', blogRoute);




/*__________________________________________________*/
//page templates stored in VIEWS directory
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');






app.listen(app.get('port'), function() {
  console.log('Site is running on port', app.get('port'));
});


