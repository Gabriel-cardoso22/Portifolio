document.getElementById("botao").addEventListener("click", 
    () => {
        let data = new Date();
        let mascara = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let dataMascarada = data.toLocaleDateString('pt-BR', mascara);
        return document.write(dataMascarada);
    }
);