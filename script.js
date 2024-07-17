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

