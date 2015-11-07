var React = require('react');

var AboutMe = React.createClass({
	render: function(){
		return(
        <div className="container jumbotron">
            <div className="row">
                    <div className="col-md-6">
                        <img src="img/slide3.jpg" className="img-responsive" alt="Image"/>
                    </div>
                    <div className="col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-header top-panel">
                                <h4 className="panel-title"> Douglas Walter </h4>
                            </div>
                            <div className="panel-body">
                              <p>This will be a summary of what Douglas is up to. This will be a summary of what Douglas is up to. This will be a summary of what Douglas is up to. This will be a summary of what Douglas is up to. This will be a summary of what Douglas is up to. This will be a summary of what Douglas is up to.</p>
                            </div>
                        </div>
                    </div>
           
            </div>
            <div className="row">
                <div className="my-panel-footer">
                    <ul className="list-inline social-links">
                        <li><i className="fa fa-linkedin"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                        <li><i className="fa fa-github"></i></li>
                        <li>MTCS</li>
                    </ul>
                </div>
            </div>
        </div>
			)
	}
});

module.exports = AboutMe;