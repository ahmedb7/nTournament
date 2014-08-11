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
      tournamentData.find(function(err, tournamentData) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
          res.send(err)

        res.json(tournamentData); // return all tournaments in JSON format
      });
},
addTournament: function(req,res)
{
    var item = req.body.item;
    newTournament = new tournament();

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

    newTournament.save(function savedTournament(err)
    {
      if (err)
        res.send(err);
    });
},
deleteTournament: function(req,res)
{
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
}
}
