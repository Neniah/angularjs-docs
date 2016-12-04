var app = angular.module('app', [])
.run(function($rootScope){
  $rootScope.rootProperty = 'root scope';

})
.controller('ParentController', function($scope){
  $scope.parentProperty = 'parent scope';
})
.controller('ChildController', function($scope){
  $scope.childProperty = 'child scope';

  $scope.fullSentenceFromChild
    = 'Same $scope: We can access: ' +
    $scope.rootProperty + ' and ' +
    $scope.parentProperty + ' and ' +
    $scope.childProperty
});
