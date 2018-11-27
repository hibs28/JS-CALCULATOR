while (operator !== "q") {
  var num1Str = prompt("enter your first number");
  var num2Str = prompt("enter your second number");
  var num1 = parseFloat(num1Str);
  var num2 = parseFloat(num2Str);
  var operator = prompt("operator + - / *");
  var result;

  switch (operator) {
    case "/":
      result = num1 / num2;
      alert(result);
      break;
    case "*":
      result = num1 * num2;
      alert(result);
      break;
    case "":
      result = num1 - num2;
      alert(result);
      break;
    case "+":
      result = num1 + num2;
      alert(result);
      break;
    case "q":
      window.close();
      break;
    default:
      result = num1 + num2;
      alert(result);
      break;
  }
}