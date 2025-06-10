let num1 = null;
let num2 = null;
let operator = null;

// Event listeners to buttons.
document.querySelectorAll('button').forEach(function (button) {
    button.addEventListener('click', function () {

        const buttonText = this.textContent;
        const inputField = document.querySelector('input[type="text"]');

        // Check if the input field exists
        // If the button is "AC", clear the input field
        // Otherwise, append the button text to the input field
        if (buttonText === "AC") {
            inputField.value = '';
        } else if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(buttonText)) {
            inputField.value = buttonText;

            // If the operator is not set, assign the first number to num1 else assign it to num2.
            if (!operator) {
                num1 = parseFloat(inputField.value);
            } else {
                num2 = parseFloat(inputField.value);
            }
        } else if (["+", "-", "x", "/"].includes(buttonText)) {
            if (inputField.value) {
                if (operator && inputField.value) {
                    num1 = operate(num1, num2, operator);
                }
                operator = buttonText;
                inputField.value = num1;
            } else {
                inputField.value = "Error: Invalid input";
            }
        } else if (buttonText === "=") {
            const result = operate(num1, num2, operator);
            num1 = result; // Update num1 with the result for further calculations
            num2 = null; // Reset num2 for the next operation
            operator = null; // Reset operator for the next operation

            // Display the result in the input field if it's valid.
            if (result !== undefined) {
                inputField.value = result;
            } else {
                inputField.value = "Error: Invalid expression";
            }
        }
    });
});


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
