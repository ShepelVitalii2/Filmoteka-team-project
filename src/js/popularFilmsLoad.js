// import {
//   fetchTopWeekMovie,
//   fetchMovieByKeyWord,
//   fetchMovieFullInfo,
// } from './apiService';
import ApiService from './apiService';

const refs = {
  //Сюда поставить контейнер для фильмов
  filmContainer: document.querySelector('filmContainerTest'),
};
const filmsApiService = new ApiService();

function markupFilms(films) {
  //вместо решетки карточку фильмов
  refs.filmContainer.insertAdjacentHTML('beforeend', filmContainerTest(films));
}

// filmsApiService.fetchMovie();
