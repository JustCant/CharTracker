/*jshint esversion:6*/
app.directive('charInputFocus', function(){
  return {
    link: function(scope, element, attrs) {
      let elem  = element[0];
      let input = elem.nextElementSibling;

      input.style.display = 'none';

      elem.onclick = function(e) {
        elem.style.display = 'none';
        input.style.display = 'block';
        input.focus();
      };//end onclick
    }//end link
  };//end return
});//end initInputFocus
