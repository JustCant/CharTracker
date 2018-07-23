/*jshint esversion:6*/
app.directive('characterCopyValidator', ['appService', function(appService){
  return {
    link: function(scope, element, attrs) {
      let addButton = element[0];
      let input     = addButton.nextElementSibling;
      let popup1    = addButton.nextElementSibling.nextElementSibling;
      let popup2    = addButton.nextElementSibling.nextElementSibling.nextElementSibling;
      let value;
      let array;

      popup1.style.display = 'none';
      popup2.style.display = 'none';

      addButton.onclick =  function() {
        if (addButton.classList.contains('heroCopy')) {
          value = scope.heroesToAdd;
          array = appService.playerChars;
        } else if (addButton.classList.contains('enemyCopy')) {
          value = scope.enemiesToAdd;
          array = appService.enemyChars;
        }//end if...else

        if(!!array[0]) {
          if(value === undefined) {
            popup1.style.display = 'block';

            let copyPopper = new Popper(input, popup1, {
              placement: 'top'
            });

            setTimeout(function(){
              popup1.style.display = 'none';
            }, 5000);
          } else {
            if (popup1.style.display === 'block') {
              popup1.style.display = 'none';
            }//end if
          }//end if...else
        } else if (!array[0]){
          if (popup1.style.display === 'block') {
            popup1.style.display = 'none';
          }//end if

          popup2.style.display = 'block';

          let copyPopper = new Popper(input, popup2, {
            placement: 'top'
          });

          setTimeout(function(){
            popup2.style.display = 'none';
          }, 5000);
        }//end if...else
      };//end onclick

    }//end link
  };//end return
}]);//end noNumCopyPopup
