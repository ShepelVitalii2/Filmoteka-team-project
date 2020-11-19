// import {
//   fetchTopWeekMovie,
//   fetchMovieByKeyWord,
//   fetchMovieFullInfo,
// } from './apiService';
import ApiService from './apiService';
import loadingSpinner from './spinner';

const refs = {
  //Сюда поставить контейнер для фильмов
  filmContainer: document.querySelector('js-film-container'),
};
const filmsApiService = new ApiService();

function markupFilms(films) {
  //вместо решетки карточку фильмов
  refs.filmContainer.insertAdjacentHTML('beforeend', filmContainerTest(films));
}

function showBestFilms(url) {
  loadingSpinner();
  return filmsApiService(url).then(markupFilms).then(loadingSpinner);
}

showBestFilms('trending/movie/day');

// refs.filmContainer.addEventListener('click', checkClick);

// function checkClick(evt) {
//   if (evt.target.tagName === 'IMG') {
//     startPopup(evt.target.dataset.id);
//   }
// }

// filmsApiService.fetchMovie();
