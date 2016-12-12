'use strict';

angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/tempates', {
      templateUrl: 'templates/templates.html',
      controller: 'TemplatesController'
    });
}])

.controller('TemplatesController', ['$scope', function(){
  console.log($scope);
}]);
