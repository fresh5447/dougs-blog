var Blog = require('./Blog')

var BlogList = React.createClass({
  render: function() {
    var blogNodes = this.props.data.map(function(blog, index) {
      return (
        <Blog author={blog.author} key={index}>
          {blog.title}
          {blog.body}
        </Blog>
      );
    });
    return (
      <div className="blogList">
        {blogNodes}
      </div>
    );
  }
});

module.exports = BlogList;

