document.querySelectorAll('button').forEach(function (button) {
    button.addEventListener('click', function () {

        const buttonText = this.textContent;
        const inputField = document.querySelector('input[type="text"]');

        // Check if the input field exists
        // If the button is "AC", clear the input field
        // Otherwise, append the button text to the input field
        if (buttonText === "AC"){
            inputField.value = '';
        } else {
            inputField.value += buttonText;
        }
    });
});