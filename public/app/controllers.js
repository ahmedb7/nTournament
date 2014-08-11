var nTournamentControllers = angular.module('nTournamentControllers', []);
var returnToTournamentList = '/tournament/list';

nTournamentControllers.controller('TournamentMainCtrl', [
    '$scope','Tournament','News',
    function ($scope, Tournament, News) {
    $scope.newTournament = {
"tournamentId": "",
"name": "",
"tournamentCreated": "",
"tournamentStartTime": "",
"registrationStartTime": "",
"registrationEndTime": "",
"streamLink": "",
"priority": null,
"important":null,
"tournamentthumb": "",
"tournamentHeaderImage": "",
"rules": [],
"teams": [],
"description": ""  };
    $scope.tournaments = Tournament.tournaments();
    $scope.newslist = News.news();
    $scope.orderProp = ['priority', 'name'];
    $scope.addTournament = function (newTournament) {
        Tournament.addTournament(newTournament);

    }


}
]);

nTournamentControllers.controller('TournamentDetailsCtrl', ['$scope', '$routeParams', 'Tournament',
    function ($scope, $routeParams, Tournament) {
    $scope.tournament = Tournament.tournament($routeParams.tournamentId);

}

])
