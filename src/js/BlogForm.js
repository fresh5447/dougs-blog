var BlogForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    console.log("handling submit")
    // var title = this.refs.title.value.trim();
    var title = React.findDOMNode(this.refs.title).value.trim();
    // var body = this.refs.body.value.trim();
    var body = React.findDOMNode(this.refs.body).value.trim();
    
    if (!body || !title) {
      console.log("body or title are blank");
      return;
    }

    this.props.onBlogSubmit({title: title, body: body});

    React.findDOMNode(this.refs.title) = '';
    React.findDOMNode(this.refs.body) = '';
    // this.refs.title.value = '';
    // this.refs.body.value = '';
  },
  render: function() {
    return (
      <form className="blogForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Blog Title" ref="title" />
        <input type="text" placeholder="Blog Body..." ref="body" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = BlogForm;