var React =require('react');

var BlogBox = require('./Blog');
var BlogForm = require('./BlogForm');
var NavBar = require('./NavBar');
var BlogCarousel = require('./BlogCarousel');
var AboutMe = require('./AboutMe');
var SearchBlog = require('./SearchBlog');
var BlogCategories = require('./BlogCategories');
var TweetsWidget = require('./TweetsWidget');


React.render(<TweetsWidget/>, document.getElementById('TweetsWidget'));
React.render(<BlogCarousel/>, document.getElementById('BlogCarousel'));
React.render(<BlogCategories/>, document.getElementById('BlogCategories'));
React.render(<SearchBlog/>, document.getElementById('SearchBlog'));
React.render(<AboutMe/>, document.getElementById('AboutMe'));
React.render(<BlogForm url="/api/blogs"/>, document.getElementById('BlogForm'));
React.render(<NavBar/>, document.getElementById("NavBarrr"));
React.render(<BlogBox url="/api/blogs"/>, document.getElementById('BlogList'));