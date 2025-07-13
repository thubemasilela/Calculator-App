var newLine = true;
var value1;
var currentOperator;

//When any digit is pressed
function digitBtnPressed(button) {
  if (newLine) {
    document.querySelector(".inputBox").value = button;
    newLine = false;
  } else {
    var currentValue = document.querySelector(".inputBox").value;
    document.querySelector(".inputBox").value = currentValue + button;
  }
}
// When the AC button is pressed
function ACBtnPressed() {
  document.querySelector(".inputBox").value = 0;
  newLine = true;
}

// When an operator is pressed
function operatorBtnPressed(operator) {
  currentOperator = operator;
  value1 = parseInt(document.querySelector(".inputBox").value);
  newLine = true;
}

//When the equals button is pressed
function equalsBtnPressed() {
  var value2 = parseInt(document.querySelector(".inputBox").value);
  var answer;

  switch (currentOperator) {
    case "+":
      answer = value1 + value2;
      break;
    case "*":
      answer = value1 * value2;
      break;
    case "/":
      answer = value1 / value2;
      break;
    case "-":
      answer = value1 - value2;
      break;
  }
  document.querySelector(".inputBox").value = answer;
  newLine = true;
  value1 = 0;
}
