angular.module('app', [])

.controller('appCtrl', function($scope){

  $scope.color = "#1b1b1b";
  $scope.reverseName = function(){
    $scope.nombre = $scope.nombre.split("").reverse().join("");
  }
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

.directive("template", function(){
  return{
    restrict: "A",
    scope: {
      nombre: "@",
      color: "=",
      reverse: "&"
    },
    template: "<div class='well' ng-click='reverse()'>{{ nombre }}</div>",
    link: function(scope, element, attrs){

    }
  }
})
