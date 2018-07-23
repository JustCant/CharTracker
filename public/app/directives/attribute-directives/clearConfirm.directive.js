/*jshint esversion:6*/
app.directive('clearConfirm', function() {
  return {
    link: function(scope, element, attrs) {
      let button = element[0];
      let popup = button.nextElementSibling;

      popup.style.display = 'none';

      button.onclick = function() {
        popup.style.display = 'block';
        let clearPopper = new Popper(button, popup, {
          placement: 'top'
        });
      };//end onclick
    }//end link
  };//end return
});//end clearConfirm
