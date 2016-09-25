angular.module('app', [])

.controller('appCtrl', function($scope, UsersFactory){

})

.factory("UsersFactory", function($http){
  return {
    get: function(){
      return $http({
        url: "users.json",
        method: "GET"
      })
    }
  }
})
