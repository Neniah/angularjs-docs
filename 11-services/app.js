angular.module('app', [])

.controller('appCtrl', function($scope, Users){
  $scope.users = Users.usuarios();
})

.service("Users", function(){
  this.usuarios = function(){
    return [
      {
        id: 0,
        name: "Hook",
        age: 26
      },
      {
        id: 1,
        name: "Peter",
        age: 32
      },
      {
        id: 2,
        name: "Samantha",
        age: 27
      },
      {
        id: 3,
        name: "Jack",
        age: 43
      },
      {
        id: 4,
        name: "Sussan",
        age: 54
      },
      {
        id: 5,
        name: "Nate",
        age: 33
      }
    ]
  }
})
