const app = document.getElementById('app');

const container = document.createElement('div');
container.classList.add('contador_container');  // Classe para centralizar o container

const title = document.createElement('h1');
title.innerText = 'Total';
container.appendChild(title);

const totalCounter = document.createElement('div');
totalCounter.classList.add('counter');
totalCounter.innerText = '0';
container.appendChild(totalCounter);

// Seção de gêneros
const secao_genero = document.createElement('div');
secao_genero.classList.add('selecao_genero');

// Função para atualizar o total
function updateTotal() {
    const total = parseInt(CounterMasc.innerText) + parseInt(CounterFem.innerText);
    totalCounter.innerText = total;
}

// Função para criar os contadores por gênero
function creategeneroCounter(genero, label) {
    const generoDiv = document.createElement('div');
    generoDiv.classList.add('genero');
    
    // Imagem do gênero
    const img = document.createElement('img');
    img.src = genero === 'male' ? './IMG/ft_Homen.png' : './IMG/ft_Mulher.png';
    generoDiv.appendChild(img);

    // Botões de controle (+/-)
    const btnContainer = document.createElement('div');

    const addButton = document.createElement('button');
    addButton.innerText = '+';
    addButton.onclick = function() {
        const counter = genero === 'male' ? CounterMasc : CounterFem;
        counter.innerText = parseInt(counter.innerText) + 1;
        updateTotal();
    };
    btnContainer.appendChild(addButton);

    const removeButton = document.createElement('button');
    removeButton.innerText = '-';
    removeButton.onclick = function() {
        const counter = genero === 'male' ? CounterMasc : CounterFem;
        if (parseInt(counter.innerText) > 0) {
            counter.innerText = parseInt(counter.innerText) - 1;
            updateTotal();
        }
    };
    btnContainer.appendChild(removeButton);

    generoDiv.appendChild(btnContainer);

    const generoLabel = document.createElement('p');
    generoLabel.innerText = label;
    generoDiv.appendChild(generoLabel);

    const generoCounter = document.createElement('div');
    generoCounter.classList.add('counter');
    generoCounter.innerText = '0';
    generoDiv.appendChild(generoCounter);

    secao_genero.appendChild(generoDiv);

    return generoCounter;
}

const CounterMasc = creategeneroCounter('male', 'Homens');
const CounterFem = creategeneroCounter('female', 'Mulheres');

const resetButton = document.createElement('button');
resetButton.innerText = 'Resetar';
resetButton.classList.add('reset-btn');  

resetButton.onclick = function() {
    CounterMasc.innerText = '0';
    CounterFem.innerText = '0';
    updateTotal();
};
container.appendChild(resetButton);

container.appendChild(secao_genero);
app.appendChild(container);
