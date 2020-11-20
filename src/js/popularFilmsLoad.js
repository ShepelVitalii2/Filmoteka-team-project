import topWeekMovie from '../templates/movieItemTpl.hbs';
import ApiService from './apiService';
//import * as ApiService from './apiService';
// import loadingSpinner from './spinner';
import movieItemTpl from '../templates/movieItemTpl';

const refs = {
  filmContainer: document.querySelector('.js-film-container'),
};

const filmsApiService = new ApiService();

export default function markupFilms(films) {
  refs.filmContainer.insertAdjacentHTML('beforeend', topWeekMovie(films));
}

function showBestFilms(url) {
  // loadingSpinner();
  return filmsApiService.resultFetchFilms(url).then(markupFilms);
}

showBestFilms('trending/movie/day');

// refs.filmContainer.addEventListener('click', checkClick);

// function checkClick(evt) {
//   if (evt.target.tagName === 'IMG') {
//     startTest(evt.target.dataset.id);
//   }
// }
