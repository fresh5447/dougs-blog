var React =require('react');

var BlogList = React.createClass({
    render: function() {
      
      var blogData = this.props.data.map(function(blog){
        return (
                <div key={blog.id} className="well blog-post">
                    <h3 >{blog.title}</h3>
                    <p className="post-info"><i className="glyphicon glyphicon-time"></i> Posted by John Doe on August 21st, 2014 at 10:00 PM</p>
                    <img src="../img/blog1.jpg" className="img-responsive"/>
                    <p>{blog.body}</p>
                </div>
        	)
      });

        return (
        <div>
            <ul>
              {blogData}
            </ul>
        </div>
          );
    }
});

var BlogBox = React.createClass({

    getInitialState: function(){
      return {data: []};
    },

    loadBlogsFromServer: function() {
      $.ajax({
        url: "/api/blogs",
        dataType: 'json',
        cache: false,
        success: function(data) {
          console.log("inside success")
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.log("broken url is " + this.props.url)
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  },

  componentDidMount: function(){
    this.loadBlogsFromServer();
  },


    render: function() {
        return (
        <div>
            <BlogList data={this.state.data}/>
        </div>
          );
    }
});

module.exports=BlogBox

