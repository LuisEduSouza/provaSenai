/*
Nome 1: Enzo Cardoso Borin
Nome 2: Luís Eduardo Novaes Souza
Nome 3: Leticia Calixto Diniz
Nome 4: Pedro Henrique de Oliveira Alves

1- Faça um programa que peça um número inteiro e 
determine se ele é par ou ímpar. (10 pontos)
*/
console.clear();
const teclado = require (`prompt-sync`)();

let x : number = parseInt(teclado(`Digite um número inteiro: `));
let resto = x % 2

if (resto == 0){
    console.log(`Número par!`)
}
else if (resto == 1){
    console.log(`Número ímpar!!`)
}