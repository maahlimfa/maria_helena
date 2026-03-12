// Importando o pacote prompt-sync
const prompt = require('prompt-sync')();

// Solicita ao usuário o nome de usuário
let nomeUsuario = prompt('Crie um nome de usuário: ');

// Solicita ao usuário a senha
let senhaUsuario = prompt('Crie uma senha: ');

// Solicita ao usuário confirmar o nome de usuário
let confirmacaoNome = prompt('Digite novamente o nome de usuário: ');

// Solicita ao usuário confirmar a senha
let confirmacaoSenha = prompt('Digite novamente a senha: ');

// Verifica se os dados inseridos para confirmação são os mesmos
if (nomeUsuario === confirmacaoNome && senhaUsuario === confirmacaoSenha) {
    console.log('Login bem-sucedido!');
} else {
    console.log('Login incorreto. Nome de usuário ou senha não coincidem.');
}