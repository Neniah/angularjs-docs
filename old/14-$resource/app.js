angular.module('app', ["ngResource"])

.config(function($httpProvider){
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.post["Content-type"] = "application/x-www-form-urlencoded; charset=UTF-8";
})

.controller('appCtrl', function($scope, UsersFactory){
  $scope.get = function(){
    UsersFactory.query(
      function(res){
        $scope.response = res;
      },
      function(err){
        console.log(err)
      }
    )
  }

  $scope.getById = function(id){
    UsersFactory.get({id: id},
      function(res){
        $scope.response = res;
      },
      function(err){
        console.log(err);
      })
  }

  $scope.post = function(){
    UsersFactory.save("title=Libro2&author=Autor&isbn=12232093853093").$promise.then(
      function(res){
        $scope.response = res;
      },
      function(err){
        console.log(err);
      }
    )
  }

  $scope.put = function(){
    UsersFactory.update({id: 4}, "title=Libro4444&author=Autor&isbn=12232093853093").$promise.then(
      function(res){
        $scope.response = res;
      },
      function(err){
        console.log(err);
      }
    )
  }

  $scope.delete = function(){
    UsersFactory.delete({id: 4}).promise.then(
      function(res){
        $scope.response = res;
      },
      function(err){
        console.log(err);
      }
    )
  }

})

.factory("UsersFactory", function($resource){
  return $resource("http://localhost/php/slimrest/books/:id",
    {id: "@id"},
    {
      update: {
        method: "PUT",
        params: {id: "@id"},
        headers: {'Content-type' : "application/x-www-form-urlencoded; charset=UTF-8"}
      }
    }
)
})
