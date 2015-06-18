(function (){
  'use strict';

  angular.module('contactsApp')
    .controller('ContactListController',['$scope', function($scope){
      $scope.message = 'Hello contact list';
    }]);
}());
