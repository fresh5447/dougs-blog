var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
	title: String,
	body: String,
	author: String
});

mongoose.model('Blog', blogSchema);