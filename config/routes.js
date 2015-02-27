  // This is our routes.js file located in /config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  var friends = require('./../server/controllers/friends.js');

  module.exports = function(app) {
    app.get('/friends', function(req, res) {
  		friends.show(req, res);
	})

// note how we are delegating to the controller and passing along req and res

 	app.post('/add_friend', function(req, res) {
 		console.log("POST DATA", req.body);
  		friends.add(req,res);
	})

  	app.post('/remove_friend', function(req, res) {
 		console.log("DELTE", req.body.id);
  		friends.remove(req,res);
	})
}

