document.getElementById("botao").addEventListener("click", () => {
    let numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, insira um número inteiro positivo.");
        return;
    }

    function fatorial(n) {
        let f = 1;
        for (let i = 2; i <= n; i++) {
            f = f * i;
        }
        return f;
    }

    let resultadoFatorial = fatorial(numero);
    alert(`O fatorial do número ${numero} é ${resultadoFatorial}.`);
});
