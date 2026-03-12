const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Objeto vazio que vai armazenar os dados
let pessoa = {};

rl.question("Nome: ", function(nome) {
    pessoa.nome = nome;

    rl.question("Idade: ", function(idade) {
        pessoa.idade = idade;

        rl.question("Email: ", function(email) {
            pessoa.email = email;

            rl.question("Telefone: ", function(telefone) {
                pessoa.telefone = telefone;

                console.log("\n=== Dados Cadastrados ===");
                console.log("Nome:", pessoa.nome);
                console.log("Idade:", pessoa.idade);
                console.log("Email:", pessoa.email);
                console.log("Telefone:", pessoa.telefone);

                console.log("\nObjeto completo:");
                console.log(pessoa);

                rl.close();
            });
        });
    });
});