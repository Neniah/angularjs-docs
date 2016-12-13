'use strict';

// Declare app level module which depends on views, and components
var templateStore = angular.module('templateStore', [
  'ngRoute',
  'templateStore.view1',
  'templateStore.view2',
  'templateStore.templates',
  'templateStore.directives',
  'templateStore.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
