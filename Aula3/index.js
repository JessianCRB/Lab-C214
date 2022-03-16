const Calculadora = require('./calculadora');

var somaCalculadora = Calculadora.soma(2, 1)
var subtCalculadora = Calculadora.subt(2, 1)
var multCalculadora = Calculadora.mult(2, 1)
var diviCalculadora = Calculadora.divi(2, 1)
var poteCalculadora = Calculadora.pote(2, 1)

console.log('Soma: ', somaCalculadora);
console.log('Subtração: ', subtCalculadora);
console.log('Multiplicação: ', multCalculadora);
console.log('Divisão: ', diviCalculadora);
console.log('Potenciação: ', poteCalculadora);
