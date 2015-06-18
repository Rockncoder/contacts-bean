(function () {
  'use strict';


  angular.module('contactsApp')
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/contact-list.html',
          controller: 'ContactListController'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactController'
        })
        .when('/edit-contact/:id', {
          templateUrl: 'views/edit-contact.html',
          controller: 'EditContactController'
        })
        .when('/add-contact', {
          templateUrl: 'views/edit-contact.html',
          controller: 'EditContactController'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
}());
