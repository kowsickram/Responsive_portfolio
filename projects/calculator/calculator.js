
const display = document.querySelector('.display');

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
    display.value += character;
}

function evaluateExpression() {
    display.value = eval(display.value);
}

// Event listener for keypress
document.addEventListener('keypress', function(event) {
    const key = event.key;
    if (/[\d.\/\*\-\+]/.test(key)) {
        appendCharacter(key);
    } else if (key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        evaluateExpression();
    }
});
