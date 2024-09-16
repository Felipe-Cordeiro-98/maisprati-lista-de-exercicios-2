/*

5. Calculando Valores em Arrays de Objetos
○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.

*/

const alunos = [
    { nome: "Ana", nota1: 8.5, nota2: 7.0 },
    { nome: "Carlos", nota1: 6.0, nota2: 6.5 },
    { nome: "Mariana", nota1: 9.0, nota2: 8.5 },
    { nome: "João", nota1: 7.0, nota2: 5.5 },
    { nome: "Brenda", nota1: 5.0, nota2: 6.5 },
];

for (const aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome do aluno: ${aluno.nome}, média das notas: ${media}`);
}
