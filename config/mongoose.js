// This is our mongoose.js file located in /config/mongoose.js
// This is a config file that connects to MongoDB and loads all of our models for us. We do this here because we don't want to have to connect to the DB every time we require a model!
// require mongoose

// require file-system so that we can load, read, require all of the model files

// connect to the database

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/FullMean_Friends");

mongoose.connection.on('connected', function () {
    mongoose.connection.db.collectionNames(function (err, names) {
        if (err) console.log(err);
        else console.log(names);
    });
})
var fs = require('fs');
// specify the path to all of the models
var models_path = __dirname + '/../server/models'
// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})