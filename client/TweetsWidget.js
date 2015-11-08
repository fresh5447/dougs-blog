var React = require('react');

var TweetBox = React.createClass({
	getInitialState: function() {
		return {
			tweets: [] 
		};
	},

	loadTweetsFromServer: function(){
		$.ajax({
			url: '/api/tweets',
			dataType: 'JSON',
			success: function(data){
				this.setState({tweets: data});
				console.log("success");
			}.bind(this),
			error: function(){
				console.log("failure");
			}.bind(this)
		})
	},
	componentDidMount: function(){
		this.loadTweetsFromServer()
	},

	render: function(){

		window.loadTweetsFromServer = this.loadTweetsFromServer;


		return(
				<TweetList data={this.state.tweets}/>
			)
	}
})

var TweetList = React.createClass({
	render: function(){

		var tweets = this.props.data.map(function(t){
			return <li> {t} </li>
		});
		return (
    		<div className="well">
        		<h4>Recent Tweets</h4>
        		{tweets}
        	 </div>
			)
	}

});

module.exports = TweetBox;