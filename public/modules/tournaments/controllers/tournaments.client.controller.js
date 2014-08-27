'use strict';

angular.module('tournaments').controller('TournamentsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Tournaments',
  function($scope, $stateParams, $location, Authentication, Tournaments) {
    $scope.authentication = Authentication;

    $scope.create = function() {
      var tournament = new Tournaments({
        title: this.title,
        content: this.content
      });
      tournament.$save(function(response) {
        $location.path('tournaments/' + response._id);

        $scope.title = '';
        $scope.content = '';
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.remove = function(tournament) {
      if (tournament) {
        tournament.$remove();

        for (var i in $scope.tournaments) {
          if ($scope.tournaments[i] === tournament) {
            $scope.tournaments.splice(i, 1);
          }
        }
      } else {
        $scope.tournament.$remove(function() {
          $location.path('tournaments');
        });
      }
    };

    $scope.update = function() {
      var tournament = $scope.tournament;

      tournament.$update(function() {
        $location.path('tournaments/' + tournament._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.find = function() {
      $scope.tournaments = Tournaments.query();
    };

    $scope.findOne = function() {
      $scope.tournament = Tournaments.get({
        tournamentId: $stateParams.tournamentId
      });
    };
  }
]);
