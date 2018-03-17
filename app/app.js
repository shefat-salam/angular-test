'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
    .when('/view1', {
      templateUrl: 'view1/views/view1.html',
      controller: 'controllers/View1Ctrl'
    })
    .when('/view2', {
      templateUrl: 'view2/views/view2.html',
      controller: 'controllers/View2Ctrl'
    })
    .otherwise({redirectTo: '/view1'});
}]);
