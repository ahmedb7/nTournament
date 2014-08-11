var mongoose = require('mongoose'),
    tournament = require('../models/tournament.js');
module.exports = TournamentList;

function TournamentList(connection)
{
  mongoose.connect(connection);
}

TournamentList.prototype = {
  list: function(req, res) {
      // use mongoose to get all tournamentData in the database
      tournament.find(function(err, tournamentData) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
          res.send(err)
          
        res.json(tournamentData); // return all tournaments in JSON format
      });
},
addTournament: function(req,res)
{
    var item = req.body;
    newTournament = new tournament();
    console.log('Indata:');
    console.log(item);
    console.log('Tournament Added:');


    newTournament.tournamentId = item.tournamentId;
    newTournament.name = item.name;
    newTournament.tournamentStartTime = item.tournamentStartTime;
    newTournament.registrationStartTime = item.registrationStartTime;
    newTournament.registrationEndTime = item.registrationEndTime;
    newTournament.streamLink = item.streamLink;
    newTournament.priority = item.priority;
    newTournament.rules = item.rules;
    newTournament.teams = item.teams;
    newTournament.description = item.description;
    console.log(newTournament);
    newTournament.save(function savedTournament(err)
    {
      if (err)
        res.send(err);
    });
},
deleteTournament: function(req,res)
{
  tournament.remove({
    _id : req.params.todo_id
  }, function(err, tournamentData) {
    if (err)
      res.send(err);
    });
}
}
