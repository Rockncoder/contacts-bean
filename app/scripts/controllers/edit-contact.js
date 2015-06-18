(function(){
  'use strict';

  angular.module('contactsApp')
    .controller('EditContactController', ['$scope','$routeParams', 'ContactService', function($scope, $routeParams, ContactService){
      var id = $routeParams.id;
      var isNew = !id;

      console.log("Is it new?" + isNew);

      $scope.title = isNew? "Add": "Edit";
      $scope.currentContact = isNew? {}: ContactService.getContacts(id);
    }]);
}());
