
var titulo = document.querySelector(".titulo");
titulo.textContent = "AP Nutrição";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");


    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!"
        paciente.classList.add("paciente-invalido"); // adicionamos uma classe no css para somente esta ocasião
    }

    if (!alturaValida) {
        console.log("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido == true && alturaValida == true) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}


function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2); // a propriedade toFixed permite escolher o número de casas decimais a serem mostradas na tela
}


function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
