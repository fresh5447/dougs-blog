var React =require('react');
var Router = require('react-router');

var Route = Router.Route;
var Link = Router.Link;

var  App = React.createClass({
	render: function(){
		
		return (
			<div>
			    <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/home"> Home Page </Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/post">New Post</Link></li>
                        <li><Link to="/login">Log In</Link></li>
                    </ul>
                    {this.props.children}
                </div>
            </div>
        </nav>

		</div>

			)

	}
})

module.exports = App;