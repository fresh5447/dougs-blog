var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');


var db = require('./app/model/db');

var blogModel = require('./app/model/blog');
var blogRoutes = require('./routes/blog');


var app = express();

require('./config/passport')(passport);

app.use(express.static('public'));
//required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.set('port', (process.env.PORT || 3000));

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.use('/api/blogs', blogRoutes);



require('./app/routes.js')(app, passport);

app.get('/', function(req, res){
	res.readFile('index.html')
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});