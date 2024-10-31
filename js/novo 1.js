/*alert("Olá, Mundo!");
alert("interagindo com o console!");
var curso = "WD-43";
alert(curso);
var texto = "Uma String deve ser envolvida em aspas simples ou duplas.";
var numero = 2012;
var verdade = true;
alert(texto);
alert(numero);
alert(verdade);
var pessoas = ["João", "José", "Maria", "Sebastião", "Antônio"];
for (var i = 0; i < pessoas.length; i++) {
alert(pessoas[0]);
alert(pessoas[1]);
alert(pessoas[4]);
}*/



/* Numeros impares de 1 até 10 
for (i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    alert(i);
  }
}

// Soma de 1 até 100 
let soma = 0;

for (i = 1; i <= 100; i++) {
  soma += i;
}

alert(soma);

// Mostra apenas os nomes das pessoas que têm 4 letras 
var pessoas = ["João", "José", "Maria", "Sebastião", "Antônio"];

for (i = 0; i < pessoas.length; i++) {
  if (pessoas[i].length === 4) {
    alert(pessoas[i]);
  }
} */

// Utilizando Funções 
function mostraAlerta() {
	alert("Funciona!");
}
// Chamando a função:
mostraAlerta();

// Função com argumento
function mostraAlerta(texto) {
	// Dentro da fuinção "texto" conterá o varlor passado na execução
	alert(texto);
}

mostraAlerta("Funciona com argumento");

