app.controller('MainController', [
  '$scope', function($scope){
    $scope.title = 'English Books';
    $scope.promo = 'The Books of this month.';
    $scope.products = [
   {
     name: 'The Eight',
     price: 19,
     pubdate: new Date('2014', '03', '08'),
     cover: 'img/the8.jpg'
   },
   {
     name: 'Program or be Programmed',
     price: 8,
     pubdate: new Date('2013', '08', '01'),
     cover: 'img/pendulum.jpg'
   },
   {
     name: 'The Book of the Secrets',
     price: 23,
     pubdate: new Date('2013', '08', '01'),
     cover: 'img/pendulum.jpg'
   },
   {
     name: 'The old man and the sea',
     price: 12,
     pubdate: new Date('2013', '08', '01'),
     cover: 'img/pendulum.jpg'
   }
 ];
  }
]);
