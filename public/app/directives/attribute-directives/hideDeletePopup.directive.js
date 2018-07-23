/*jshint esversion:6*/
app.directive('hideDeletePopup', function() {
  return {
    link: function(scope, element, attrs) {
      let elem = element[0];
      let popup = elem.parentElement.parentElement;

      elem.onclick = function() {
        popup.style.display = 'none';
      };//end onclick
    }//end link
  };//end return
});//end clearConfirm
