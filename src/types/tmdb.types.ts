export interface Filme {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface SerieTV {
  id: number;
  name: string;
  overview: string;
  first_air_date: string;
  vote_average: number;
}

export interface RespostaBusca<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

