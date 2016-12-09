var app = angular.module('app', ['ngRoute']);

app.config(['routeProvider', function($routeProvider){
  $routeProvider.
   when('/main',{
     template: 'main.html',
     controller: 'MainController'
   }).
   otherwise({redirectTo:'/main'})
}])
.controller('MainController', ['$scope', function($scope){
  console.log($scope);
}]);
