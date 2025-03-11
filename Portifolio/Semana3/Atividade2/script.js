function Carro(marca, modelo, ano, cor, km, valor_fipe) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.km = km;
    this.valor_fipe = valor_fipe;
}

Carro.prototype.anosUtilizacao = function() {
    const anoAtual = new Date().getFullYear();
    return anoAtual - this.ano;
}

Carro.prototype.valorMercado = function() {
    const anosUso = this.anosUtilizacao();
    const kmAnual = this.km / (anosUso || 1);
    let valorMercado = this.valor_fipe;

    if (kmAnual <= 30000) {
        valorMercado *= 1.1;
    } else if (kmAnual > 50000) {
        valorMercado *= 0.9;
    }

    return valorMercado.toFixed(2);
}

document.getElementById("botao").addEventListener("click", () => {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = parseInt(document.getElementById("ano").value);
    const cor = document.getElementById("cor").value;
    const km = parseFloat(document.getElementById("km").value);
    const valor_fipe = parseFloat(document.getElementById("valor_fipe").value);

    if (!marca || !modelo || isNaN(ano) || !cor || isNaN(km) || isNaN(valor_fipe)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    const carro = new Carro(marca, modelo, ano, cor, km, valor_fipe);

    document.getElementById("resultado").innerHTML = `
        <strong>Anos de Utilização:</strong> ${carro.anosUtilizacao()} anos <br>
        <strong>Valor de Mercado:</strong> R$ ${carro.valorMercado()}
    `;
});