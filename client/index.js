var React =require('react');

var BlogBox = require('./Blog');
var BlogForm = require('./BlogForm');
var NavBar = require('./NavBar');
var BlogCarousel = require('./BlogCarousel');
var AboutMe = require('./AboutMe');
var SearchBlog = require('./SearchBlog');
var BlogCategories = require('./BlogCategories');
var TweetBox = require('./TweetsWidget');
var LogIn = require('./LogIn');
var SignUp = require('./SignUp');
var GitHubBox = require('./GitHubWidget');


React.render(<TweetBox/>, document.getElementById('TweetsWidget'));
React.render(<GitHubBox/>, document.getElementById('GitHubWidget'));
React.render(<BlogCarousel/>, document.getElementById('BlogCarousel'));
React.render(<BlogCategories/>, document.getElementById('BlogCategories'));
React.render(<SearchBlog/>, document.getElementById('SearchBlog'));
React.render(<AboutMe/>, document.getElementById('AboutMe'));
React.render(<BlogForm url="/api/blogs"/>, document.getElementById('BlogForm'));
React.render(<NavBar/>, document.getElementById("NavBarrr"));
React.render(<BlogBox url="/api/blogs"/>, document.getElementById('BlogBox'));
React.render(<LogIn />, document.getElementById('LogIn'));
React.render(<SignUp />, document.getElementById('SignUp'));