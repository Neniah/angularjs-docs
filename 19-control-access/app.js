angular.module("app", ["ui.router", "ngMessages", "ngStorage"])

.config(function($stateProvider, $urlRouteProvider){
  $stateProvider
    .state("app", {
      abstract: true,
      templateUrl: "templates/navigation.html",
      controller: navigationCtrl
    })
    .state("app.dashboard",{
      url: "/dashboard",
      templateUrl: "templates/dashboard.html",
      controller: "dashboardCtrl"
    })
  $urlRouteProvider.otherwise("/");
})
