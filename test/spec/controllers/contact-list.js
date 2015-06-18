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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toEqual(3);
  });
});
