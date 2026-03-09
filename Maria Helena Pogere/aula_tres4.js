// Importando o pacote prompt-sync
const prompt = require('prompt-sync')();

// Criando um array vazio para armazenar as notas
let notas = [];

// Recebendo as 10 notas do usuário
for (let i = 1; i <= 10; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i}: `));
    // Verifica se a nota é válida (entre 0 e 10)
    while (nota < 0 || nota > 10 || isNaN(nota)) {
        console.log("Nota inválida! Digite uma nota entre 0 e 10.");
        nota = parseFloat(prompt(`Digite a nota ${i}: `));
    }
    notas.push(nota); // Adiciona a nota no array
}

// Calculando a média das notas
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let media = soma / notas.length;

// Exibindo a média
console.log(`A média das notas é: ${media.toFixed(2)}`);