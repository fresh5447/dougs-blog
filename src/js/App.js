var React =require('react');
var Router = require('react-router');

var Route = Router.Route;
var Link = Router.Link;

var  App = React.createClass({
	render: function(){
		
		return (
			<div>
						<h1>Navigation</h1>
						<ul> 
								<Link to="/blog">Blog</Link>
								<Link to="/post">Add a new post</Link>
						</ul>
									{this.props.children}
						</div>

			)

	}
})

module.exports = App;