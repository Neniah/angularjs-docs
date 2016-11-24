angular.module('myApp')
.controller('PlaylistMethodsCtrl', ['$scope', 'Playlist', function($scope, Playlist){
  $scope.playlist = Playlist.getList();
  $scope.removeItem = function(id){Playlist.borrar(id);};
}])
