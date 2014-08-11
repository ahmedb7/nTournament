
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var app = express();


//var mongoose = require('mongoose');
//mongoose.connect(process.env.CUSTOMCONNSTR_MONGOLAB_URI);
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function callback () {
//  console.log("db connection established")
  // yay!
//});

//är inte säker på om modelen borde ligga här, relocate at your leisure

var TournamentList = require('./routes/tournaments.js');
var tournamentList = new TournamentList('mongodb://wleusdb01:l.ijY2JkJXruT68_wr_zypBCC_4MQNRqTHUdIUE_FaQ-@ds035787.mongolab.com:35787/wleusdb01');


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
app.get('/api/tourData', tournamentList.list.bind(tournamentList));
// create tournament and send back all tournaments after creation
app.post('/api/tourData', tournamentList.addTournament.bind(tournamentList));
// delete a tournament
app.delete('/api/tourData/:tournamentData_id', tournamentList.deleteTournament.bind(tournamentList));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
