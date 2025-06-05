num1 = 0;
num2 = 0;
operator = "";

function sum(a, b){
    return console.log(a + b);
};

function difference(a, b){
    return console.log(a - b);
};

function product(a, b){
    return console.log(a * b);
};

function quotient(a, b){
    if (b === 0) {
        return console.log("Error: Cannot divide by zero");
    } else {
        return console.log(a / b);
    }
};

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return sum(a, b);
        case "-":
            return difference(a, b);
        case "x":
            return product(a, b);
        case "/":
            return quotient(a, b);
        default:
            return console.log("Error: Invalid operator");
    }
}