var React = require('react');

var LogIn = React.createClass({
    render: function() {
        return (
        <div className="container">

            <div className="col-sm-6 col-sm-offset-3">

            <h1><span className="fa fa-sign-in"></span> Login</h1>

            <form action="/login" method="post">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email"/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password"/>
                </div>

                <button type="submit" className="btn btn-warning btn-lg">Login</button>
            </form>

            </div>

        </div>
            );
    }
});

module.exports = LogIn