/*
Nome 1: Enzo Cardoso Borin
Nome 2: Luís Eduardo Novaes Souza
Nome 3: Leticia Calixto Diniz
Nome 4: Pedro Henrique de Oliveira Alves

6- Um posto está vendendo combustíveis com a seguinte tabela de descontos:
    Álcool: até 20 litros, desconto de 3% por litro
    acima de 20 litros, desconto de 5% por litro
    Gasolina:
    até 20 litros, desconto de 4% por litro
    acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos,
o tipo de combustível (codificado da seguinte forma: E-etanol, G-gasolina),
calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 5,58 o preço do litro do
etanol é R$ 3,42.

(25 pontos)
*/
console.clear();
var teclado = require("prompt-sync")();
var combustível = (teclado("Qual o combust\u00EDvel? (Digite E para etanol; G para gasolina): "));
var gasolina = 0;
var etanol = 0;
var litros = parseFloat(teclado("Quantos litros?"));
var precoTotal = 0;
var desconto = 0;
if (combustível == "G") {
    gasolina = 5.58;
    if (litros >= 20) {
        desconto = (gasolina * litros) * 0.06;
        precoTotal = gasolina * litros - desconto;
        console.log("Valor a ser pago ser\u00E1: ".concat(precoTotal));
    }
    else {
        desconto = (gasolina * litros) * 0.04;
        precoTotal = gasolina * litros - desconto;
        console.log("Valor a ser pago ser\u00E1: ".concat(precoTotal));
    }
}
else if (combustível = "E") {
    etanol = 3.42;
    if (litros >= 20) {
        desconto = (etanol * litros) * 0.05;
        precoTotal = etanol * litros - desconto;
        console.log("Valor a ser pago ser\u00E1: ".concat(precoTotal));
    }
}
else {
    desconto = (etanol * litros) * 0.03;
    precoTotal = etanol * litros - desconto;
    console.log("Valor a ser pago ser\u00E1: ".concat(precoTotal));
}
