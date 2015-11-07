var React = require('react');
var BlogBox = require('./Blog');
var BlogForm = require('./BlogForm');
var NavBar = require('./NavBar');

React.render(<BlogForm url="/api/blogs"/>, document.getElementById('BlogForm'));
React.render(<NavBar/>, document.getElementById("NavBarrr"));
React.render(<BlogBox url="/api/blogs"/>, document.getElementById('BlogList'));