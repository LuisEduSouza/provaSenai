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
const teclado = require (`prompt-sync`)();

let medida1: number = parseFloat(teclado(`Valor da medida 1: `));
let medida2: number = parseFloat(teclado(`Valor da medida 2: `));
let medida3: number = parseFloat(teclado(`Valor da medida 3: `));

if (medida1 == medida2 && medida1 == medida3 ){
    console.log(`Triângulo Equilátero`);
}
else if (medida1 == medida2 && medida1 != medida3 || medida3 == medida2 && medida3 != medida1 || medida3 == medida1 && medida2){
    console.log(`Triângulo Isócele`);
    }
else if (medida1 != medida2 && medida2 != medida3 && medida3 != medida1) {
        console.log(`Triângulo Escaleno`);
}