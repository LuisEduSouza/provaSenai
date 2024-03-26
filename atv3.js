/*
Nome 1: Enzo Cardoso Borin
Nome 2: Luís Eduardo Novaes Souza
Nome 3: Leticia Calixto Diniz
Nome 4: Pedro Henrique de Oliveira Alves

3- Faça um programa que pergunte em que turno você estuda.
Peça para digitar M-matutino ou V-Vespertino ou N-Noturno.
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou
"Boa Noite!" ou "Valor Inválido!", conforme o caso. (10 pontos)
*/
console.clear();
var teclado = require("prompt-sync")();
var pergunta = (teclado("Em que turno voc\u00EA estuda? (digite M para matutino; V para Vespertino; N para Noturno): "));
if (pergunta == "M") {
    console.log("Bom Dia");
}
if (pergunta == "V") {
    console.log("Boa Tarde");
}
if (pergunta == "N") {
    console.log("Boa Noite");
}
