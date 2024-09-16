/*

4. Iterando Sobre Arrays de Objetos
○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.

*/

const pessoas = [
    { nome: "Bruno", idade: 25, cidade: "Brasília" },
    { nome: "Daniel", idade: 28, cidade: "Goiânia" },
    { nome: "Clara", idade: 22, cidade: "Belém" },
    { nome: "Alice", idade: 30, cidade: "São Paulo" }
];

for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}
