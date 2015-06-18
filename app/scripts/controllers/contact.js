(function () {
  'use strict';

  angular.module('contactsApp')
    .controller('ContactController', ['$scope', function($scope){
      $scope.message = 'Hello Contact';
    }]);
}());
