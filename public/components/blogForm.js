var BlogForm = React.createClass({

handleSubmit: function(e){
    e.preventDefault();
    var title = React.findDOMNode(this.refs.title).value.trim();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var body = React.findDOMNode(this.refs.body).value.trim();
    if(!title){
      console.log("no twitter handle");
      return;
    }
    this.props.onBlogSubmit({title: title, author: author, body: body});
    React.findDOMNode(this.refs.title);
  },

handleBlogSubmit: function(tweet){
        $.ajax({
            url: "http:localhost:3000/api/blogs",
            dataType: 'json',
            success: function(data){
            	console.log("posting data!")
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
            		console.log("not posting data!")
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
      },

    render: function() {
        return (
				<div>
                <form>
                    <div className="form-group" onSubmit={this.handleSubmit}>
                        <label >Title</label>
                        <input type="text" className="form-control" ref="title" placeholder="title"/>
                    </div>
                    <div className="form-group">
                        <label >Tags</label>
                        <input type="author" className="form-control" ref="author" placeholder="author"/>
                    </div>
                    <div className="form-group">
                        <label>Post</label>
                        <textarea  rows="15" className="form-control" ref="body" placeholder="body"></textarea>
                    </div>
                    <button value="POST" type="submit" className="btn btn-default">Submit</button>
                </form>
				</div>
        	);
    }
});

React.render(<BlogForm onBlogSubmit={this.handleBlogSubmit} />, document.getElementById('blog-form'))