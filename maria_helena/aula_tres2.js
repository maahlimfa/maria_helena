// Importando o pacote prompt-sync
const prompt = require('prompt-sync')();

// Solicitando ao usuário que insira um número
let numero = parseInt(prompt('Digite um número: '));

// Exibindo os números pares de 0 até o número informado
for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}