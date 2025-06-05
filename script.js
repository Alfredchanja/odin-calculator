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
        } else if (buttonText === "=") { // Outputs the result if the '=' button is clicked.
            const parts = inputField.value.split(' ');
            if (parts.length === 3) {
                const num1 = parseFloat(parts[0]);
                const operator = parts[1];
                const num2 = parseFloat(parts[2]);
                const result = operate(num1, num2, operator);
                inputField.value = result;
            } else {
                inputField.value = "Error: Invalid expression";
            }
        } else if (["+", "-", "x", "/"].includes(buttonText)) {
            inputField.value += ` ${buttonText} `;
        } else {
            inputField.value += buttonText;
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
