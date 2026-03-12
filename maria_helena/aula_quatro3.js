const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Objeto do jogo
let jogo = {
    jogador1: {
        nome: "",
        cor: "",
        pontos: 0
    },
    jogador2: {
        nome: "",
        cor: "",
        pontos: 0
    }
};

// Cadastro dos jogadores
function cadastrarJogadores() {
    rl.question("Nome do Jogador 1: ", (nome1) => {
        jogo.jogador1.nome = nome1;

        rl.question("Cor do Time do Jogador 1: ", (cor1) => {
            jogo.jogador1.cor = cor1;

            rl.question("Nome do Jogador 2: ", (nome2) => {
                jogo.jogador2.nome = nome2;

                rl.question("Cor do Time do Jogador 2: ", (cor2) => {
                    jogo.jogador2.cor = cor2;

                    menu();
                });
            });
        });
    });
}

// Menu do jogo
function menu() {
    console.log("\n=== MENU DO JOGO ===");
    console.log("1 - Adicionar ponto para Jogador 1");
    console.log("2 - Adicionar ponto para Jogador 2");
    console.log("3 - Mostrar Placar");
    console.log("4 - Encerrar Jogo");

    rl.question("Escolha uma opção: ", (opcao) => {

        switch(opcao) {
            case "1":
                jogo.jogador1.pontos++;
                console.log(`Ponto para ${jogo.jogador1.nome}!`);
                break;

            case "2":
                jogo.jogador2.pontos++;
                console.log(`Ponto para ${jogo.jogador2.nome}!`);
                break;

            case "3":
                mostrarPlacar();
                break;

            case "4":
                console.log("\n=== JOGO ENCERRADO ===");
                mostrarPlacar();
                rl.close();
                return;

            default:
                console.log("Opção inválida!");
        }

        menu();
    });
}

function mostrarPlacar() {
    console.log("\n=== PLACAR ===");
    console.log(`${jogo.jogador1.nome} (${jogo.jogador1.cor}) - ${jogo.jogador1.pontos} pontos`);
    console.log(`${jogo.jogador2.nome} (${jogo.jogador2.cor}) - ${jogo.jogador2.pontos} pontos`);
}

// Iniciar sistema
cadastrarJogadores();