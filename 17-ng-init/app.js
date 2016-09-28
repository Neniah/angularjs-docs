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

})

.controller("loginCtrl", function($scope, $state)
{
  $scope.goHome = function(){
    $state.go("home");
  }
})

.controller("usersCtrl", function()
{

})
