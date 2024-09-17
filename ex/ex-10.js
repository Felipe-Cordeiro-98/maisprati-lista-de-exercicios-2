/*

Combinação de Estruturas
10. Criando Relatórios com Objetos e Arrays
○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.

*/

const vendas = [
    { produto: "Camiseta", quantidade: 3, valor: 29.9 },
    { produto: "Tênis", quantidade: 1, valor: 199.99 },
    { produto: "Celular", quantidade: 2, valor: 1299.0 },
    { produto: "Livro", quantidade: 5, valor: 19.9 },
    { produto: "Fones de Ouvido", quantidade: 2, valor: 79.9 },
];

let valorTotalVendas = 0;

vendas.forEach((venda) => {
    const valorVenda = venda.quantidade * venda.valor;
    valorTotalVendas += valorVenda;
});

console.log(`Valor total das vendas: R$ ${valorTotalVendas.toFixed(2)}`);
