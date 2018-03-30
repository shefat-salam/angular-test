'use strict';

app.factory('InboxFactory', function inboxFactory ($q, $http, $location) {
    var exports = {};
    exports.messages = [];
    exports.goToMessage = function(id) {
      if ( angular.isNumber(id) ) {
        $location.path('inbox/email/' + id)
      }
    }
    // exports.deleteSelected = function(messages) {
    //   angular.forEach(messages, function(id, index) {
    //       if ( messages[index].checked) {
    //           messages.splice(index, 1);
    //       }
    //   });
    // }
    // exports.deleteMessage = function (id, index) {
    //   this.messages.splice(index, 1);
    // }
    exports.getMessages = function () {
      var deferred = $q.defer();
      return $http.get('../../mock-data/emails.json')
        .success(function (data) {
          exports.messages = data;
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
      console.log(deferred.promise);
      
    };
   
    return exports;

  });
