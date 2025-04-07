

const app = document.getElementById('app');

// Criação da div da calculadora
const calculator = document.createElement('div');
calculator.classList.add('calculator');
app.appendChild(calculator);

// Criação do visor
const display = document.createElement('div');
display.id = 'display';
display.textContent = '0';
calculator.appendChild(display);

// Criação dos botões
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttons');
calculator.appendChild(buttonContainer);

const buttons = [
  'AC', '%', '±', '÷',
  '7', '8', '9', '×',
  '4', '5', '6', '−',
  '1', '2', '3', '+',
  '0', '.', '='
];

let currentInput = '0';
let operator = null;
let previousInput = null;

function updateDisplay() {
  display.textContent = currentInput;
}

function handleButtonClick(label) {
  if (!isNaN(label) || label === '.') {
    if (currentInput === '0' && label !== '.') {
      currentInput = label;
    } else {
      currentInput += label;
    }
  } else if (label === 'AC') {
    currentInput = '0';
    operator = null;
    previousInput = null;
  } else if (label === '±') {
    currentInput = (parseFloat(currentInput) * -1).toString();
  } else if (label === '%') {
    currentInput = (parseFloat(currentInput) / 100).toString();
  } else if (['+', '−', '×', '÷'].includes(label)) {
    operator = label;
    previousInput = currentInput;
    currentInput = '0';
  } else if (label === '=') {
    if (operator && previousInput != null) {
      const prev = parseFloat(previousInput);
      const current = parseFloat(currentInput);

      switch (operator) {
        case '+':
          currentInput = (prev + current).toString();
          break;
        case '−':
          currentInput = (prev - current).toString();
          break;
        case '×':
          currentInput = (prev * current).toString();
          break;
        case '÷':
          currentInput = current === 0 ? 'Erro' : (prev / current).toString();
          break;
      }

      operator = null;
      previousInput = null;
    }
  }
  updateDisplay();
}

// Criar e adicionar botões à calculadora
buttons.forEach(label => {
  const button = document.createElement('button');
  button.textContent = label;
  button.classList.add('button');
  if (isNaN(label) && label !== '.') {
    button.classList.add('operator');
  }
  if (label === '0') {
    button.classList.add('double');
  }
  button.addEventListener('click', () => handleButtonClick(label));
  buttonContainer.appendChild(button);
});

updateDisplay();