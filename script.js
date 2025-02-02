// Object to keep track of calculator values
const calculator = {
    displayValue: '0', // Value currently displayed on the screen
    firstOperand: null, // First operand for operations
    waitingForSecondOperand: false, // Flag to check if the next value is the second operand
    operator: null, // Operator for the calculation
};

// Object to define the calculations for each operator
const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand,
};

// Function to handle digit input
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    // If waiting for second operand, replace display value with the digit
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        // If not, append the digit to the display value
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

// Function to handle decimal input
function inputDecimal(dot) {
    // If waiting for second operand, do nothing
    if (calculator.waitingForSecondOperand === true) return;

    // If the display value does not already contain a decimal point, add it
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

// Function to handle operator input
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    // If an operator already exists and waiting for the second operand, update the operator
    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }

    // If the first operand is null, store the current input value as the first operand
    if (firstOperand == null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        // If an operator exists, perform the calculation and store the result
        const currentValue = firstOperand || 0;
        const result = performCalculation[operator](currentValue, inputValue);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    // Set the flag for waiting for the second operand and store the operator
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

// Function to reset the calculator to its initial state
function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

// Function to update the display value on the screen
function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

// Initial call to update the display
updateDisplay();

// Event listener for button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    // Handle operator buttons
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    // Handle decimal button
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    // Handle all-clear button
    if (target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }

    // Handle digit buttons
    inputDigit(target.value);
    updateDisplay();
});