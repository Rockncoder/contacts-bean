(function (){
  'use strict';

  angular.module('contactsApp')
    .controller('ContactListController',['ContactService', '$scope', function(ContactService, $scope){
      $scope.message = 'Hello contact list';
      $scope.list = ContactService.getContacts();
    }]);
}());
