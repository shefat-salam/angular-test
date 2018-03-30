'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
    .when('/inbox', {
      templateUrl: 'inbox/views/inbox.html',
      controller: 'inboxCtrl',
      controllerAs: 'inbox'
    })
    .when('/inbox/email/:id', {
      templateUrl: 'email/views/email.html',
      controller: 'emailCtrl',
      controllerAs: 'email'
    })
    .otherwise({redirectTo: '/inbox'});
}]).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});
