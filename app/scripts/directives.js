(function () {
  'use strict';

  angular.module('contactsApp')
    .directive('hello', [function () {
      return {
        restrict: 'EA',
        template: '<div>Hello</div>',
        replace: false,
        link: function (scope, element, attrs) {
          debugger;
        }
      };
    }])
    .directive('datepicker', [function () {
      return {
        restrict: 'EA',
        replace: true,
        template: "<input type='text'>",
        link: function (scope, element, attrs) {
          var options = {
            dateFormat: "mm/dd/yy"
          };
          element.datepicker(options);
        }
      };
    }])
}());
