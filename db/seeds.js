const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const Item = require('../models/item');

// To me this is weird -- why does Mongoose not have Promises by default?
// idk but I don't make the decisions there
// But we do want the ability to use Promises so we can chain commands
mongoose.Promise = global.Promise;

// Remove all of our stuff
Item.remove({}, function printIfError(err) {
  console.log(err);
});


// fake items
const item1 = new Item({ name: 'Apples', isDone: false });
const item2 = new Item({ name: 'Clothes', isDone: false });
const item3 = new Item({ name: 'Hormonely Enhanced Chicken', isDone: false });

// put into an array so we can iterate through them aka loop through them
const items = [item1, item2, item3];


// Loop through and save each one
items.forEach(function createItem(item) {
  item.save(function saveIt(err) {
    if (err) { console.log(err) }

    console.log(item);
  });
});


// Close the connection when finished
mongoose.connection.close();
