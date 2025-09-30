import axios from 'axios';
import { Filme, SerieTV, RespostaBusca } from '../types/tmdb.types';

const API_KEY = process.env.TMDB_API_KEY;

if (!API_KEY) {
  throw new Error('A chave da API do TMDB (TMDB_API_KEY) não foi encontrada no arquivo .env');
}

const API_BASE_URL = 'https://api.themoviedb.org/3';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR'
  }
});

export async function buscarFilmes(query: string): Promise<RespostaBusca<Filme>> {
  try {
    const response = await apiClient.get('/search/movie', {
      params: {
        query: query
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    throw error;
  }
}

export async function buscarSeriesTV(query: string): Promise<RespostaBusca<SerieTV>> {
  try {
    const response = await apiClient.get('/search/tv', {
      params: {
        query: query
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar séries de TV:', error);
    throw error;
  }
}


export async function buscarDetalhesFilme(movieId: number): Promise<Filme> {
  try {
    const response = await apiClient.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar detalhes do filme com ID ${movieId}:`, error);
    throw error;
  }
}

