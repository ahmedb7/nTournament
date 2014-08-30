'use strict';

angular.module('tournaments').controller('TournamentsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Tournaments',
  function($scope, $stateParams, $location, Authentication, Tournaments) {
    $scope.authentication = Authentication;

    $scope.create = function() {
      var tournament = new Tournaments({
        //TODO: Här ska in tournament-specifika properties
        //      istället för title och content
        name: this.name,
        game: this.game,
        genre: this.genre,
        tournamentHeaderImage: this.tournamentHeaderImage,
        tournamentthumb: this.tournamentthumb,
        streamLink: this.streamLink,
        priority: this.priority,
        rules: this.rules,
        user: this.user,
        description: this.description,
        tournamentStartTime: this.tournamentStartTime,
        registrationStartTime: this.registrationStartTime,
        registrationEndTime: this.registrationEndTime
      });
      tournament.$save(function(response) {
        $location.path('tournaments/' + response._id);
        //TODO: Här ska in tournament-specifika properties
        //      istället för title och content
        $scope.name = '';
        $scope.game = '';
        $scope.genre = '';
        $scope.description = '';
        $scope.tournamentHeaderImage = '';
        $scope.tournamentthumb = '';
        $scope.streamLink = '';
        $scope.priority = '';
        $scope.rules = '';
        $scope.user =  '';
        $scope.tournamentStartTime = new Date();
        $scope.registrationStartTime = new Date();
        $scope.registrationEndTime = new Date();
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
    $scope.isAdminOrEditor = function(user)
    {
      return user.roles.indexOf('admin') > -1 || user.roles.indexOf('editor') > -1;
    };
  }
]);
