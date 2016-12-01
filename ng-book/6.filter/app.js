var app = angular.module('app', []);
app.directive('ensureUnique', function($http){
  return {
    require: 'ngModel',
    link: function(scope, ele, attrs, c){
      scope.$watch(attrs.ngModel, function(n){
        if(!n) return;
        $http({
          method: 'POST',
          url: '/api/check/' + attrs.ensureUnique,
          data: {'field': attrs.ensureUnique}
        }).success(function(data){
          c.$setValidity('unique'. data.isUnique);
        }).error(function(data){
          c.$setValidity('unique', false);
        });
      });
    }
  }
});

app.directive('ngFocus', [function(){
  var FOCUS_CLASS = 'ng-focused';
  return {
    retrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ctrl){
      ctrl.$focused = false;
      element.bind('focus', function(evt){
        element.addClass(FOCUS_CLASS);
        scope.$apply(function(){
          ctrl.$focused = true;
        });
      }).bind('blur', function(evt){
        element.removeClass(FOCUS_CLASS);
        $scope.$apply(function){
          ctrl.$focused = false;
        });
      });
    }
  }
}]);
