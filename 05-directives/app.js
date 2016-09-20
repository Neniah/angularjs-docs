angular.module('app', [])

.controller('appCtrl', function($scope){

})

.directive('user', function(){
  return{
    restrict: "E",
    template: "<div><p>Nombre: {{ nombre }}, Edad: {{ edad }}</p></div>",
    link: function(scope, element, attrs){
      scope.nombre = "Jhon";
      scope.edad = "30";
    }
  }
})
