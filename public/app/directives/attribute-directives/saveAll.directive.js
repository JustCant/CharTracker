/*jshint esversion:6*/
app.directive('saveAll', function(){
  return {
    link: function(scope, element, attrs) {
      let button = element[0];
      let editButton = button.previousElementSibling;
      let nameField = button.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
      let nameInput = nameField.nextElementSibling;
      let armorClassField = nameInput.nextElementSibling.nextElementSibling;
      let armorClassInput = armorClassField.nextElementSibling;
      let MaxHpField = button.parentElement.previousElementSibling.firstElementChild;
      let MaxHpInput = MaxHpField.nextElementSibling;
      let hitPointsField = MaxHpInput.nextElementSibling;
      let hitPointsInput = hitPointsField.nextElementSibling;

      button.onclick = function(e) {
        if(nameInput.value === '' ||
          armorClassInput.value === '' ||
          MaxHpInput.value === '' ||
          hitPointsInput.value === '') {
          return;
        } else {
          nameField.style.display = 'block';
          armorClassField.style.display = 'block';
          MaxHpField.style.display = 'block';
          hitPointsField.style.display = 'block';
          editButton.style.display = 'block';

          nameInput.style.display = 'none';
          armorClassInput.style.display = 'none';
          MaxHpInput.style.display = 'none';
          hitPointsInput.style.display = 'none';
          button.style.display = 'none';
        }//end if...else       
      };//end onclick
    }//end link
  };//end return
});//end initInputFocus
