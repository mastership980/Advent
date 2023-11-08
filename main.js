function specialButtonClick() {
    alert("helyes napon kattintottál rá!");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var specialDate = new Date('2023-11-08'); // ÉÉÉÉ-HH-NN
    var today = new Date();
  
    var specialButton = document.getElementById('specialButton');
  
    if (today.toDateString() === specialDate.toDateString()) {
      specialButton.classList.add('clickable');
      specialButton.removeAttribute('disabled');
    }else{
    }
  });