var React = require('react');

var LogIn = React.createClass({
    render: function(){
        return(
        	<div>
        		<h1> Log In Form </h1>
        	    <form action="/login" method="post">
			        <div class="form-group">
			            <label>Email</label>
			            <input type="text" class="form-control" name="email"/>
			        </div>
			        <div class="form-group">
			            <label>Password</label>
			            <input type="password" class="form-control" name="password"/>
			        </div>

			        <button type="submit" class="btn btn-warning btn-lg">Login</button>
			    </form>
    		</div>
            )
    }
});

module.exports = LogIn;