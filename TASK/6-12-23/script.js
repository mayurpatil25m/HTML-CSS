function validateName() {

     inputText = document.getElementById('inputText').value;

     alphabetPattern = /^[A-Za-z]+$/;

    if (alphabetPattern.test(inputText)) {
        document.getElementById('result1').innerHTML = 'Input is valid!';

    } else {
        document.getElementById('result1').innerHTML = 'Please enter only alphabets.';

    }
}

function validateNumber() {

     inputNumber = document.getElementById('inputNumber').value;

     numberPattern = /^[0-9]+$/;

    if (numberPattern.test(inputNumber)) {
      document.getElementById('result2').innerHTML = 'Input is valid!';
      
    } else {
      document.getElementById('result2').innerHTML = 'Please enter only numbers.';
      
    }
  }

  function validateEmail() {
     inputEmail = document.getElementById('inputEmail').value;

     emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(inputEmail)) {
      document.getElementById('result3').innerHTML = 'Email is valid!';
     
    } else {
      document.getElementById('result3').innerHTML = 'Please enter a valid email address.';
      
    }
  }
