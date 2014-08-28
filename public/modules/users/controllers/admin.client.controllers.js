'use strict';

angular.module('users').controller('AdminController', ['$scope', '$stateParams','$location','Users', 'Authentication',
  function($scope,$stateParams,$location, Users, Authentication) {

    $scope.remove = function(user) {
      if (user) {
        user.$remove();

        for (var i in $scope.users) {
          if ($scope.users[i] === user) {
            $scope.users.splice(i, 1);
          }
        }
      } else {
        $scope.user.$remove(function() {
          $location.path('users');
        });
      }
    };

    $scope.update = function() {
      var users = $scope.users;

      users.$update(function() {
        $location.path('users/' + users.username);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.find = function() {
      $scope.users = Users.query();
    };

    $scope.findOne = function() {
      $scope.user = Users.get({
        username: $stateParams.username
      });
    };


}]);
