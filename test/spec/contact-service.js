'use strict';

describe('Test Contact Service', function () {

  var Service,
    scope;

  beforeEach(module('contactsApp'));

  beforeEach(inject(function ($service, $rootScope) {
    Service = $service('ContactService', {
      $scope: scope
    });
  }));

  it('should give us a promise', function () {

  });
});
