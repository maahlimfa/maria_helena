// Importando a biblioteca prompt-sync para ler dados do usuário pelo terminal
const prompt = require("prompt-sync")();

// Função para validar número positivo
// Essa função pede um número até o usuário digitar um valor válido (> 0)
function pedirNumeroPositivo(mensagem) {
    let valor;

    // Loop infinito até receber um valor válido
    while (true) {
        // Converte o que o usuário digitou para número
        valor = Number(prompt(mensagem));

        // Verifica se é um número válido e maior que 0
        if (!isNaN(valor) && valor > 0) {
            return valor; // Retorna o valor se estiver correto
        }

        // Mensagem de erro caso o valor seja inválido
        console.log("Valor inválido! Digite um número maior que 0.");
    }
}

// Criando objeto jogador com saldo inicial
let jogador = {
    // Chama a função para garantir que o saldo seja válido
    saldo: pedirNumeroPositivo("Digite o saldo inicial: ")
};

// Mostra o saldo inicial
console.log(`\nSaldo inicial: R$${jogador.saldo}`);

// Arrow function (função moderna) que define o resultado da aposta
const resolverAposta = (risco) => {
    // Gera um número aleatório entre 0 e 1
    let chance = Math.random();

    // Operador ternário para definir chance de ganhar baseado no risco
    return risco === 1
        ? (chance < 0.7 ? "ganhou" : "perdeu") // 70% de chance
        : risco === 2
        ? (chance < 0.5 ? "ganhou" : "perdeu") // 50% de chance
        : (chance < 0.3 ? "ganhou" : "perdeu"); // 30% de chance
};

// Loop principal do jogo (enquanto tiver saldo)
while (jogador.saldo > 0) {

    console.log(`\nSaldo atual: R$${jogador.saldo}`);

    // Pede o valor da aposta
    let valor = pedirNumeroPositivo("Quanto deseja apostar? ");

    // Verifica se o jogador tem saldo suficiente
    if (valor > jogador.saldo) {
        console.log("Você não tem saldo suficiente!");
        continue; // Volta para o início do loop
    }

    // Menu de risco
    console.log("\nEscolha o nível de risco:");
    console.log("1 - Baixo (70% ganhar | x1.5)");
    console.log("2 - Médio (50% ganhar | x2)");
    console.log("3 - Alto (30% ganhar | x3)");

    let risco;

    // Loop para garantir escolha válida
    while (true) {
        risco = Number(prompt("Digite o nível: "));
        if ([1, 2, 3].includes(risco)) break; // Só aceita 1, 2 ou 3
        console.log("Escolha inválida! Digite 1, 2 ou 3.");
    }

    // Define o multiplicador baseado no risco
    let multiplicador = risco === 1 ? 1.5 : risco === 2 ? 2 : 3;

    // Valor da rodada começa com a aposta inicial
    let rodada = valor;

    // Controle do loop interno da rodada
    let jogando = true;

    // Loop da rodada (dobrar ou parar)
    while (jogando) {

        console.log(`\nRodada atual: R$${rodada}`);

        // Jogador decide continuar ou parar
        let escolha = prompt("Deseja (1) continuar ou (2) parar? ");

        if (escolha == "1") {

            // Chama função que decide se ganhou ou perdeu
            let resultado = resolverAposta(risco);

            console.log(`Resultado: você ${resultado}`);

            // Se ganhou, multiplica o valor; se perdeu, zera
            rodada = resultado === "ganhou"
                ? Math.floor(rodada * multiplicador)
                : 0;

            // Se perdeu tudo, encerra a rodada
            if (rodada === 0) {
                console.log("Você perdeu tudo nessa rodada.");
                jogando = false;
            }

        } else {
            // Jogador decidiu parar e garantir o valor atual
            console.log(`Você parou com R$${rodada}`);
            jogando = false;
        }
    }

    // Atualiza o saldo do jogador
    // Se ganhou: soma o lucro
    // Se perdeu: subtrai a aposta inicial
    jogador.saldo = rodada > 0
        ? jogador.saldo + rodada - valor
        : jogador.saldo - valor;

    // Pergunta se quer continuar jogando
    let continuar = prompt("\nDeseja continuar jogando? (s/n): ");
    if (continuar.toLowerCase() !== "s") break;
}

// Final do jogo
console.log("\n=== FIM DE JOGO ===");

// Mostra resultado final
console.log(
    jogador.saldo > 0
        ? `Você terminou com R$${jogador.saldo}`
        : "Você perdeu tudo."
);