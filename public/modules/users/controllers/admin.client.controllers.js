'use strict';

angular.module('users').controller('AdminController', ['$scope', '$stateParams','$location','Users', 'Authentication',
  function($scope, $stateParams, $location, Users, Authentication) {

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
        id: $stateParams.id
      });
    };
  $scope.isAdmin = function()
  {
    return Authentication.user.roles.indexOf('admin') > -1;
  };

}]);
