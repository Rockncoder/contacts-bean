(function(){
  'use strict';

  angular.module('contactsApp')
    .controller('EditContactController', ['$scope','$routeParams', function($scope, $routeParams){
      console.info("Id = "+$routeParams.id)

    }]);
}());
