var nTournamentControllers = angular.module('nTournamentControllers', []);
var returnToTournamentList = '/tournament/list';

nTournamentControllers.controller('TournamentMainCtrl', [
    '$scope','Tournament','News',
    function ($scope, Tournament, News) {
    $scope.newTournament = new Tournament();
    $scope.tournaments = Tournament.query();
    $scope.newslist = News.news();
    $scope.orderProp = ['priority', 'name'];
    $scope.addTournament = function () {
      $scope.newTournament.$save();
    };
    $scope.removeTournament


}
]);

nTournamentControllers.controller('TournamentDetailsCtrl', ['$scope', '$routeParams', 'Tournament',
    function ($scope, $routeParams, Tournament) {
    $scope.tournament = Tournament.get({tournamentId: $routeParams.tournamentId});

    $scope.UpdateTournament = function()
    {
      $scope.tournament.$save();
    }
}

])
