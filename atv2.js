/*
Nome 1: Enzo Cardoso Borin
Nome 2: Luís Eduardo Novaes Souza
Nome 3: Leticia Calixto Diniz
Nome 4: Pedro Henrique de Oliveira Alves

2 - Escreva um programa que receba três números inteiros
e mostre eles em ordem DECRESCENTE. (10 pontos)
*/
console.clear();
var teclado = require("prompt-sync")();
var numero1 = parseFloat(teclado("Digite o primeiro n\u00FAmero: "));
var numero2 = parseFloat(teclado("Digite o segundo n\u00FAmero: "));
var numero3 = parseFloat(teclado("Digite o terceiro n\u00FAmero: "));
if (numero1 >= numero2 && numero1 >= numero3) {
    if (numero2 >= numero3) {
        console.log("Numeros em ordem decrescente: ".concat(numero1, ";").concat(numero2, ";").concat(numero3));
    }
    else {
        console.log("Numeros em ordem decrescente: ".concat(numero1, ";").concat(numero3, ";").concat(numero2));
    }
}
else if (numero2 >= numero1 && numero2 >= numero3) {
    if (numero1 >= numero3) {
        console.log("Numeros em ordem decrescente: ".concat(numero2, ";").concat(numero1, ";").concat(numero3));
    }
    else {
        console.log("Numeros em ordem decrescente: ".concat(numero2, ";").concat(numero3, ";").concat(numero1));
    }
}
else {
    if (numero1 >= numero2) {
        console.log("Numeros em ordem decrescente: ".concat(numero3, ";").concat(numero1, ";").concat(numero2));
    }
    else {
        console.log("Numeros em ordem decrescente: ".concat(numero3, ";").concat(numero2, ";").concat(numero1));
    }
}
