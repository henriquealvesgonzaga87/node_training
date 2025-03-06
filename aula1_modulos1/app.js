const path = require('path'); //padrão do node
const {Pessoa} = require('./mod1');

const p1 = new Pessoa('Henrique');
console.log(p1);

// const {nome, sobrenome, falaNome} = require('./mod1');
// console.log(falaNome())
// console.log(nome, sobrenome);

// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;

// console.log(falaNome());
