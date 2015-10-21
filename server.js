var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var db = require('./model/db');
var passport = require('passport');
var morgan = require('morgan');
var blogModel = require('./model/blog');
var blogRoutes = require('./routes/blog');
var flash = require('flash')
var cookieParser = require('cookie-parser');
var session = require('express-session');


// https://scotch.io/tutorials/easy-node-authentication-setup-and-local

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));

app.use('/api/blogs', blogRoutes);
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
app.use(morgan('dev'));
app.use(cookieParser());


require('./routes.js')(app, passport);

app.get('/', function(req, res){
	res.readFile('index.html')
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});