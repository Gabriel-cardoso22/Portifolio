var array = [];

document.getElementById("botao").addEventListener("click", () => {
    const conteudo = document.getElementById("conteudo").value;

    array.push(conteudo);

    array.sort();

    const lista = document.getElementById("lista"); 
    
    
    lista.innerHTML = ""; // Limpa a lista exibida  

    for (let i = 0; i < array.length; i++) {
        var li = document.createElement("li"); 
        var valorArray = document.createTextNode(`${array[i]}`);
        li.appendChild(valorArray); 
        lista.appendChild(li); 
    }
});