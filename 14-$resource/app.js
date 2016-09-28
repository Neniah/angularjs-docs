angular.module('app', ["ngResource"])

.config(function($httpProvider){
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.post["Content-type"] = "application/x-www-form-urlencoded; charset=UTF-8";
})

.controller('appCtrl', function($scope, UsersFactory){

})

.factory("UsersFactory", function($resource){
  return $resource("http://localhost/php/slimrest/books/:id")
})
