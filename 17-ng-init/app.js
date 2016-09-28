angular.module("app", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider)
{
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })


    $urlRouterProvider.otherwise("/");
})

.controller("homeCtrl", function($scope, $state)
{
  $scope.loadHomeRequirements = function(){
    $scope.homeData = $state;
  }
})

.controller("loginCtrl", function($scope, $state)
{
  
})
