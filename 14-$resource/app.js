angular.module('app', ["ngResource"])

.config(function($httpProvider){
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  
})

.controller('appCtrl', function($scope){

})
