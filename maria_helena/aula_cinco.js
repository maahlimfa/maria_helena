// Banco de Dados Simples (Conta Bancária)
class ContaBancaria {
    constructor(nome, saldoInicial = 0) {
        this.nome = nome;
        this.saldo = saldoInicial;
    }

    // Função para Depositar
    deposito(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Valor de depósito deve ser positivo.");
        }
    }

    // Função para Saque
    saque(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente ou valor inválido.");
        }
    }

    // Função para Verificar o Saldo
    verSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

// Função para criar uma nova conta
function criarConta(nome, saldoInicial = 0) {
    return new ContaBancaria(nome, saldoInicial);
}

// Exemplo de uso do sistema
const minhaConta = criarConta("João", 500); // Cria uma conta para João com R$500 de saldo inicial.

minhaConta.verSaldo();  // Verifica o saldo
minhaConta.deposito(200);  // Realiza um depósito de R$200
minhaConta.saque(100);  // Realiza um saque de R$100
minhaConta.verSaldo();  // Verifica o saldo após as transações