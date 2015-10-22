var App = React.createClass({
    render: function() {
    var blogs = this.props.data.forEach(function(blog){})
        return (
				<div>
                <div className="well blog-post">
                    <h3><a href="post.html">Blog Post One</a></h3>
                    <p className="post-info"><i className="glyphicon glyphicon-time"></i> Posted by John Doe on August 21st, 2014 at 10:00 PM</p>
                    <img src="img/blog1.jpg" className="img-responsive"/>
                    <p>This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post.This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post.This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post.This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post.This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post. This is a blog post.</p>
                </div>
				</div>
        	);
    }
});

React.render(<App url='/api/blogs/>, document.getElementById('blog-list'))