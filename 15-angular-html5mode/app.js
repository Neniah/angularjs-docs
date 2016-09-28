angular.module("app", ["ngRoute"])

.config(function($routeProvider, $locationProvider){
  $routeProvider.when("/home", {
    templateUrl: "templates/home.html",
    controller: "homeController"
  })
  .when("/login", {
    templateUrl: "templates/login.html",
    controller: "loginController"
  })
  .when("/register", {
    templateUrl: "templates/register.html",
    controller: "registerController"
  })
  .otherwise({ redirectTo: "/" });

  $locationProvider.html5Mode(true);

})

.controller('homeController', function(){

})

.controller('loginController', function(){

})

.controller('registerController', function(){

})
