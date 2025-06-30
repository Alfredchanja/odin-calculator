
// Function to perform basic arithmetic operations
// Sum function.
function sum(num1, num2){
    return num1 + num2;
};

// Difference function.
function difference(num1, num2){
    return num1 - num2;
};

// Product function.
function product(num1, num2){
    return num1 * num2;
};

// Quotient function with error handling for division by zero.
function quotient(num1, num2){
    if (num2 === 0) {
        return "Error: Cannot divide by zero";
    } else {
        return num1 / num2;
    }
};

// Function to perform basic arithmetic operations
function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return sum(num1, num2);
        case "-":
            return difference(num1, num2);
        case "x":
            return product(num1, num2);
        case "/":
            return quotient(num1, num2);
        default:
            return "Error: Invalid operator";
    }
}


