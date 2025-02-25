function atualizarHora() {
    let hora = new Date().toLocaleTimeString();
    document.getElementById("rel").innerHTML = hora;
}

document.getElementById("botao").addEventListener("click", () => {
    setInterval(atualizarHora, 1000);
});