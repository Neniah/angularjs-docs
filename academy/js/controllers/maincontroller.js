app.controller('MainController', [
  '$scope', function($scope){
    $scope.title = 'English Books';
    $scope.promo = 'The Books of this month.';
    $scope.product = {
      name: 'The Eight',
      price: 19
    };
  }
]);
