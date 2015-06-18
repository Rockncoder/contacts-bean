'use strict';

describe('Header Controller', function () {

  // load the controller's module
  beforeEach(module('contactsApp'));

  var ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('HeaderController', {
      $scope: scope
    });
  }));

  it('should have an isActive function', function () {
    expect(scope.isActive).toBeDefined();
  });
});

