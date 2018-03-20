'use strict';
  app.directive('inbox', function InboxDrctv () {
    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: '../directives/inbox.tmpl.html',
      controllerAs: 'inbox',

      controller: function (InboxFactory) {
        this.messages = [];

        this.goToMessage = function (id) {
          InboxFactory.goToMessage(id);
        };
        
        this.deleteMessage = function (id, index) {
          InboxFactory.deleteMessage(id, index);
        };
        
        InboxFactory.getMessages()
          .then( angular.bind( this, function then() {
              this.messages = InboxFactory.messages;
            }) );

      },
      link: function (scope, element, attrs, ctrl) {
        /* 
          by convention we do not $ prefix arguments to the link function
          this is to be explicit that they have a fixed order
        */
      }
    }
  });