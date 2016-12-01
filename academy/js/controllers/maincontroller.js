app.controller('MainController', [
  '$scope', function($scope){
    $scope.title = 'English Books';
    $scope.promo = 'The Books of this month.';
    $scope.product = {
      name: 'The Eight',
      price: 19,
      pubdate: new Date('2014', '03', '08')
    };
  }
]);
