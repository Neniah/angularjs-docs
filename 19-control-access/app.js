angular.module("app", ["ui.router", "ngMessages", "ngStorage"])

.config(function($stateProvider, $urlRouteProvider){
  $stateProvider
    .state("app", {
      abstract: true,
      templateUrl: "templates/navigation.html",
      controller: "navigationCtrl"
    })
    .state("app.dashboard",{
      url: "/dashboard",
      templateUrl: "templates/dashboard.html",
      controller: "dashboardCtrl"
    })
    .state("app.users",{
      url: "/users",
      templateUrl: "templates/users.html",
      controller: "usersCtrl"
    })
    .state("app.login",{
      url: "/login",
      templateUrl: "templates/login.html",
      controller: "loginCtrl"
    })

  $urlRouteProvider.otherwise("/");
})
