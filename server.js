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

require('./config/passport')(passport);

require('./routes.js')(app, passport);

app.get('/', function(req, res){
	res.readFile('index.html')
});

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.readFile('index.html'); // load the index.ejs file
    });


    // POST Signup
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup' // redirect back to the signup page if there is an error
    }));

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.readFile('login.html'); 
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.readFile('signup.html');
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    // app.get('/profile', isLoggedIn, function(req, res) {
    //     res.render('profile.html', {
    //         user : req.user // get the user out of session and pass to template
    //     });
    // });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});