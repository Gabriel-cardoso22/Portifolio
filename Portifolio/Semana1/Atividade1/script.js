document.getElementById("botao").addEventListener("click",
    ()=> {
        let numero = parseInt(document.getElementById('numero').value);
        if(!isNaN(numero) && numero >= 0)
        {
            if(numero % 2 == 0)
            {
                alert(`O número: ${numero} é par`);
            }
            else
            {
                alert(`O número: ${numero} é impar`);
            }
        }
        else
        {
            alert("O conteúdo digitado não é um número ou não é positivo")
        }
    }
)