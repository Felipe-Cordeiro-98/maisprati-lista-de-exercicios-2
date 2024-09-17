/*

8. Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.


*/

const filmes = [
    { titulo: 'Aventuras no Espaço', diretor: 'Ana Silva', anoLancamento: 2022 },
    { titulo: 'O Mistério do Relógio Perdido', diretor: 'Carlos Mendes', anoLancamento: 2019 },
    { titulo: 'Coração de Fogo', diretor: 'Mariana Santos', anoLancamento: 2021 },
    { titulo: 'A Última Jornada', diretor: 'Pedro Almeida', anoLancamento: 2020 },
    { titulo: 'O Enigma das Sombras', diretor: 'Laura Oliveira', anoLancamento: 2018 }
];

const tituloDosFilmes = [];

filmes.forEach((filme) => {
    tituloDosFilmes.push(filme.titulo);
});

console.log(tituloDosFilmes);