import { Filme, SerieTV } from '../types/tmdb.types';

export function exibirFilmes(filmes: Filme[]): void {
  if (filmes.length === 0) {
    console.log('Nenhum filme encontrado com este termo.');
    return;
  }

  console.log('\n--- Filmes Encontrados ---');
  filmes.forEach(filme => {
    console.log(`\n Título: ${filme.title}`);
    console.log(` Data de Lançamento: ${new Date(filme.release_date).toLocaleDateString('pt-BR')}`);
    console.log(` Nota Média: ${filme.vote_average.toFixed(1)}`);
  });
  console.log('--------------------------\n');
}

export function exibirDetalhesFilme(filme: Filme): void {
  console.log('\n--- Detalhes do Filme ---');
  console.log(` Título: ${filme.title}`);
  console.log(` Data de Lançamento: ${new Date(filme.release_date).toLocaleDateString('pt-BR')}`);
  console.log(` Nota Média: ${filme.vote_average.toFixed(1)}`);
  console.log(` Sinopse: ${filme.overview || 'Sinopse não disponível.'}`);
  console.log('-------------------------\n');
}

export function exibirSeries(series: SerieTV[]): void {
  if (series.length === 0) {
    console.log('Nenhuma série encontrada com este termo.');
    return;
  }

  console.log('\n--- Séries Encontradas ---');
  series.forEach(serie => {
    console.log(`\n Título: ${serie.name}`);
    console.log(` Data de Estreia: ${new Date(serie.first_air_date).toLocaleDateString('pt-BR')}`);
    console.log(` Nota Média: ${serie.vote_average.toFixed(1)}`);
  });
  console.log('--------------------------\n');
}

