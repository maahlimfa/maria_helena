const readline = require("readline");

// Criando interface para ler dados do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let carros = [];

rl.question("Quantos carros você deseja cadastrar? ", function(qtd) {
    qtd = parseInt(qtd);
    let contador = 0;

    function cadastrarCarro() {
        if (contador < qtd) {
            console.log(`\n=== Cadastro do Carro ${contador + 1} ===`);

            rl.question("Marca: ", function(marca) {
                rl.question("Modelo: ", function(modelo) {
                    rl.question("Ano: ", function(ano) {
                        rl.question("Cor: ", function(cor) {

                            let carro = {
                                marca: marca,
                                modelo: modelo,
                                ano: ano,
                                cor: cor
                            };

                            carros.push(carro);
                            contador++;
                            cadastrarCarro();
                        });
                    });
                });
            });

        } else {
            console.log("\n=== Lista de Carros Cadastrados ===");

            carros.forEach((carro, index) => {
                console.log(`\nCarro ${index + 1}:`);
                console.log("• Marca:", carro.marca);
                console.log("• Modelo:", carro.modelo);
                console.log("• Ano:", carro.ano);
                console.log("• Cor:", carro.cor);
            });

            rl.close();
        }
    }

    cadastrarCarro();
});