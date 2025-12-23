let currentInput = "";
let firstValue = null;
let secondValue = null;
let operator = null;
const screen = document.getElementById("screen");

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

// Function to update the calculator screen
function updateScreen(value) {
    screen.value = value;
}

// Function to handle button clicks and perform calculations
function display () {
    const display = document.querySelectorAll("button");

    display.forEach((button) => {
        button.addEventListener("click", () => {

            const value = button.textContent;

            if (!isNaN(value) && value !== " " || value === ".") {
                currentInput += value; // Append the clicked number to the current input.
                updateScreen(currentInput); // Update the screen with the current input.
            } else if (["+", "-", "x", "/"].includes(value) && currentInput !== "") {

                if (firstValue === null){
                    firstValue = parseFloat(currentInput); // Store the first input value of the user
                } else if(operator !== null && currentInput !== "") {
                    secondValue = parseFloat(currentInput);
                    firstValue = operate(firstValue, secondValue, operator).toFixed(2); // Performs the operation.
                }

                operator = value; // Store the operator.
                currentInput = ""; // Clear current input for the next number.

                updateScreen(firstValue); // Update the screen with the first value.
            } else if ((value === "=" && currentInput !== "" && firstValue !== null && operator !== null)) {
                secondValue = parseFloat(currentInput); // Store the second input value of the user.
                let result = operate(firstValue, secondValue, operator).toFixed(2); // Perform the operation.
                updateScreen(result); // Display the result on the screen.

                // Reset for the next calculation.
                currentInput = result.toString();
                firstValue = null;
                secondValue = null;
                operator = null;
            } else if (value === "AC") {
                // Clear all values and reset the calculator.
                currentInput = "";
                firstValue = null;
                secondValue = null;
                operator = null;
                updateScreen("0");
            }
        });
    })
};

display();