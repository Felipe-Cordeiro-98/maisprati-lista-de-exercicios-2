/*

11. Agrupando Elementos com forEach
○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.


*/

const pedidos = [
    { cliente: "Ana", produto: "Camiseta", quantidade: 2 },
    { cliente: "Ana", produto: "Tênis", quantidade: 1 },
    { cliente: "Mariana", produto: "Celular", quantidade: 3 },
    { cliente: "Pedro", produto: "Livro", quantidade: 5 },
    { cliente: "Luciana", produto: "Fones de Ouvido", quantidade: 2 },
    { cliente: "Mariana", produto: "Carteira", quantidade: 1 }
];

const quantidadePorCliente = {};

pedidos.forEach((pedido) => {
    const { cliente, quantidade } = pedido;

    if (!quantidadePorCliente[cliente]) {
        quantidadePorCliente[cliente] = 0;
    }
    quantidadePorCliente[cliente] += quantidade;
});

console.log(quantidadePorCliente);
