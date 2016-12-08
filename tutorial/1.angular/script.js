var app = angular.module('app', ['ngRoute']);

app.config(['routeProvider', function($routeProvider){
  $routeProvider.
   when('/main',{
     template: 'main.html',
     controller: 'MainController'
   });
}])
.controller('MainController', [function(){
  console.log('This is the MainController');
}]);
