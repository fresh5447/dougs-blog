webpackHotUpdate(0,{

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar React = __webpack_require__(62);\nvar History = __webpack_require__(407);\n\nvar BlogForm = React.createClass({\n    displayName: 'BlogForm',\n\n    mixins: [History],\n\n    handleSubmit: function handleSubmit(e) {\n        e.preventDefault();\n        var title = React.findDOMNode(this.refs.title).value.trim();\n        var author = React.findDOMNode(this.refs.author).value.trim();\n        var body = React.findDOMNode(this.refs.body).value.trim();\n        if (!title) {\n            return;\n        }\n        var data = { title: title, author: author, body: body };\n        $.ajax({\n            url: \"/api/blogs\",\n            dataType: 'json',\n            data: data,\n            type: 'POST',\n            success: (function (response) {\n                console.log(\"posting data!\", data, response);\n                console.log('---');\n                this.history.pushState(null, '/#/blog');\n            }).bind(this),\n            error: (function (xhr, status, err) {\n                console.log(\"not posting data!\");\n                console.error(this.props.url, status, err.toString());\n            }).bind(this)\n        });\n        React.findDOMNode(this.refs.title);\n    },\n    render: function render() {\n        return React.createElement(\n            'div',\n            null,\n            React.createElement(\n                'form',\n                null,\n                React.createElement(\n                    'div',\n                    { className: 'form-group', method: 'POST' },\n                    React.createElement(\n                        'label',\n                        null,\n                        'Title'\n                    ),\n                    React.createElement('input', { type: 'text', className: 'form-control', ref: 'title', placeholder: 'title' })\n                ),\n                React.createElement(\n                    'div',\n                    { className: 'form-group' },\n                    React.createElement(\n                        'label',\n                        null,\n                        'Tags'\n                    ),\n                    React.createElement('input', { type: 'author', className: 'form-control', ref: 'author', placeholder: 'author' })\n                ),\n                React.createElement(\n                    'div',\n                    { className: 'form-group' },\n                    React.createElement(\n                        'label',\n                        null,\n                        'Post'\n                    ),\n                    React.createElement('textarea', { rows: '15', className: 'form-control', ref: 'body', placeholder: 'body' })\n                ),\n                React.createElement(\n                    'button',\n                    { onClick: this.handleSubmit, type: 'submit', className: 'btn btn-default' },\n                    'Submit'\n                )\n            )\n        );\n    }\n});\n\nmodule.exports = BlogForm;//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmxvZ0Zvcm0uanM/ZTFmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPXJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgSGlzdG9yeSA9IHJlcXVpcmUoJ2hpc3RvcnknKTtcblxudmFyIEJsb2dGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIG1peGluczpbSGlzdG9yeV0sXG5cbiAgICBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdGl0bGUgPSBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMudGl0bGUpLnZhbHVlLnRyaW0oKTtcbiAgICB2YXIgYXV0aG9yID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmF1dGhvcikudmFsdWUudHJpbSgpO1xuICAgIHZhciBib2R5ID0gUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmJvZHkpLnZhbHVlLnRyaW0oKTtcbiAgICBpZighdGl0bGUpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZGF0YSA9ICh7dGl0bGU6IHRpdGxlLCBhdXRob3I6IGF1dGhvciwgYm9keTogYm9keX0pO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogXCIvYXBpL2Jsb2dzXCIsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIHR5cGU6J1BPU1QnLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwb3N0aW5nIGRhdGEhXCIsZGF0YSwgcmVzcG9uc2UpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tJylcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJy8jL2Jsb2cnKVxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnIpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90IHBvc3RpbmcgZGF0YSFcIilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMucHJvcHMudXJsLCBzdGF0dXMsIGVyci50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgIH0pXG4gICAgUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLnRpdGxlKTtcbiAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHJlZj1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsID5UYWdzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYXV0aG9yXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcmVmPVwiYXV0aG9yXCIgcGxhY2Vob2xkZXI9XCJhdXRob3JcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qb3N0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSAgcm93cz1cIjE1XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcmVmPVwiYm9keVwiIHBsYWNlaG9sZGVyPVwiYm9keVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fSB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgXHQpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cz1CbG9nRm9ybVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQmxvZ0Zvcm0uanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7OztBQUNBOztBQUFBO0FBQ0E7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUFBOztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})