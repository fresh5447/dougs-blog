require('dotenv').load();
var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');


var fetchGitHubEvents = function(req, res){
	axios.get('https://api.github.com/users/fresh5447/events')
	  .then(function (response) {

	  	var data = response.data;
	  	console.log(data)

	  	var gitEvents = data.map(function(g){
  			return {"id": g.id, "type": g.type, "repo": g.repo.name, "timeStamp": g.created_at}
		});

	    res.send(gitEvents)
	  })
	  .catch(function (response) {
	    console.log(response);
	  });
};

module.exports = fetchGitHubEvents;
