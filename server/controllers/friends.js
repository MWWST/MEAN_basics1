var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
module.exports = (function() {
	  return {
	    show: function(req, res) {
	  		Friend.find({}, function(err, results) {
			    if(err) {
			      console.log(err);
			      // console.log(Friend.find());
			    	} 
			    else {
			      res.json(results);
			      // console.log(results);
			    	}
	  			})
			},

		add: function(req,res){
			var friend = new Friend(req.body);
			friend.save(function(err,results){
	   			// if there is an error console.log that something went wrong!
	    		if(err) {
	      		console.log('something went wrong' + res);
	    		} 
	    		else { 
	    		// else console.log that we did well and then redirect to the root route
	      			console.log('successfully added friend');
	      			res.json({result:'i made it '});
	      			// res.redirect('/deals');
	    			}
				})
			},
			
		remove: function(req,res){
			console.log(req.body.id);
			friendid = 'ObjectId'+'("'+req.body.id+'")'
			console.log(friendid);
			Friend.remove({_id: req.body.id},function (err, results){
				console.log(req.params.id);
				if(err){
					console.log('this does not work' + err);				
					}
				else{
					Friend.find({},function(err,results){
					console.log('what happened',results);
					res.json(results);
					});
					} 
  				});
			}
		}
})();