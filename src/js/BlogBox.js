var BlogList = require('./BlogList');
var BlogForm = require('./BlogForm');

var BlogBox = React.createClass({
  loadBlogsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleBlogSubmit: function(blog) {
    var blogs = this.state.data;
    var newBlogs = blogs.concat([blog]);
    this.setState({data: newBlogs});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: blog,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadBlogsFromServer();
    setInterval(this.loadBlogsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="blogBox">
        <h1>Blogs</h1>
        <BlogList data={this.state.data} />
        <BlogForm onBlogSubmit={this.handleBlogSubmit} />
      </div>
    );
  }
});

module.exports = BlogBox;