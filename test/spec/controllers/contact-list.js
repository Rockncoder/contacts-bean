'use strict';

describe('Contact List Controller', function () {

  // load the controller's module
  beforeEach(module('contactsApp'));

  var ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('ContactListController', {
      $scope: scope
    });
  }));

  it('should attach contact list to scope', function () {
    expect(scope.list).toBeDefined();
    expect(typeof scope.list.length <= 4).toBeTruthy();

  });
});
