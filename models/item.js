// THIS FILE
// The brain of our app
// and our connection to a ORM

// Just a library
const mongoose = require('mongoose');

// Schema function creates 'rules' that data will be manipulated to match
// AND provide all those .find, .findById, .removeById, etc. functions
const ItemSchema = mongoose.Schema({
	name: String,
	isDone: Boolean
});

module.exports = mongoose.model('Item', ItemSchema);
