webpackHotUpdate(0,{

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar React = __webpack_require__(62);\nvar ReactDOM = __webpack_require__(218);\nvar Router = __webpack_require__(219);\n\nvar createBrowserHistory = __webpack_require__(261);\n\nvar App = __webpack_require__(277);\nvar Blog = __webpack_require__(278);\nvar Post = __webpack_require__(279);\nvar Home = __webpack_require__(292);\nvar LogIn = __webpack_require__(293);\nvar Route = Router.Route;\nvar Link = Router.Link;\nvar IndexRoute = Router.IndexRoute;\nRouter = Router.Router;\n\nvar history = createBrowserHistory();\nReactDOM.render(React.createElement(\n\tRouter,\n\t{ history: history },\n\tReact.createElement(\n\t\tRoute,\n\t\t{ path: '/', component: App },\n\t\tReact.createElement(Route, { path: 'blog', component: Blog }),\n\t\tReact.createElement(Route, { path: 'post', component: Post }),\n\t\tReact.createElement(Route, { path: 'home', component: Home }),\n\t\tReact.createElement(Route, { path: 'login', component: LogIn }),\n\t\tReact.createElement(IndexRoute, { component: Blog })\n\t)\n), document.getElementById('root'));//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/YmM2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPXJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET009cmVxdWlyZSgncmVhY3QtZG9tJylcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcblxudmFyIGNyZWF0ZUJyb3dzZXJIaXN0b3J5ID0gcmVxdWlyZShcImhpc3RvcnkvbGliL2NyZWF0ZUJyb3dzZXJIaXN0b3J5XCIpO1xuXG5cbnZhciBBcHA9cmVxdWlyZSgnLi9BcHAnKTtcbnZhciBCbG9nID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9CbG9nJylcbnZhciBQb3N0ID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHMvQmxvZ0Zvcm1cIilcbnZhciBIb21lID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHMvSG9tZVwiKVxudmFyIExvZ0luID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHMvTG9nSW5cIilcbnZhciBSb3V0ZSA9IFJvdXRlci5Sb3V0ZTtcbnZhciBMaW5rID0gUm91dGVyLkxpbms7XG52YXIgSW5kZXhSb3V0ZSA9IFJvdXRlci5JbmRleFJvdXRlO1xuUm91dGVyID0gUm91dGVyLlJvdXRlcjtcblxudmFyIGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpXG5SZWFjdERPTS5yZW5kZXIoKFxuPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cblx0PFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudD17QXBwfT5cblx0XHQ8Um91dGUgcGF0aD0nYmxvZycgY29tcG9uZW50PXtCbG9nfS8+XG5cdFx0PFJvdXRlIHBhdGg9J3Bvc3QnIGNvbXBvbmVudD17UG9zdH0vPlxuXHRcdDxSb3V0ZSBwYXRoPSdob21lJyBjb21wb25lbnQ9e0hvbWV9Lz5cblx0XHQ8Um91dGUgcGF0aD0nbG9naW4nIGNvbXBvbmVudD17TG9nSW59Lz5cblx0XHQ8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0Jsb2d9Lz5cblx0PC9Sb3V0ZT5cblx0PC9Sb3V0ZXI+XG5cblx0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9pbmRleC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar React = __webpack_require__(62);\n\nvar BlogList = React.createClass({\n  displayName: \"BlogList\",\n\n  render: function render() {\n\n    var blogData = this.props.data.map(function (blog) {\n      return React.createElement(\n        \"div\",\n        { className: \"well blog-post\" },\n        React.createElement(\n          \"h3\",\n          null,\n          blog.title\n        ),\n        React.createElement(\n          \"p\",\n          { className: \"post-info\" },\n          React.createElement(\"i\", { className: \"glyphicon glyphicon-time\" }),\n          \" Posted by John Doe on August 21st, 2014 at 10:00 PM\"\n        ),\n        React.createElement(\"img\", { src: \"img/blog1.jpg\", className: \"img-responsive\" }),\n        React.createElement(\n          \"p\",\n          null,\n          blog.body\n        )\n      );\n    });\n\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"ul\",\n        null,\n        blogData\n      )\n    );\n  }\n});\n\nvar BlogBox = React.createClass({\n  displayName: \"BlogBox\",\n\n  getInitialState: function getInitialState() {\n    return { data: [] };\n  },\n\n  loadBlogsFromServer: function loadBlogsFromServer() {\n    $.ajax({\n      url: \"/api/blogs\",\n      dataType: 'json',\n      cache: false,\n      success: (function (data) {\n        console.log(\"inside success\");\n        this.setState({ data: data });\n      }).bind(this),\n      error: (function (xhr, status, err) {\n        console.log(\"broken url is \" + this.props.url);\n        console.error(this.props.url, status, err.toString());\n      }).bind(this)\n    });\n  },\n\n  componentDidMount: function componentDidMount() {\n    this.loadBlogsFromServer();\n  },\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(BlogList, { data: this.state.data })\n    );\n  }\n});\n\nmodule.exports = BlogBox;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmxvZy5qcz80OGJmIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9cmVxdWlyZSgncmVhY3QnKTtcblxudmFyIEJsb2dMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICBcbiAgICAgIHZhciBibG9nRGF0YSA9IHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24oYmxvZyl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxsIGJsb2ctcG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e2Jsb2cudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC1pbmZvXCI+PGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10aW1lXCI+PC9pPiBQb3N0ZWQgYnkgSm9obiBEb2Ugb24gQXVndXN0IDIxc3QsIDIwMTQgYXQgMTA6MDAgUE08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Jsb2cxLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cD57YmxvZy5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXHQpXG4gICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICB7YmxvZ0RhdGF9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgIH1cbn0pO1xuXG52YXIgQmxvZ0JveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB7ZGF0YTogW119O1xuICAgIH0sXG5cbiAgICBsb2FkQmxvZ3NGcm9tU2VydmVyOiBmdW5jdGlvbigpIHtcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogXCIvYXBpL2Jsb2dzXCIsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHN1Y2Nlc3NcIilcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBkYXRhfSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImJyb2tlbiB1cmwgaXMgXCIgKyB0aGlzLnByb3BzLnVybClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucHJvcHMudXJsLCBzdGF0dXMsIGVyci50b1N0cmluZygpKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICB9KTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcbiAgICB0aGlzLmxvYWRCbG9nc0Zyb21TZXJ2ZXIoKTtcbiAgfSxcblxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCbG9nTGlzdCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHM9QmxvZ0JveFxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Jsb2cuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOzs7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})