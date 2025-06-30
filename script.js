let num1 = null;
let num2 = null;
let operator = null;

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

function displayInput(){
    // Displaying the input numbers.
    const numBtns = document.querySelectorAll(".num");
    const display = document.getElementById("display");

    numBtns.forEach(numbtn => {
        numbtn.addEventListener("click", () => {
            if(display.value === "0") {
                display.value = numbtn.textContent;
            } else{
                display.value += numbtn.textContent;
            }

            if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(numbtn.textContent)) {
                if (num1 === null) {
                    num1 = parseFloat(display.value)
                }
            } else if (['+', '-', 'x', '/'].includes(btn.textContent)) {
                if (num1 !== null && operator === null){
                    operator = btn.textContent;
                    display.value = operator;
                } else {
                    display.value = "Error: Invalid input";
                }
            }
        })
    });
}

displayInput();