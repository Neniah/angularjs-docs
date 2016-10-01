angular.module("app", ["ui.router", "ngMessages", "ngStorage"])

.config(function($stateProvider, $urlRouteProvider){
  $urlRouteProvider.otherwise("/")
})
