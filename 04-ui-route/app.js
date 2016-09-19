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
    .state('users', {
      url: '/users',
      templateUrl: 'templates/ursers.html',
      controller: 'usersCtrl'
    })
    .state('users', {
      url: '/users',
      templateUrl: 'templates/ursers.html',
      controller: 'usersCtrl'
    })
    .state('editUsers', {
      url: '/users/:id/edit',
      templateUrl: 'templates/ursers.edit.html',
      controller: function($scope, $stateParams){
        $scope.userId = $stateParams.id;
      }
    })

    $urlRouterProvider.otherwise("/");
})

.controller("homeCtrl", function()
{

})

.controller("loginCtrl", function()
{

})

.controller("registerCtrl", function()
{

})
