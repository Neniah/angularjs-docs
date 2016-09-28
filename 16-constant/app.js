angular.module('app', [])

.constant("CONFIG", {
  API_URL: "htpp://api.com",
  HOMEPATH: "#/home",
  LOGINPATH: "#/login"
})

.controller('appCtrl', function($scope, UsersFactory){
  console.log(UsersFactory.config());
})

.factory("UsersFactory", function(CONFIG){
  return {
    config: function(){
      return CONFIG.API_URL
    }
  }
})
