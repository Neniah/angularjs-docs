var app = angular.module('app', [])
.directive('myDirective', function(){
  return{
    restrict: 'E',
    template: '<a class="btn btn-info btn-block" href="http://marialobillo.com">Click me to go to my web page.</a>'
  }
});
