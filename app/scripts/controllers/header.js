(function () {
  'use strict';

  angular.module('contactsApp')
    .controller('HeaderController', ['$scope', '$location', function($scope, $location){
      $scope.isActive = function(desiredPath){
        return desiredPath === $location.path();
      };
    }]);
} ());
