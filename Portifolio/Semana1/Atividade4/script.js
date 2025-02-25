document.getElementById("botao").addEventListener("click", () => {
    let dado = document.getElementById('entrada').value;

    let confirmar = confirm("Deseja verificar o tipo do dado informado?");

    if (confirmar) {
        let tipo_Dado = typeof dado;

        if (!isNaN(dado) && dado.trim() !== "") {
            tipo_Dado = "number";
        }

        document.getElementById('resultado').innerHTML = `O tipo do dado é: ${tipo_Dado}`;
    } else {
        document.getElementById('resultado').innerHTML = "Obrigado por visitar esta página.";
    }
});
