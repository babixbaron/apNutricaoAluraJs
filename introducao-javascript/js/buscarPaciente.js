
var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest() //objeto do JS responsável por fazer requisições HTTP

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //tipo de requisição a ser feita, no caso, GET

    xhr.addEventListener("load", function(){ //exibe a requisição no console

        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200) { //confere status positivo para a requisição e executa o códiogo
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); //vai receber a string e transformar em um objeto js 
            //transformou a string gigante em um array
            
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else { //estrutura que mostra um erro no console
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send(); //faz a requisição
});