/*

13. Implementando um Carrinho de Compras
○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.

*/

const carrinho = {
    itens: [
        {
            nome: "Camiseta",
            quantidade: 2,
            precoUnitario: 29.99,
        },
        {
            nome: "Calça Jeans",
            quantidade: 1,
            precoUnitario: 79.99,
        },
        {
            nome: "Tênis",
            quantidade: 1,
            precoUnitario: 99.99,
        },
    ],
};

let valorTotal = 0;

carrinho.itens.forEach((item) => {
    const valorDaCompra = item.precoUnitario * item.quantidade;
    valorTotal += valorDaCompra;
});

console.log(`O valor total do carrinho: R$ ${valorTotal.toFixed(2)}`);
