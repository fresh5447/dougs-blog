webpackHotUpdate(0,{

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar React = __webpack_require__(62);\nvar Router = __webpack_require__(219);\n\nvar Route = Router.Route;\nvar Link = Router.Link;\n\nvar App = React.createClass({\n    displayName: 'App',\n\n    render: function render() {\n\n        return React.createElement(\n            'div',\n            null,\n            React.createElement(\n                'nav',\n                { className: 'navbar navbar-default' },\n                React.createElement(\n                    'div',\n                    { className: 'container-fluid' },\n                    React.createElement(\n                        'div',\n                        { className: 'navbar-header' },\n                        React.createElement(\n                            'button',\n                            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar', 'aria-expanded': 'false', 'aria-controls': 'navbar' },\n                            React.createElement(\n                                'span',\n                                { className: 'sr-only' },\n                                'Toggle navigation'\n                            )\n                        )\n                    ),\n                    React.createElement(\n                        'div',\n                        { id: 'navbar', className: 'collapse navbar-collapse' },\n                        React.createElement(\n                            'ul',\n                            { className: 'nav navbar-nav' },\n                            React.createElement(\n                                'li',\n                                { className: 'active' },\n                                React.createElement(\n                                    Link,\n                                    { to: '/home' },\n                                    ' Home Page '\n                                )\n                            ),\n                            React.createElement(\n                                'li',\n                                null,\n                                React.createElement(\n                                    Link,\n                                    { to: '/blog' },\n                                    'Blog'\n                                )\n                            ),\n                            React.createElement(\n                                'li',\n                                null,\n                                React.createElement(\n                                    Link,\n                                    { to: '/post' },\n                                    'New Post'\n                                )\n                            )\n                        ),\n                        this.props.children\n                    )\n                )\n            )\n        );\n    }\n});\n\nmodule.exports = App;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FwcC5qcz85YmY5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9cmVxdWlyZSgncmVhY3QnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcblxudmFyIFJvdXRlID0gUm91dGVyLlJvdXRlO1xudmFyIExpbmsgPSBSb3V0ZXIuTGluaztcblxudmFyICBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdCAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyXCIgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiPjxMaW5rIHRvPVwiL2hvbWVcIj4gSG9tZSBQYWdlIDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2Jsb2dcIj5CbG9nPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvcG9zdFwiPk5ldyBQb3N0PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuXG5cdFx0PC9kaXY+XG5cblx0XHRcdClcblxuXHR9XG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9qcy9BcHAuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7O0FBQUE7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFDQTs7QUFBQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUNBOzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUNBOzs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})