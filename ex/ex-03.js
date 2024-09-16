/*

Filtrando Propriedades de Objetos
○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.

*/

function filtrarPropriedadesPorValor(objeto, valor) {
    const propriedadeFiltrada = {};

    for (const propriedade in objeto) {
        if (typeof(objeto[propriedade] === Number) && objeto[propriedade] > valor) 
            propriedadeFiltrada[propriedade] = objeto[propriedade];
    }
    return propriedadeFiltrada;
}

const produto = {
    nome: "Notebook",
    preco: 1500,
    marca: "Positivo",
    estoque: 10,
};

const novoProduto = filtrarPropriedadesPorValor(produto, 9);

console.log(novoProduto);
