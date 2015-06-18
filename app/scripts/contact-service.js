(function () {
  'use strict';

  angular.module('contactsApp')
    .service('ContactService', ['$http', function ($http) {
      var contacts = {
        "1": {firstName: "Abel", lastName: "Able", telephone: "7141112222", email: "aable@gmail.com", createdAt: ""},
        "2": {
          id: 2,
          firstName: "Betty",
          lastName: "Baker",
          telephone: "7141112222",
          email: "bbaker@gmail.com",
          createdAt: ""
        },
        "3": {
          id: 3,
          firstName: "Charles",
          lastName: "Charlie",
          telephone: "7141112222",
          email: "ccharlie@gmail.com",
          createdAt: ""
        },
        "4": {
          id: 4,
          firstName: "Dan",
          lastName: "Delta",
          telephone: "7141112222",
          email: "ddelta@gmail.com",
          createdAt: ""
        },
        "5": {
          id: 5,
          firstName: "Eric",
          lastName: "Echo",
          telephone: "7141112222",
          email: "eecho@gmail.com",
          createdAt: ""
        }
      };

      return {
        getContacts: getContacts,
        postContact: postContact,
        putContact: putContact,
        deleteContact: deleteContact
      };


      function findContact(id) {
        if(contacts[id]){
          return contacts[id];
        }
        return null;
      }

      function getContacts(id) {
        var contactArray = [],
          wantAll = !id;
        if (wantAll) {
          angular.forEach(contacts, function (item, index) {
            this.push(item);
          }, contactArray)
          return contactArray;
        } else {
          return findContact(id);
        }
      }

      function postContact(contact) {
        if (find) {

        }

      }

      function putContact(id, contact) {

      }

      function deleteContact(id) {

      }
    }]);
}());
