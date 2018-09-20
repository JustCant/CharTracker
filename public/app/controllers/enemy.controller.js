/*jshint esversion:6*/
app.controller('enemyCtrl', ['$scope', 'appService', function($scope, appService) {
  $scope.appService = appService;

  $scope.addEnemyCopies = function(amount, charArray) {
    let num = parseInt(amount);
    let char = charArray[0];
    let $copyInputValue = $('#enemyCopyInput').val();

    if (char) {
      if($copyInputValue === '' || isNaN(parseInt($copyInputValue))) {
        return;
      } else {
        for (let i = 1; i <= num; i++) {
          let d                      = new Date();
          let random                 = d.getTime() * Math.random();
          appService.char.id         = random;
          appService.char.name       = charArray[0].name + ' copy ' + i;
          appService.char.type       = charArray[0].type;
          appService.char.hitPoints  = charArray[0].hitPoints;
          appService.char.armorClass = null;
          appService.char.initiative = null;
          appService.char.maxHp = charArray[0].hitPoints;
          appService.enemyChars.push(appService.char);
          appService.localChars.push(appService.char);
          localStorage.setItem(`${appService.char.id}`, JSON.stringify(appService.char));
          appService.char = {};
        }
      }
    } else if (!char){
      return;
    }
  };

  $scope.clearAllEnemies = function() {
    let length = localStorage.length;
    appService.enemyChars = [];
    for (let j = length - 1; j >= 0; j--) {
      let localChar = JSON.parse(localStorage.getItem(localStorage.key(j)));
      if (localChar.type === 'enemy') {
        localStorage.removeItem(localChar.id);
      }//end if
    }//end for
  };//end clearAllEnemies

  $scope.checkValidName = function(char) {
    if (char.name === '') {
      return;
    } else {
      localStorage.setItem(`${char.id}`, JSON.stringify(char));
    }
  };

  $scope.checkValidAc = function(char) {
    if (char.armorClass === null) {
      return;
    } else {
      localStorage.setItem(`${char.id}`, JSON.stringify(char));
    }
  };

  $scope.checkValidMaxHp = function(char) {
    if (char.maxHp === null) {
      return;
    } else {
      localStorage.setItem(`${char.id}`, JSON.stringify(char));
    }
  };

  $scope.checkValidHp = function(char) {
    if (char.hitPoints === null) {
      return;
    } else {
      localStorage.setItem(`${char.id}`, JSON.stringify(char));
    }
  };

  //Function which allows the user to edit the name and/or hp of a char
  $scope.save = function(char) {
    if (char.name === '' || char.armorClass === null || char.maxHp === null || char.hitPoints === null) {
      return;
    } else {
      localStorage.setItem(`${char.id}`, JSON.stringify(char));
    }
  };//end save

  //Function which increments the hp of a creature
  $scope.increment = function(char, number) {
    char.hitPoints = parseInt(char.hitPoints);
    char.hitPoints += number;
    localStorage.setItem(`${char.id}`, JSON.stringify(char));
  };//end increment

  //Function which decrements the hp of a creature
  $scope.decrement = function(char, number) {
    char.hitPoints = parseInt(char.hitPoints);
    char.hitPoints -= number;
    localStorage.setItem(`${char.id}`, JSON.stringify(char));
  };//end decrement

  //This funciton will activate/deactivate a condition for a character
  $scope.activate = function(char, condition) {
    switch(condition) {
      case 0:
        char.blinded = !char.blinded;
        break;
      case 1:
        char.charmed = !char.charmed;
        break;
      case 2:
        char.deafened = !char.deafened;
        break;
      case 3:
        char.dodge = !char.dodge;
        break;
      case 4:
        char.exhausted = !char.exhausted;
        break;
      case 5:
        char.frightened = !char.frightened;
        break;
      case 6:
        char.grappled = !char.grappled;
        break;
      case 7:
        char.hidden = !char.hidden;
        break;
      case 8:
        char.incapacitated = !char.incapacitated;
        break;
      case 9:
        char.invisible = !char.invisible;
        break;
      case 10:
        char.paralyzed = !char.paralyzed;
        break;
      case 11:
        char.petrified = !char.petrified;
        break;
      case 12:
        char.poisoned = !char.poisoned;
        break;
      case 13:
        char.prone = !char.prone;
        break;
      case 14:
        char.restrained = !char.restrained;
        break;
      case 15:
        char.stunned = !char.stunned;
        break;
      case 16:
        char.unconscious = !char.unconscious;
        break;
      case 17:
        char.advantage = !char.advantage;
        break;
      case 18:
        char.disadvantage = !char.disadvantage;
        break;
    }//end switch

    localStorage.setItem(`${char.id}`, JSON.stringify(char));
  };//end activate

  //Function which deletes a character
  $scope.deleteEnemy = function(char, charArray) {
    let index = charArray.indexOf(char);
    charArray.splice(index, 1);
    localStorage.removeItem(`${char.id}`);
  };//end delete
}]);
