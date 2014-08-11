
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var app = express();


var mongoose = require('mongoose');
mongoose.connect(process.env.CUSTOMCONNSTR_MONGOLAB_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("db connection established")
  // yay!
});

//är inte säker på om modelen borde ligga här, relocate at your leisure
var tournamentSchema = mongoose.Schema({
  tournamentId:String,
  name:String,
  tournamentCreated: { type: Date, default: Date.now },
  tournamentStartTime:Date,
  registrationStartTime:Date,
  registrationEndTime:Date,
  streamLink: String,
  priority: Number,
  rules: [{
    key:String,
    values:[String]
  }],
  teams:[{
  id:String,
  name:String,
  teamLogoUrl:String,
  members:{
    id:String,
    username:String,
    inGameName:String,
    avatarurl:String
  },
  description:String
  }]

});
var tournamentData = mongoose.model('tournamentData', tournamentSchema)


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.configure('development', function () { app.locals.pretty = true; });
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', routes.index);
app.get('/partials/tournaments', routes.tournaments);
app.get('/partials/tournamentdetails', routes.tournamentsdetails);
app.get('/partials/createnewtournament',routes.createnewtournament);
//api ahead, here be dragons------
app.get('/api/tourData', function(req, res) {
		// use mongoose to get all tournamentData in the database
		tournamentData.find(function(err, tournamentData) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(tournamentData); // return all todos in JSON format
		});
	});

	// create todo and send back all todos after creation
app.post('/api/tourData', function(req, res) {

		// information comes from AJAX request from Angular

tournamentData.create({
  tournamentId:req.body.tournamentId,
  name:req.body.name,
  tournamentStartTime:req.body.tournamentStartTime,
  registrationStartTime:req.body.registrationStartTime,
  registrationEndTime:req.body.registrationEndTime,
  streamLink:req.body.streamLink,
  priority:req.body.priority,
  rules:[{
    key:req.body.key,
    values:req.body.values
  }],
  teams:[{
  id:req.body.id,
  name:req.body.name,
  teamLogoUrl:req.body.teamLogoUrl,
  members:{
    id:req.body.id,
    username:req.body.username,
    inGameName:req.body.inGameName,
    avatarurl:req.body.avatarurl
  },
  description:req.body.description
}],
		}, function(err, tournamentData) {
			if (err)
				res.send(err);

		});

	});

	// delete a todo
app.delete('/api/tourData/:tournamentData_id', function(req, res) {
		tournamentData.remove({
			_id : req.params.todo_id
		}, function(err, tournamentData) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			tournamentData.find(function(err, tourData) {
				if (err)
					res.send(err)
				res.json(tourData);
			});
		});
	});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
