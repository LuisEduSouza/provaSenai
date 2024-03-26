/*
Nome 1: Enzo Cardoso Borin
Nome 2: Luís Eduardo Novaes Souza
Nome 3: Leticia Calixto Diniz
Nome 4: Pedro Henrique de Oliveira Alves

1- Faça um programa que peça um número inteiro e
determine se ele é par ou ímpar. (10 pontos)
*/
console.clear();
var teclado = require("prompt-sync")();
var x = parseInt(teclado("Digite um n\u00FAmero inteiro: "));
var resto = x % 2;
if (resto == 0) {
    console.log("N\u00FAmero par!");
}
else if (resto == 1) {
    console.log("N\u00FAmero \u00EDmpar!!");
}
