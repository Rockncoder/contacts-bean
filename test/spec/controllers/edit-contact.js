'use strict';

describe('Controller: Edit Contact', function () {

  // load the controller's module
  beforeEach(module('contactsApp'));

  var EditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    var deferred = $q.defer();
    scope = {}; //$rootScope.$new();
    EditCtrl = $controller('EditContactController', {
      $scope: scope,
      $routeParams: {id: 1}
    });

    it('set currentContact to an empty object when called without an id', function () {
      expect(scope.currentContact).toEqual({});
    });
  }));
});
