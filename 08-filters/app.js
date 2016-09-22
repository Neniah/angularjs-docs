angular.module('app', [])

.controller('appCtrl', function($scope){
  $scope.users = [
    {name: 'Jhon', phone: '555-44-333', age: '43'},
    {name: 'Mark', phone: '033-12-090', age: '43'},
    {name: 'Paul', phone: '878-40-333', age: '43'},
    {name: 'Kate', phone: '455-44-222', age: '43'},
    {name: 'Peter', phone: '234-21-956', age: '43'},
    {name: 'Loreen', phone: '678-12-250', age: '43'},

  ];
})
