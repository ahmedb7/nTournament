﻿var nTournamentControllers = angular.module('nTournamentControllers', []);
var returnToTournamentList = '/tournament/list';

nTournamentControllers.controller('TournamentMainCtrl', [
    '$scope','Tournament','News','RandomShortGuid',
    function ($scope, Tournament, News,RandomShortGuid) {
    $scope.newTournament = new Tournament();
    $scope.tournaments = Tournament.query();
    $scope.newslist = News.news();
    $scope.orderProp = ['priority', 'name'];
    $scope.addTournament = function () {
      $scope.newTournament.tournamentId = RandomShortGuid.New();
      $scope.newTournament.$save();
    };


}
]);

nTournamentControllers.controller('TournamentDetailsCtrl', ['$scope', '$routeParams', 'Tournament',
    function ($scope, $routeParams, Tournament) {
    $scope.tournament = Tournament.get({id: $routeParams.tournamentId});

    $scope.UpdateTournament = function()
    {
      $scope.tournament.$save();
    }
}

])
