function Pessoa(nome, email, data_nasc, telefone_fixo, telefone_celular) {
    this.nome = nome;
    this.email = email;
    this.data_nasc = data_nasc;
    this.telefone_fixo = telefone_fixo;
    this.telefone_celular = telefone_celular;
}

function Professor(nome, email, data_nasc, telefone_fixo, telefone_celular, area, lattes) {
    Pessoa.call(this, nome, email, data_nasc, telefone_fixo, telefone_celular);
    this.area = area;
    this.lattes = lattes;
}
Professor.prototype = Object.create(Pessoa.prototype);
Professor.prototype.constructor = Professor;

function Aluno(nome, email, data_nasc, telefone_fixo, telefone_celular, matricula) {
    Pessoa.call(this, nome, email, data_nasc, telefone_fixo, telefone_celular);
    this.matricula = matricula;
}
Aluno.prototype = Object.create(Pessoa.prototype);
Aluno.prototype.constructor = Aluno;

document.querySelectorAll("input[name='tipo']").forEach(input => {
input.addEventListener("change", function() {
    const extraFields = document.getElementById("extraFields");
    extraFields.innerHTML = "";

    if (this.value === "Professor") {
        extraFields.innerHTML = `
            <div class="mb-3">
                <label class="form-label">Área de Atuação:</label>
                <input type="text" class="form-control" id="area" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Lattes:</label>
                <input type="url" class="form-control" id="lattes" required>
            </div>
        `;
    } else if (this.value === "Aluno") {
        extraFields.innerHTML = `
            <div class="mb-3">
                <label class="form-label">Matrícula:</label>
                <input type="text" class="form-control" id="matricula" required>
            </div>
        `;
    }
});
});

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
event.preventDefault();
    
const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const data_nasc = document.getElementById("data_nasc").value;
const telefone_fixo = document.getElementById("telefone_fixo").value;
const telefone_celular = document.getElementById("telefone_celular").value;
const tipo = document.querySelector("input[name='tipo']:checked").value;

let pessoa;

if (tipo === "Professor") {
    const area = document.getElementById("area").value;
    const lattes = document.getElementById("lattes").value;
    pessoa = new Professor(nome, email, data_nasc, telefone_fixo, telefone_celular, area, lattes);
} else if (tipo === "Aluno") {
    const matricula = document.getElementById("matricula").value;
    pessoa = new Aluno(nome, email, data_nasc, telefone_fixo, telefone_celular, matricula);
}


document.getElementById("resultado").textContent = JSON.stringify(pessoa, null, 4); // exibe na tela
});