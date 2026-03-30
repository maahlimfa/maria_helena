// Importando prompt-sync
const prompt = require("prompt-sync")();

// Função para validar número positivo
function pedirNumeroPositivo(mensagem) {
let valor;

while (true) {
valor = Number(prompt(mensagem));

if (!isNaN(valor) && valor > 0) {
return valor;
}

console.log("Valor inválido! Digite um número maior que 0.");
}
}

// Objeto jogador
let jogador = {
saldo: pedirNumeroPositivo("Digite o saldo inicial: ")
};

console.log(`\nSaldo inicial: R$${jogador.saldo}`);

// Arrow function que define resultado baseado no risco
const resolverAposta = (risco) => {
let chance = Math.random();

return risco === 1
? (chance < 0.7 ? "ganhou" : "perdeu")
: risco === 2
? (chance < 0.5 ? "ganhou" : "perdeu")
: (chance < 0.3 ? "ganhou" : "perdeu");
};

// Loop principal
while (jogador.saldo > 0) {

console.log(`\nSaldo atual: R$${jogador.saldo}`);

let valor = pedirNumeroPositivo("Quanto deseja apostar? ");

if (valor > jogador.saldo) {
console.log("Você não tem saldo suficiente!");
continue;
}

console.log("\nEscolha o nível de risco:");
console.log("1 - Baixo (70% ganhar | x1.5)");
console.log("2 - Médio (50% ganhar | x2)");
console.log("3 - Alto (30% ganhar | x3)");

let risco;
while (true) {
risco = Number(prompt("Digite o nível: "));
if ([1, 2, 3].includes(risco)) break;
console.log("Escolha inválida! Digite 1, 2 ou 3.");
}

let multiplicador = risco === 1 ? 1.5 : risco === 2 ? 2 : 3;

let rodada = valor;
let jogando = true;

while (jogando) {

console.log(`\nRodada atual: R$${rodada}`);

let escolha = prompt("Deseja (1) continuar ou (2) parar? ");

if (escolha == "1") {

let resultado = resolverAposta(risco);

console.log(`Resultado: você ${resultado}`);

rodada = resultado === "ganhou"
? Math.floor(rodada * multiplicador)
: 0;

if (rodada === 0) {
console.log("Você perdeu tudo nessa rodada.");
jogando = false;
}

} else {
console.log(`Você parou com R$${rodada}`);
jogando = false;
}
}

jogador.saldo = rodada > 0
? jogador.saldo + rodada - valor
: jogador.saldo - valor;

let continuar = prompt("\nDeseja continuar jogando? (s/n): ");
if (continuar.toLowerCase() !== "s") break;
}

// Final
console.log("\n=== FIM DE JOGO ===");
console.log(
jogador.saldo > 0
? `Você terminou com R$${jogador.saldo}`
: "Você perdeu tudo."
);