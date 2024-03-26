/*
Nome 1: Enzo Cardoso Borin
Nome 2: Luís Eduardo Novaes Souza
Nome 3: Leticia Calixto Diniz
Nome 4: Pedro Henrique de Oliveira Alves

2 - Escreva um programa que receba três números inteiros 
e mostre eles em ordem DECRESCENTE. (10 pontos)
*/

console.clear();
const teclado = require (`prompt-sync`)();

let numero1: number = parseFloat(teclado(`Digite o primeiro número: `));
let numero2: number = parseFloat(teclado(`Digite o segundo número: `));
let numero3: number = parseFloat(teclado(`Digite o terceiro número: `));

if (numero1 >= numero2 && numero1 >= numero3) {
    if (numero2 >= numero3) {
        console.log(`Numeros em ordem decrescente: ${numero1};${numero2};${numero3}`);
    }
    else{
        console.log(`Numeros em ordem decrescente: ${numero1};${numero3};${numero2}`);
    } 
} else if (numero2 >= numero1 && numero2 >= numero3) {
    if (numero1 >= numero3) {
        console.log(`Numeros em ordem decrescente: ${numero2};${numero1};${numero3}`);
    } else {
        console.log(`Numeros em ordem decrescente: ${numero2};${numero3};${numero1}`);
}
} else {
    if (numero1 >= numero2) {
        console.log(`Numeros em ordem decrescente: ${numero3};${numero1};${numero2}`);
    }else{
        console.log(`Numeros em ordem decrescente: ${numero3};${numero2};${numero1}`);
}
}