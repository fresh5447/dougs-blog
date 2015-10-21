var React =require('react');
var ReactDOM=require('react-dom')
var Router = require('react-router');

var createBrowserHistory = require("history/lib/createBrowserHistory");


var App=require('./App');
var Blog = require('../components/Blog')
var Post = require("../components/BlogForm")
var Route = Router.Route;
var Link = Router.Link;
var IndexRoute = Router.IndexRoute;
Router = Router.Router;

var history = createBrowserHistory()
ReactDOM.render((
<Router history={history}>
	<Route path='/' component={App}>
		<Route path='blog' component={Blog}/>
		<Route path='post' component={Post}/>
		<IndexRoute component={Blog}/>
	</Route>
	</Router>

	), document.getElementById('root'))