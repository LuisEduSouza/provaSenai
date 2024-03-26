/*
Nome 1: Enzo Cardoso Borin
Nome 2: Luís Eduardo Novaes Souza
Nome 3: Leticia Calixto Diniz
Nome 4: Pedro Henrique de Oliveira Alves

7- Faça um aplicativo que ao pedir dois números efetue a soma,
   e pergunte se ele quer continuar calculando, caso sim volte
   a perguntar os números a ser somados, caso não o aplicativo
   é finalizado.  (10 pontos) 
*/

console.clear();
const teclado = require (`prompt-sync`)();

let N1 : number = 0;
let N2 : number = 0;

let pergunta: number = 0;


while (pergunta == 0 ){
    N1 = parseFloat(teclado(`Digite o primeiro número: `));
    N2 = parseFloat(teclado(`Digite o segundo número: `));
    console.log(`A soma entre os números é ${N1+N2}`)
    pergunta = parseFloat(teclado(`Quer continuar calculando? (digite 0 para sim e 1 para não): `));
    if (pergunta == 1){
        pergunta++
    }
}
