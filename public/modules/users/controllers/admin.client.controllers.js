'use strict';

angular.module('users').controller('AdminController', ['$scope', '$stateParams','$location','Users','AdminUsers', 'Authentication',
  function($scope, $stateParams, $location, Users, AdminUsers, Authentication) {

    $scope.update = function() {
      var users = $scope.users;

      users.$update(function() {
        $location.path('users/' + users.username);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.find = function() {
      $scope.users = AdminUsers.query();
    };

    $scope.findOne = function() {
      $scope.user = AdminUsers.get({
        id: $stateParams.id
      });
    };
  $scope.isAdmin = function()
  {
    return Authentication.user.roles.indexOf('admin') > -1;
  };
  $scope.addRole = function(role)
  {
    if(Authentication.user.roles.indexOf('admin') > -1){

        console.log($scope.user);
        $scope.user.roles.push(role);
        $scope.user.$update();

    }
  };

}]);
