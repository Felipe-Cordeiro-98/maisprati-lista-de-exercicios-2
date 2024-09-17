/*

12. Atualizando um Array de Objetos
○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

*/

const estoque = [
    {
        produto: "Camiseta",
        quantidade: 10,
        minimo: 10,
    },
    {
        produto: "Calça Jeans",
        quantidade: 30,
        minimo: 5,
    },
    {
        produto: "Tênis",
        quantidade: 20,
        minimo: 3,
    },
    {
        produto: "Meias",
        quantidade: 15,
        minimo: 20,
    },
    {
        produto: "Boné",
        quantidade: 7,
        minimo: 8,
    },
];

estoque.forEach((estoque) => {
    if (estoque.quantidade < estoque.minimo) estoque.quantidade *= 2;
});

console.log(estoque);
