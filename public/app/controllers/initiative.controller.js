/*jshint esversion:6*/
app.controller('initiativeCtrl', ['$scope', 'appService', function($scope, appService) {
  $scope.appService = appService;

  //function to reset initiative values
  $scope.reset = function() {
    let key;
    let array = [];

    /* loop through localChars array and reset initiative and
       init values then save them to local storage */
    for(key in appService.localChars) {
      appService.localChars[key].initiative = '';
      appService.localChars[key].init = false;
      localStorage.setItem(`${appService.localChars[key].id}`, JSON.stringify(appService.localChars[key]));
    }//end for

    //populate array for testing purposes
    for(let i = 0; i < localStorage.length; i++) {
      array.push(JSON.parse(localStorage.getItem(`${appService.localChars[i].id}`)));
    }//end for

    return array;
  };//end reset

  //function that sets the initiative value for a character
  $scope.setInitiative = function(char) {
    localStorage.setItem(`${char.id}`, JSON.stringify(char));
    return JSON.parse(localStorage.getItem(`${char.id}`));
  };//end setInitiaive
}]);//end initiativeCtrl
