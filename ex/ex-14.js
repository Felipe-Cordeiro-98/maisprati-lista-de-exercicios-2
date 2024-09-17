/*

14. Manipulando Objetos Complexos
○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.

*/

const empresa = {
    departamentos: [
        {
            nome: "Recursos Humanos",
            funcionarios: ["Ana", "Carlos", "Mariana"],
        },
        {
            nome: "Vendas",
            funcionarios: ["Pedro", "Isabela", "Rafael"],
        },
        {
            nome: "TI",
            funcionarios: ["Lucas", "Camila", "Fernanda"],
        },
    ],
};

for (const indice in empresa.departamentos) {
    const departamento = empresa.departamentos[indice];

    for (const funcionario of departamento.funcionarios) {
        console.log(`Funcionário: ${funcionario}, departamento: ${departamento.nome}`);
    }
}
