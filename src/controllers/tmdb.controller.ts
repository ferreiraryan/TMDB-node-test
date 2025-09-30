import * as readline from 'readline';
import { buscarFilmes, buscarSeriesTV, buscarDetalhesFilme } from '../services/tmdb.service';
import { exibirFilmes, exibirSeries, exibirDetalhesFilme } from '../views/tmdb.view';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function perguntar(pergunta: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(pergunta, resolve);
  });
}


async function gerenciarBuscaFilmes() {
  try {
    const termo = await perguntar('Digite o nome do filme que deseja buscar: ');
    const resposta = await buscarFilmes(termo);

    const filmesComNotaAlta = resposta.results.filter(filme => filme.vote_average > 7.5);

    console.log("\nExibindo TODOS os filmes encontrados:");
    exibirFilmes(resposta.results);

    console.log("\n=============================================");
    console.log("Desafio Extra: Exibindo apenas filmes com nota maior que 7.5");
    exibirFilmes(filmesComNotaAlta);

    if (resposta.results.length > 0) {
      const primeiroFilmeId = resposta.results[0].id;
      console.log("\n=============================================");
      console.log(`Desafio Extra: Buscando detalhes de "${resposta.results[0].title}"...`);
      const detalhes = await buscarDetalhesFilme(primeiroFilmeId);
      exibirDetalhesFilme(detalhes);
    }

  } catch (error) {
    console.error('Ocorreu um erro na aplicação. Verifique sua chave de API e conexão.');
  }
}


async function gerenciarBuscaSeries() {
  try {
    const termo = await perguntar('Digite o nome da série que deseja buscar: ');
    const resposta = await buscarSeriesTV(termo);
    exibirSeries(resposta.results);
  } catch (error) {
    console.error('Ocorreu um erro na aplicação. Verifique sua chave de API e conexão.');
  }
}


export async function iniciar() {
  console.log('--- Catálogo de Filmes e Séries TMDB ---');
  const opcao = await perguntar('O que você deseja buscar? (1 para Filmes, 2 para Séries): ');

  if (opcao === '1') {
    await gerenciarBuscaFilmes();
  } else if (opcao === '2') {
    await gerenciarBuscaSeries();
  } else {
    console.log('Opção inválida.');
  }

  rl.close();
}

