require('dotenv').load();
var express = require('express');
var bodyParser = require('body-parser');
var Twit = require('twit')


var T = new Twit({
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var fetchTweets = function(req, res){

console.log("FETCHING TWEETS");

  var twitterHandle = "just_be_dougin";

  T.get('statuses/user_timeline', { screen_name: twitterHandle, count: 5 }, function(err, data, response) {
	
	var tweets = data.map(function(t){
	  return t.text;
	});

    res.send(tweets);

  });

};

module.exports = fetchTweets;
