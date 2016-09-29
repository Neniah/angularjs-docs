angular.module('app', ["ngMessages"])

.controller('appCtrl', function($scope){
  $scope.register = function(user){
    console.log(JSON.stringify(user));
  }

})
