var nTournamentApp = angular.module('nTournamentApp', [
    'ngRoute',
    'nTournamentAnimations',
    'nTournamentControllers',
    'nTournamentServices'
]);
nTournamentApp.config([
    '$routeProvider', function ($routeProdiver) {
    $routeProdiver.
            when('/tournaments', {
        templateUrl: 'tournaments',
        controller: 'TournamentMainCtrl'
    }).
            when('/tournaments/:tournamentId', {
        templateUrl: 'tournamentdetails',
        controller: 'TournamentDetailsCtrl'
    }).
            otherwise({
        redirectTo: '/tournaments'
    })
;
}
]);