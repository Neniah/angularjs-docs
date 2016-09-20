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

  $scope.numbers = [1,2,3,4,5,6,7,8,9,10];
})
