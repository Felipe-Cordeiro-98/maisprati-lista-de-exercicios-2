/*

7. Modificando Objetos em um Array
○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.

*/

const produtos = [
    { nome: "Camiseta", preco: 39.9, desconto: 0 },
    { nome: "Tênis", preco: 199.99, desconto: 0 },
    { nome: "Celular", preco: 1299.0, desconto: 0 },
    { nome: "Livro", preco: 49.9, desconto: 0 },
    { nome: "Fones de Ouvido", preco: 79.9, desconto: 0 },
];

produtos.forEach((produto) => {
    produto.desconto = 0.1;
    
    let valorDoDesconto = produto.preco * produto.desconto;
    produto.preco = produto.preco - valorDoDesconto;

    console.log(`Nome: ${produto.nome}, preço: ${produto.preco.toFixed(2)}, desconto: ${produto.desconto.toFixed(2)}`);
});
