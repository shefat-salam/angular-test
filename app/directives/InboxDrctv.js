'use strict';
  app.directive('inbox', function InboxDrctv () {
    return {
      restrict: 'EA',
      replace: true,
      scope: false,
      templateUrl: '../directives/inbox.tmpl.html',
      controllerAs: 'inbox',
      controller: function (InboxFactory,$scope,$filter) {
        this.messages = [];
        this.goToMessage = function (id) {
          InboxFactory.goToMessage(id);
        };
      
        InboxFactory.getMessages()
          .then( angular.bind( this, function() {this.messages = InboxFactory.messages;}) );  
           
          $scope.$watch("messages", function(n, o) {
            var checked = $filter("filter")(n, { checked: true });
            debugger;
            console.log(checked);
            if (checked.length) {
                scope.selected = checked;
                $('.deleteBtn').removeAttr('disabled');
            } else {
                $('.deleteBtn').attr('disabled', 'disabled');
            }
        }, true);  

      },
      link: function (scope, element, attrs, ctrl) {
        
     
  
        scope.isAll = false;
        scope.selectAll = function(messages) {
         
            if (scope.isAll === false) {
                angular.forEach(messages, function(messages) {
                  messages.checked = true;
                });
                scope.isAll = true;
            } else {
                angular.forEach(messages, function(messages) {
                  messages.checked = false;
                });
                scope.isAll = false;
            }
        };
        
        scope.deleteMessage = function (messages) {
            angular.forEach(messages, function(row, index) {
                if ( messages[index].checked) {
                    messages.splice(index, 1);
                }
            });
        };
      }
    }
  });