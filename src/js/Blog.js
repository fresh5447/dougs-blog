var Blog = React.createClass({
  render: function() {
    return (
      <div className="blog">
        <h2 className="blogAuthor">
          {this.props.author}
        </h2>
      </div>
    );
  }
});

module.exports = Blog;