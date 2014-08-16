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
        templateUrl: 'tournaments/list',
        controller: 'TournamentMainCtrl'
        }).
            when('/tournaments/list', {
        templateUrl: 'tournaments/list',
        controller: 'TournamentMainCtrl'
    }).

    when('/tournaments/new', {
      templateUrl: 'tournaments/new',
      controller: 'TournamentMainCtrl'
    }).
    //turns out that order matters, All regex paths should be defined after static paths. (otherwise /new returns as details, which makes alpacas cry)
        when('/tournaments/:tournamentId', {
    templateUrl: 'tournaments/details',
    controller: 'TournamentDetailsCtrl'
    }).
            otherwise({
        redirectTo: '/'
    })
;
}
]);
