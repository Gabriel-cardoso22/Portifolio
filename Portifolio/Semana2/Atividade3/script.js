document.getElementById("verificar").addEventListener("click", () => {
    let texto = document.getElementById('texto').value;

    let textoFormatado = texto.toLowerCase().replace(/[^a-z0-9]/g, '');

    let textoReverso = textoFormatado.split('').reverse().join('');

    if (textoFormatado === textoReverso) {
        alert("O texto digitado é um palíndromo.");
    } else {
        alert("O texto digitado NÃO é um palíndromo.");
    }
});
