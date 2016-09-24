angular.module('app', [])

.controller('appCtrl', function($scope){
  $scope.numbers = [1, 2, 5, 4, 8 ,7];
  $scope.bool = false;
  $scope.option = 2;
})
