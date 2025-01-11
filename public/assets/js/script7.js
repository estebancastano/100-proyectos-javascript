// Variables para manejar el estado
let currentInput = '';
let previousInput = '';
let operator = null;

// Seleccionar elementos
const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const calculateButton = document.querySelector('.calculate');

// Actualizar la pantalla
function updateDisplay(value) {
    display.value = value;
}

// Manejar clics en números
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.value;
        updateDisplay(currentInput);
    });
});

// Manejar clics en operadores
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '') return; // No se puede operar sin número
        if (previousInput !== '') {
            previousInput = calculator(operator, parseFloat(previousInput), parseFloat(currentInput));
            updateDisplay(previousInput);
        } else {
            previousInput = currentInput;
        }
        currentInput = '';
        operator = button.value;
    });
});

// Manejar clic en igual
calculateButton.addEventListener('click', () => {
    if (operator && currentInput !== '' && previousInput !== '') {
        const result = calculator(operator, parseFloat(previousInput), parseFloat(currentInput));
        updateDisplay(result);
        previousInput = '';
        currentInput = '';
        operator = null;
    }
});

// Manejar clic en limpiar
clearButton.addEventListener('click', () => {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay(0);
});

// Función de cálculo
function calculator(operation, num1, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default:
            return 'Error: Invalid operation';
    }
}