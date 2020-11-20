const API_KEY = '3f80d4cf4eb52d6e9d2ef400ea3d2acb';
const BASE_URL = 'https://api.themoviedb.org/3/';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchFilms(url) {
    return fetch(
      `${BASE_URL}${url}?api_key=${API_KEY}&page=${this.page}&query=${this.searchQuery}`,
    )
      .then(response => response.json())
      .then(({ results }) => {
        this.incrementPage();
        return results;
      });
  }

  fetchGenres() {
    return fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        return data.genres;
      });
  }

  getGenres(url) {
    return this.fetchFilms(url).then(data => {
      return this.fetchGenres().then(arr =>
        data.map(el => ({
          ...el,
          genre_ids: el.genre_ids.flatMap(num =>
            arr.filter(el => el.id === num),
          ),
        })),
      );
    });
  }

  resultFetchFilms(url) {
    return this.getGenres(url).then(d => {
      return d.map(el => ({
        ...el,
        release_date: el.release_date.split('-')[0],
        vote_average: el.vote_average.toFixed(1),
      }));
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
    this.searchQuery = newQuery;
  }

  fetchFilmById(id) {
    return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`).then(response =>
      response.json(),
    );
  }

  fetchTopWeekMovie() {
    return fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    // .then(result => result.json())
    // .then(({ results }) => {
    //   //console.log(results);
    //   return results;
    // });
  }
}

//////////////////////////////////////////////////////////////////////////////

// fetchTopWeekMovie() {
//   return fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
//     .then(r => r.json())
//     .then(console.log);
// }

// fetchTopWeekMovie();
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
