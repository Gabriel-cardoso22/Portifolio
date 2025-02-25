document.getElementById("botao").addEventListener("click", () => {
    let numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, insira um número inteiro positivo.");
        return;
    }

    function ehPrimo(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    if (ehPrimo(numero)) {
        alert(`O número ${numero} é primo.`);
    } else {
        alert(`O número ${numero} não é primo.`);
    }
});
