/*

6. Filtrando Arrays de Objetos
○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico

*/

const funcionarios = [
    { nome: "João", cargo: "Desenvolvedor", salario: 5500 },
    { nome: "Maria", cargo: "Analista de Marketing", salario: 4200 },
    { nome: "Pedro", cargo: "Gerente de Vendas", salario: 6800 },
    { nome: "Carla", cargo: "Designer UX", salario: 4800 },
    { nome: "Lucas", cargo: "Suporte Técnico", salario: 3200 },
];

const salario = 5000;

for (const funcionario of funcionarios) {
    if (funcionario.salario > salario)
        console.log(`Nome: ${funcionario.nome}, cargo: ${funcionario.cargo}, salário: ${funcionario.salario}`);
}
