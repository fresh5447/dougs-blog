var React = require('react');

var GitEvents = React.createClass({
	render: function(){
		var gitEvents = this.props.data.map(function(g){
			return (
				<div className="panel-body">
					<p> what: {g.type} </p>
					<p> where: {g.repo} </p>
					<p> when: {g.timeStamp} </p>
				</div>
				)
		});
		return(

			<div className="panel panel-default">
				<h1> Recent Git Events </h1>
				   {gitEvents}
				
			</div>

			)
	}
});

var GitHubBox = React.createClass({
	getInitialState: function() {
		return {
			gitHubEvents: [] 
		};
	},
	loadGitEventsFromServer: function(){
		$.ajax({
			url: "/api/github",
			dataType: "JSON",
			success: function(data){
				console.log("setting gitevents for", data)
				this.setState({gitHubEvents: data})
			}.bind(this),
			error: function(err){
				console.log(err)
			}.bind(this)
		})
	},
	componentDidMount: function(){
		this.loadGitEventsFromServer();
	},
	render: function(){
		window.loadGitEventsFromServer = this.loadGitEventsFromServer;
		return(
			<div>
				<GitEvents data={this.state.gitHubEvents}/>
			</div>
			)
	}
})

module.exports = GitHubBox;