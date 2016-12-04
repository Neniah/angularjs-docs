var app = angular.module('app', [])
.run(function($rootScope){
  $rootScope.rootProperty = 'root scope';

})
.controller('ParentController', function($scope){
  
});
