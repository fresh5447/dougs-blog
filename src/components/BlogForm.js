var React =require('react');
var History = require('history');

var BlogForm = React.createClass({
    mixins:[History],

    handleSubmit: function(e){
    e.preventDefault();
    console.log('===')
    
    var title = React.findDOMNode(this.refs.title).value.trim();
    var author = React.findDOMNode(this.refs.author).value.trim();
    var body = React.findDOMNode(this.refs.body).value.trim();
    console.log('===')
    if(!title){
      return;
    }
    var data = ({title: title, author: author, body: body});
    var self = this;
    $.ajax({
        url: "/api/blogs",
        dataType: 'json',
        data: data,
        type:'POST',
            success: function(response){
            console.log("posting data!",data, response)
            console.log('---', self.history);
            self.history.pushState(null, '/#/blog')
            }.bind(this),
            error: function(xhr, status, err){
                console.log("not posting data!")
                console.error(this.props.url, status, err.toString());
            }.bind(this)
    })
    
      },
    render: function() {
        return (
				<div>
                <form>
                    <div className="form-group" method="POST">
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
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-default">Submit</button>
                </form>
				</div>
        	);
    }
});

module.exports=BlogForm