document.getElementById("botao").addEventListener("click", () => {
    function atualizarRelogio() {
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const segundos = String(agora.getSeconds()).padStart(2, '0');

        const horarioAtual = `${horas}:${minutos}:${segundos}`;
        document.getElementById("rel").textContent = horarioAtual;

        setTimeout(atualizarRelogio, 1000);
    }

    atualizarRelogio();
});