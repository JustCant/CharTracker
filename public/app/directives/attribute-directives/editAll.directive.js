/*jshint esversion:6*/
app.directive('editAll', function(){
  return {
    link: function(scope, element, attrs) {
      let button = element[0];
      let saveButton = button.nextElementSibling;
      let nameField = button.parentElement.previousElementSibling.previousElementSibling.firstElementChild;
      let nameInput = nameField.nextElementSibling;
      let armorClassField = nameInput.nextElementSibling.nextElementSibling;
      let armorClassInput = armorClassField.nextElementSibling;
      let MaxHpField = button.parentElement.previousElementSibling.firstElementChild;
      let MaxHpInput = MaxHpField.nextElementSibling;
      let hitPointsField = MaxHpInput.nextElementSibling;
      let hitPointsInput = hitPointsField.nextElementSibling;

      saveButton.style.display = 'none';

      button.onclick = function(e) {
        nameField.style.display = 'none';
        armorClassField.style.display = 'none';
        MaxHpField.style.display = 'none';
        hitPointsField.style.display = 'none';
        button.style.display = 'none';

        nameInput.style.display = 'block';
        armorClassInput.style.display = 'block';
        MaxHpInput.style.display = 'block';
        hitPointsInput.style.display = 'block';
        saveButton.style.display = 'block';
      };//end onclick
    }//end link
  };//end return
});//end initInputFocus
