var nTournamentServices = angular.module('nTournamentServices', ['ngResource']);

nTournamentServices.service('Tournament',['$resource',
function ($resource) {
  var tournamentlist =[];
  var resourceData = $resource('/data/data.json');
  tournamentlist = resourceData.query();

this.tournaments = function () {
    return tournamentlist;
};
this.tournament = function (tournamentId) {
    return Enumerable.From(tournamentlist).SingleOrDefault(null,function(i) { return i.tournamentId == tournamentId; });
}
this.addTournament = function (tournament) {
    tournaments.push(tournament);
}
}


]);
