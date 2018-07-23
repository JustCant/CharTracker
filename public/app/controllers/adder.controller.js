/*jshint esversion:6*/
app.controller('adderCtrl', ['$scope', 'appService', function($scope, appService){
  //Function which adds a char to the hero column
  $scope.appService = appService;

  $scope.addChar = function(type) {

    if (!appService.char.name) {
      return;
    } else if (!appService.char.hitPoints) {
      return;
    } else {
      let date                   = new Date();
      let timeInMs               = date.getTime();

      if (type === 'hero') {
        appService.char.type       = 'hero';
        appService.playerChars.push(appService.char);
      } else if (type ==='enemy') {
        appService.char.type       = 'enemy';
        appService.enemyChars.push(appService.char);
      }
      appService.char.id         = timeInMs;
      appService.char.armorClass = null;
      appService.char.initiative = null;
      appService.char.maxHp = appService.char.hitPoints;
      appService.localChars.push(appService.char);

      localStorage.setItem(`${appService.char.id}`, JSON.stringify(appService.char));

      setTimeout(function() {
        appService.char = {};
        console.log('reset');
      }, 1000);
    }//end if...else
  };//end addChar
}]);
