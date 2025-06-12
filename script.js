// Function to perform basic arithmetic operations
// Sum function.
function sum(a, b){
    return a + b;
};

// Difference function.
function difference(a, b){
    return a - b;
};

// Product function.
function product(a, b){
    return a * b;
};

// Quotient function with error handling for division by zero.
function quotient(a, b){
    if (b === 0) {
        return "Error: Cannot divide by zero";
    } else {
        return a / b;
    }
};

// Function to perform basic arithmetic operations
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
            return "Error: Invalid operator";
    }
}
