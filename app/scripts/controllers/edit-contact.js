(function(){
  'use strict';

  angular.module('contactsApp')
    .controller('EditContactController', ['$scope','$routeParams', 'ContactService', function($scope, $routeParams, ContactService){
      var id = $routeParams.id;

      $scope.currentContact = ContactService.getContacts(id);
    }]);
}());
