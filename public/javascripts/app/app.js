var nTournamentApp = angular.module('nTournamentApp', [
    'ngRoute',
    'nTournamentAnimations',
    'nTournamentControllers',
    'nTournamentServices'
]);
nTournamentApp.config([
    '$routeProvider', function ($routeProvider) {
    $routeProvider.
            when('/', {
        templateUrl: 'partials/tournaments',
        controller: 'TournamentMainCtrl'
        }).
            when('/partials/tournaments', {
        templateUrl: 'partials/tournaments',
        controller: 'TournamentMainCtrl'
    }).
            when('/tournaments/:tournamentId', {
        templateUrl: 'partials/tournamentdetails',
        controller: 'TournamentDetailsCtrl'
    }).
            when('/createnewtournament',
            {
              templateUrl: 'createnewtournament',
              controller: 'TournamentMainCtrl'
            }).
            otherwise({
        redirectTo: '/'
    })
;
}
]);
