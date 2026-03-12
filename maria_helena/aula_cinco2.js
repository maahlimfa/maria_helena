const readlineSync = require('readline-sync');

// Funções de operações matemáticas
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        console.log("Erro: Divisão por zero não é permitida!");
        return null;
    }
    return a / b;
}

// Função para exibir o menu de opções
function mostrarMenu() {
    let opcao = parseInt(readlineSync.question(
        "Calculadora - Escolha a operação desejada:\n" +
        "1. Soma\n" +
        "2. Subtração\n" +
        "3. Multiplicação\n" +
        "4. Divisão\n" +
        "5. Sair\n"
    ));

    return opcao;
}

// Função principal que executa o programa
function calcular() {
    let continuar = true;

    while (continuar) {
        let opcao = mostrarMenu();

        if (opcao === 5) {
            console.log("Saindo da calculadora. Até logo!");
            continuar = false;
        } else if (opcao >= 1 && opcao <= 4) {
            let num1 = parseFloat(readlineSync.question("Digite o primeiro número: "));
            let num2 = parseFloat(readlineSync.question("Digite o segundo número: "));

            let resultado;
            switch (opcao) {
                case 1:
                    resultado = soma(num1, num2);
                    console.log(`Resultado: ${num1} + ${num2} = ${resultado}`);
                    break;
                case 2:
                    resultado = subtracao(num1, num2);
                    console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
                    break;
                case 3:
                    resultado = multiplicacao(num1, num2);
                    console.log(`Resultado: ${num1} * ${num2} = ${resultado}`);
                    break;
                case 4:
                    resultado = divisao(num1, num2);
                    if (resultado !== null) {
                        console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
                    }
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } else {
            console.log("Opção inválida. Por favor, escolha uma opção entre 1 e 5.");
        }
    }
}

// Inicia a calculadora
calcular();