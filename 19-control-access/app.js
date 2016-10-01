angular.module("app", ["ui.router", "ngMessages", "ngStorage"])

.config(function($stateProvider, $urlRouteProvider){
  $stateProvider
    .state("app", {
      abstract: true,

    })
  $urlRouteProvider.otherwise("/");
})
