angular.module('app', [])

.controller('appCtrl', function($scope){
  $scope.users = [
    {
      "name": "Peter",
      "age": "29"
    },
    {
      "name": "Thomas",
      "age": "32"
    }
  ];
})
