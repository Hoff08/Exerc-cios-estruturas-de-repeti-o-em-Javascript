// 1: Menu interativo de um banco no console
let saldo = 1000;
let opcao;
do {
    opcao = prompt("Escolha uma opção:\n1 - Ver saldo\n2 - Sacar\n3 - Depositar\n4 - Sair");
    switch (opcao) {
        case "1":
            console.log(`Seu saldo é: R$${saldo}`);
            break;
        case "2":
            let saque = parseFloat(prompt("Digite o valor do saque:"));
            if (saque > saldo) {
                console.log("Saldo insuficiente.");
            } else {
                saldo -= saque;
                console.log(`Saque realizado. Novo saldo: R$${saldo}`);
            }
            break;
        case "3":
            let deposito = parseFloat(prompt("Digite o valor do depósito:"));
            saldo += deposito;
            console.log(`Depósito realizado. Novo saldo: R$${saldo}`);
            break;
        case "4":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== "4");

// 2: Tabuada de um número utilizando o laço for
let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

// 4: Somar as notas dos alunos utilizando forEach
const alunos = [
    { aluno: 'joao', nota: 10 },
    { aluno: 'maria', nota: 6 },
    { aluno: 'mateus', nota: 8 },
    { aluno: 'diego', nota: 7 },
];
let somaNotas = 0;
alunos.forEach(aluno => {
    somaNotas += aluno.nota;
});
console.log(`Soma das notas: ${somaNotas}`);

// 5: Contar a frequência de cada string em um array
const palavras = ["banana", "maçã", "laranja", "banana", "maçã", "banana"];
const contagem = {};

for (const palavra of palavras) {
    contagem[palavra] = (contagem[palavra] || 0) + 1;
}

for (const chave in contagem) {
    console.log(`${chave}: ${contagem[chave]}`);
}
