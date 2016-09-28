angular.module('app', [])

.constant("CONFIG", {
  API_URL: "htpp://api.com",
  HOMEPATH: "#/home",
  LOGINPATH: "#/login"
});

.controller('appCtrl', function($scope, CONFIG){

})
