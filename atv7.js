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
var teclado = require("prompt-sync")();
var N1 = 0;
var N2 = 0;
var pergunta = 0;
while (pergunta == 0) {
    N1 = parseFloat(teclado("Digite o primeiro n\u00FAmero: "));
    N2 = parseFloat(teclado("Digite o segundo n\u00FAmero: "));
    console.log("A soma entre os n\u00FAmeros \u00E9 ".concat(N1 + N2));
    pergunta = parseFloat(teclado("Quer continuar calculando? (digite 0 para sim e 1 para n\u00E3o): "));
    if (pergunta == 1) {
        pergunta++;
    }
}
