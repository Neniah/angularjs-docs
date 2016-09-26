angular.module('app', [])

.controller('appCtrl', function($scope, UsersFactory){
  UsersFactory.get().then(
    function(users){
      $scope.usuarios = users.data;
    },
    function(err){
      $scope.error = err.statusText;
    }
  )
})

.factory("UsersFactory", function($http){
  return {
    get: function(){
      return $http({
        url: "users.json",
        method: "GET"
      })
    },
    getOne: function(id){
      return $http({
        url: API_URL + "/users/" + id,
        method: 'GET'
      });
    }
  }
})
