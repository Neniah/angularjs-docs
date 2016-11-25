angular.module('myApp');
.controller('PlaylistCtrl', ['$scope', 'Playlist',
  function($scope, Playlist){
    $scope.playlist = Playlist.getList();
  }]);
