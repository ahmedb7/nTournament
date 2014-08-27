'use strict';

// Setting up route
angular.module('tournaments').config(['$stateProvider',
  function($stateProvider) {
    // tournaments state routing
    $stateProvider.
    state('listtournaments', {
      url: '/tournaments',
      templateUrl: 'modules/tournaments/views/list-tournaments.client.view.html'
    }).
    state('createtournament', {
      url: '/tournaments/create',
      templateUrl: 'modules/tournaments/views/create-tournament.client.view.html'
    }).
    state('viewtournament', {
      url: '/tournaments/:tournamentId',
      templateUrl: 'modules/tournaments/views/view-tournament.client.view.html'
    }).
    state('edittournament', {
      url: '/tournaments/:tournamentId/edit',
      templateUrl: 'modules/tournaments/views/edit-tournament.client.view.html'
    });
  }
]);
