let number1 = +prompt("Enter your first number :") ;
let operator = prompt("Enter you operator (+,-,/,*) :")
let number2 = +prompt("Enter your second number :");
switch (operator){
    case'+':
    result = number1 + number2;
    break;

    case'-' :
    result = number1 - number2;
    break;

    case'*' :
    result = number1 * number2;
    break;

    case'/' :
    result = number1 / number2;
    break;

    default:
        text = "Please follow the instruction";
}

console.log(`Your first number is ${number1}, your second number is ${number2}, your operator is ${operator}, and your result is ${result}`);

