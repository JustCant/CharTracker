/*jshint esversion:6*/
app.controller('initiativeCtrl', ['$scope', 'appService', function($scope, appService) {
  $scope.appService = appService;

  //function to reset initiative values
  $scope.reset = function() {
    let key;

    /* loop through localChars array and reset initiative and
       init values then save them to local storage */
    for(key in appService.localChars) {
      appService.localChars[key].initiative = '';
      appService.localChars[key].init = false;
      localStorage.setItem(`${appService.localChars[key].id}`, JSON.stringify(appService.localChars[key]));
    }//end for
    return appService.localChars;
  };//end reset

  //function that sets the initiative value for a character
  $scope.setInitiative = function(char) {
    localStorage.setItem(`${char.id}`, JSON.stringify(char));
    return JSON.parse(localStorage.getItem(`${char.id}`));
  };//end setInitiaive
}]);//end initiativeCtrl
