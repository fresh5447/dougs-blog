var React =require('react');
var ReactDOM=require('react-dom');
var Router = require('react-router');


var App=require('./App');
var BlogBox = require('./Blog');
var BlogForm = require('./BlogForm');
var NavBar = require('./NavBar');
var Route = Router.Route;
var Link = Router.Link;
var IndexRoute = Router.IndexRoute;
Router = Router.Router;

ReactDOM.render((
<Router history={history}>
	<Route path='/' component={App}>
		<Route path='blog' component={BlogBox}/>
		<Route path='post' component={BlogForm}/>
		<IndexRoute component={BlogBox}/>
	</Route>
	</Router>

	), document.getElementById('root'));


// React.render(<BlogForm url="/api/blogs"/>, document.getElementById('BlogForm'));
// React.render(<NavBar/>, document.getElementById("NavBarrr"));
// React.render(<BlogBox url="/api/blogs"/>, document.getElementById('BlogList'));