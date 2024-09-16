/*

Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto

*/

const livro = {
    titulo: "Os Segredos da Mente Milionária",
    autor: "T. Harv Eker",
    anoPublicacao: "15/02/2005",
    genero: "Livro de autoajuda",
};

let temEditora = false;

for (const key in livro) {
    if (key === "editora") temEditora = true;
}

if (temEditora === false) livro.editora = "Sextante";

for (const key in livro) {
    console.log(`${key}: ${livro[key]}`);
}
