/*jshint esversion:6*/
app.directive('charInputBlur', function(){
  return {
    link: function(scope, element, attrs) {
      let input  = element[0];
      let elem = input.previousElementSibling;
      let popup = input.parentElement.parentElement.firstElementChild;

      input.onblur = function() {
        if (this.value === '') {
          this.focus();

          popup.style.display = 'block';

          let validatePopper = new Popper(input, popup, {
            placement: 'top'
          });
        } else {
          if (popup.style.display === 'block') {
            popup.style.display = 'none';
          }//end if
          elem.style.display = 'block';
          input.style.display = 'none';
        }//end if...else
      };//end onclick
    }//end link
  };//end return
});//end initInputFocus
