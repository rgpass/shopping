const express = require('express');

// returns an object that you can apply routes to
const router = express.Router();

// Pretty sure we don't need it because we don't call this stuff anywhere
// else in the file
// var bodyParser = require('body-parser') //parses information from POST
// var methodOverride = require('method-override') //used to manipulate POST

const Item = require('../models/item');

router.get('/', function indexAction(req, res) {
	Item
		.find({})
		.select('-__v')
		.exec(function idkYet(err, items) {
			if (err) { return res.json({ message: 'Failed to look up items#index' }) }

			res.json({ items: items });
		})
});

module.exports = router;


// // POST
// router.post('/', function createAction(request, response) {
//   console.log('in POST');
//   console.log('body:',request.body);

//   var criminal = new Criminal(request.body);

//   criminal.save(function(error) {
//     if(error) response.json({messsage: 'Could not ceate criminal b/c:' + error});

//     response.json({criminal: criminal});
//   });
// });

// // GET
// router.get('/:id', function showAction(request, response) {
//   var id = request.params.id;

//   Criminal.findById({_id: id}, function(error, criminal) {
//     if(error) response.json({message: 'Could not find criminal b/c:' + error});

//     response.json({criminal: criminal});
//   }).select('-__v');
// });

// router.patch('/:id', function updateAction(request, response) {
//   var id = request.params.id;

//   Criminal.findById({_id: id}, function(error, criminal) {
//     if(error) response.json({message: 'Could not find criminal b/c:' + error});

//     if(request.body.name) criminal.name = request.body.name;
//     if(request.body.location) criminal.location = request.body.location;
//     if(request.body.status) criminal.status = request.body.status;

//     criminal.save(function(error) {
//       if(error) response.json({messsage: 'Could not update criminal b/c:' + error});

//       response.json({message: 'Criminal successfully updated', criminal: criminal});
//     });
//   }).select('-__v');
// });

// router.delete('/:id', function destroyAction(request, response) {
//   var id = request.params.id;

//   Criminal.remove({_id: id}, function(error) {
//     if(error) response.json({message: 'Could not delete criminal b/c:' + error});

//     response.json({message: 'Criminal successfully deleted'});
//   }).select('-__v');
// });

// module.exports = router;
