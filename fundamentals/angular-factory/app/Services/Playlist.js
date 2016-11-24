angular.module('myApp');
.factory('Playlist', function(){
  var playlist = [
    'The Miracle (of Joey Ramone)',
    'Raised By Wolves',
    'Every Breaking Wave',
    'Cedarwood Road',
    'California',
    'Sleep Like a Baby Tonight',
    'Iris',
    'The Troubles',
    'Volcano'
  ];
  var getList = function(){return playlist;};
  var removeItem = function(){playlist.splice(id, 1);};
  return {
    getList: getList,
    removeItem: removeItem
  };
})
