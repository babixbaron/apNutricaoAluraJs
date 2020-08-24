
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(); // impede que a página recarregue e registre o clique no botão;

    var form = document.querySelector("#form-adiciona");
    
    var paciente = extrairPacientedoForm(form);
 
    var erros = validaPaciente(paciente);

    if(erros.length > 0) {
        exibeMensagensDeErro(erros); 
        return;
    }

    //adicionando paciente na tabela 

    adicionaPacienteNaTabela(paciente);
    
    form.reset(); // limpa o formulário para colocar mais pacientes
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); // coloca o paciente Tr dentro do body
}


function extrairPacientedoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montarTr(paciente) {
    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome")); // coloca o td dentro do tr
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-alturaTd"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gorduraTd"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montarTd(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; // apaga as mensagens de erro conforme o botão é clicado

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}