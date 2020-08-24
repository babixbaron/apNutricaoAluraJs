
var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});

// a propriedade parentNode remove o elemento pai, que é a tr, e nao apenas o alvo

//pacientes.forEach(function(paciente) {
//    paciente.addEventListener("dblclick", function() {
//        this.remove(); // relacionado ao dono do evento, no caso o pacientes
//    });
//});

/* ao invés de colocar um evento para cada elemento colocamos apenas no elemento pai
o que permite deletar também os novos nomes adicionados */