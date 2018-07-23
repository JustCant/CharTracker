app.directive('initInputFocus', function(){
  return {
    link: function(scope, element, attrs) {
      element.on('click', function(e) {
        this.nextElementSibling.firstElementChild.focus();
      });//end onclick
    }//end link 
  };//end return
});//end initInputFocus
