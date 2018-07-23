/*jshint esversion:6*/
app.directive('adderValidator', ['appService', function(appService){
  return {
    link: function(scope, element, attrs) {
      let button        = element[0];
      let nameInput     = document.querySelector('#charNameAdd').firstElementChild;
      let hpInput       = document.querySelector('#charHpAdd').firstElementChild;
      let popup         = document.querySelector('#adderPopup');

      popup.style.display = 'none';

      button.onclick = function() {
        if (!appService.char.name) {
          popup.style.display = 'block';

          let popper = new Popper(nameInput, popup, {
            placement : 'top'
          });

          setTimeout(function() {
            popup.style.display = 'none';
          }, 5000);
        } else if (!appService.char.hitPoints) {
          popup.style.display = 'block';

          let popper = new Popper(hpInput, popup, {
            placement : 'top'
          });

          setTimeout(function() {
            popup.style.display = 'none';
          }, 5000);
        } else {
          return;
        }//end if...else
      };//end onclick
    }//end link
  };//end return
}]);//end initInputFocus
