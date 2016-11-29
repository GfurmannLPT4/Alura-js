var tdPeso = document.getElementById("peso-1");
var tdAltura = document.getElementById("altura-1");

var tdPeso2 = document.getElementById("peso-2");
var tdAltura2 = document.getElementById("altura-2");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var peso2 = tdPeso2.textContent;
var altura2 = tdAltura2.textContent;
 
var paciente = {
	"peso" : peso,
	"altura" : altura 
};

var paciente2 = {
	"peso" : peso2,
	"altura" : altura2
};

var pacientes = [paciente, paciente2];
var posicaoAtual = 0;

while(posicaoAtual <= pacientes.length - 1) {

	var paciente = pacientes[posicaoAtual];

	if(paciente.altura != 0) {
		var imc = paciente.peso / (paciente.altura * paciente.altura);

		var tdImc = document.getElementById("imc-1");
		tdImc.textContent = imc;

		console.log(imc);
	} 
	else {
		console.log("Nao executei pois a altura eh igual a zero");
	}
	posicaoAtual++;
}
