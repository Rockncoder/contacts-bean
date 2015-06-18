(function(){
  'use strict';

  angular.module('contactsApp')
    .controller('EditContactController', ['$scope','$routeParams', 'ContactService', function($scope, $routeParams, ContactService){
      var id = $routeParams.id;
      var isNew = !id;

      console.log("Is it new?" + isNew);

      $scope.title = isNew? "Add": "Edit";
      if(isNew){
        $scope.currentContact = {};
      }else {
        ContactService.getContacts(id).then(function(data){
          $scope.currentContact = data.data;
        }, function(err) {
          console.log("error: "+JSON.stringify(err));
        });
      }
    }]);
}());
