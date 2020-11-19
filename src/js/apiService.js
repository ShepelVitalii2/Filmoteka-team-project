const API_KEY = '3f80d4cf4eb52d6e9d2ef400ea3d2acb';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchMovie() {
    return fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${this.page}`,
    )
      .then(r => r.json())
      .then(({ results }) => {
        this.incrementPage();
        return results;
      });
  }

  incrementPage() {
    this.page += 1;
  }
  defaultPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }
}

// function fetchTopWeekMovie() {
//   return fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
//     .then(r => r.json())
//     .then(console.log);
// }

// function fetchMovieByKeyWord(keyWord) {
//   return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyWord}`)
//     .then(r => r.json())
//     .then(console.log);
// }

// function fetchMovieFullInfo(movieId) {
//   return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
//     .then(r => r.json())
//     .then(console.log);
// }

// export { fetchTopWeekMovie, fetchMovieByKeyWord, fetchMovieFullInfo };
