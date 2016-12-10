var app = angular.module('app', ['ngRoute']);

app.config(['routeProvider', function($routeProvider){
  $routeProvider.
   when('/main',{
     template: 'main.html',
     controller: 'MainController'
   }).
   when('/about',{
     template: 'about.html',
     controller: 'MainController'
   }).
   when('/services',{
     template: 'services.html',
     controller: 'MainController'
   }).when('/contact',{
     template: 'contact.html',
     controller: 'ContactController'
   }).
   otherwise({redirectTo:'/main'})
}])
.controller('MainController', ['$scope', function($scope){
  $scope.person = 'Jhon Doe';
  console.log($scope);
}]);
