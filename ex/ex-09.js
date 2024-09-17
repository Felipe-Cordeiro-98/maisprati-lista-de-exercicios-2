/*

9. Contabilizando Elementos com uma Condição
○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.

*/

const clientes = [
    { nome: 'Ana', idade: 28, cidade: 'São Paulo' },
    { nome: 'Carlos', idade: 35, cidade: 'Rio de Janeiro' },
    { nome: 'Mariana', idade: 22, cidade: 'Belo Horizonte' },
    { nome: 'Pedro', idade: 40, cidade: 'Porto Alegre' },
    { nome: 'Luciana', idade: 30, cidade: 'Curitiba' }
];

let contador = 0;

clientes.forEach((cliente) => {
    if (cliente.idade > 30) contador++;
});

console.log(contador);