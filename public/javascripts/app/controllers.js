var nTournamentControllers = angular.module('nTournamentControllers', []);
var returnToTournamentList = '/tournament/list';

nTournamentControllers.controller('TournamentMainCtrl', [
    '$scope','Tournament','News',
    function ($scope, Tournament, News) {
    $scope.tournaments = Tournament.tournaments();
    $scope.newslist = News.news();
    $scope.orderProp = ['priority', 'name'];
    $scope.addTournament = function () {
        Tournament.addTournament($scope.newTournament);

    }


}
]);

nTournamentControllers.controller('TournamentDetailsCtrl', ['$scope', '$routeParams', 'Tournament',
    function ($scope, $routeParams, Tournament) {
    $scope.tournament = Tournament.tournament($routeParams.tournamentId);

}

])
