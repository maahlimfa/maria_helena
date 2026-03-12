const input = require('prompt-sync')();

console.log("Cálculo de média para 3 alunos\n");

for (let aluno = 1; aluno <= 3; aluno++) {
    console.log(`\n--- Aluno ${aluno} ---`);

    let nota1 = parseFloat(input("Digite a primeira nota: "));
    let nota2 = parseFloat(input("Digite a segunda nota: "));
    let nota3 = parseFloat(input("Digite a terceira nota: "));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        console.log("Erro: Alguma nota inválida. Usando 0 para esse aluno.");
        nota1 = nota2 = nota3 = 0;
    }

    let media = (nota1 + nota2 + nota3) / 3;

    console.log(`Média: ${media.toFixed(2)}`);

   // (media < 4) ? console.log('REPROVADO') : (media = 5) console.log('RECUPERAÇÃO') : (media > 6) console.log('APROVADO')

    if (media >= 7) {
     console.log("Situação: Aprovado!");
    } else if (media >= 5) {
       console.log("Situação: Em recuperação.");
    } else {
      console.log("Situação: Reprovado.")
   }
}

console.log("\nFim do processamento dos 3 alunos.")
