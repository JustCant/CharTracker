/*jshint esversion:6*/
app.directive('saveValidation', function(){
  return {
    link: function(scope, element, attrs) {
      let button     = element[0];
      let nameInput  = button.parentElement.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling;
      let acInput    = nameInput.nextElementSibling.nextElementSibling.nextElementSibling;
      let maxHpInput = button.parentElement.previousElementSibling.firstElementChild.nextElementSibling;
      let hpInput    = maxHpInput.nextElementSibling.nextElementSibling;
      let popup1     = nameInput.nextElementSibling;
      let popup2     = button.parentElement.parentElement.firstElementChild;

      popup1.style.display = 'none';
      popup2.style.display = 'none';

      button.onclick = function() {

        if (scope.char.name === '') {
          popup1.style.display = 'block';

          let namePopper = new Popper(nameInput, popup1, {
            placement: 'top'
          });

          setTimeout(function(){
            popup1.style.display = 'none';
          }, 5000);
        } else if (scope.char.armorClass === null) {
          popup2.style.display = 'block';

          let numberPopper = new Popper(acInput, popup2, {
            placement: 'top'
          });

          setTimeout(function(){
            popup2.style.display = 'none';
          }, 5000);
        } else if (scope.char.maxHp === null) {
          popup2.style.display = 'block';

          let numberPopper = new Popper(maxHpInput, popup2, {
            placement: 'top'
          });

          setTimeout(function(){
            popup2.style.display = 'none';
          }, 5000);
        } else if (scope.char.hitPoints === null) {
          popup2.style.display = 'block';

          let numberPopper = new Popper(hpInput, popup2, {
            placement: 'top'
          });

          setTimeout(function(){
            popup2.style.display = 'none';
          }, 5000);
        } else {
          return;
        }//end if...else
      };//end onclick

    }//end link
  };//end return
});//end saveValidation
