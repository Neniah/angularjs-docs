var app = angular.module('app', [])
.directive('myDirective', function(){
  return{
    restrict: 'E',
    template: '<a href="http://marialobillo.com">Click me to go to my web page.</a>'
  }
});
