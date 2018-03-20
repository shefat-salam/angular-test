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
      controller: 'inboxCtrl'
    })
    .when('/email', {
      templateUrl: 'email/views/email.html',
      controller: 'emailCtrl'
    })
    .otherwise({redirectTo: '/inbox'});
}]);
