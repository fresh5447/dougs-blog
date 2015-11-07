var React = require('react');

var NavBar = React.createClass({
	render: function(){
		return(
		<nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="postBlog.html">New Post</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">Account <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Create Account</a></li>
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">Sign In</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
			)
	}
})

module.exports = NavBar;