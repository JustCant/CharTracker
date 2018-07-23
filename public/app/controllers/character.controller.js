/*jshint esversion                 :6*/
app.controller('characterCtrl', ['$scope', 'appService', function($scope, appService) {
  //If local storage has data populate columns
  if (localStorage.length > 0) {
    for (let j = 0; j < localStorage.length; j++) {
      let localChar = JSON.parse(localStorage.getItem(localStorage.key(j)));
      appService.localChars.push(localChar);
      if (localChar.type === 'hero') {
          appService.playerChars.push(localChar);
      } else if (localChar.type === 'enemy') {
          appService.enemyChars.push(localChar);
      }//end inner if...else
    }//end for
  } else {
    console.log('Nothing in local Storage');
  }//end outer...else

  //If no hero and/or enemy exists populate with dummy data
  if (appService.playerChars.length === 0) {
    let hero = {"name":"Mario","hitPoints":100, "maxHp": 100, "initiative": "", "armorClass":15, "type":"hero","show":false,"popupShow":false,"id":'Mario'};
    appService.playerChars.push(hero);
    localStorage.setItem('Mario', JSON.stringify(hero));
  }
  if (appService.enemyChars.length === 0) {
    let enemy = {"name" :"King Bowser","hitPoints":250, "maxHp": 250, "initiative": "", "armorClass":18, "type":"enemy","show":false,"popupShow":false,"id":'Bowser'};
    appService.enemyChars.push(enemy);
    localStorage.setItem('Bowser', JSON.stringify(enemy));
  }
}]);//end controller
