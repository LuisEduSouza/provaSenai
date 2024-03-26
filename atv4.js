/*
Nome 1: Enzo Cardoso Borin
Nome 2: Luís Eduardo Novaes Souza
Nome 3: Leticia Calixto Diniz
Nome 4: Pedro Henrique de Oliveira Alves

4 - Escreva um programa que leia as medidas dos lados de um triângulo e
escreva se ele é Equilátero, isósceles ou Escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.

(10 pontos)
*/
console.clear();
var teclado = require("prompt-sync")();
var medida1 = parseFloat(teclado("Valor da medida 1: "));
var medida2 = parseFloat(teclado("Valor da medida 2: "));
var medida3 = parseFloat(teclado("Valor da medida 3: "));
if (medida1 == medida2 && medida1 == medida3) {
    console.log("Tri\u00E2ngulo Equil\u00E1tero");
}
else if (medida1 == medida2 && medida1 != medida3 || medida3 == medida2 && medida3 != medida1 || medida3 == medida1 && medida2) {
    console.log("Tri\u00E2ngulo Is\u00F3cele");
}
else if (medida1 != medida2 && medida2 != medida3 && medida3 != medida1) {
    console.log("Tri\u00E2ngulo Escaleno");
}
