let currentInput = '';
let previousInput = '';
let operator = null;

const display = document.getElementById('display');

function updateDisplay() {
    display.value = currentInput || '0';
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = String(number);
    } else {
        currentInput += String(number);
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        calculateResult();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (operator === null || currentInput === '' || previousInput === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

function toggleSign() {
    if (currentInput === '') return;
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

updateDisplay();
