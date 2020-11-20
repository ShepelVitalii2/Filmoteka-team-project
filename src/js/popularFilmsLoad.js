// import filmsTpl from '../templates/movies.hbs';
import ApiService from './apiService';
//import * as ApiService from './apiService';
// import loadingSpinner from './spinner';
import movieItemTpl from '../templates/movieItemTpl';



const refs = {

//   popfilmsContainer: document.querySelector('.container-item'),
  filmContainer: document.querySelector('.js-film-container'),

};

// function markupFilms(films) {
//   refs.popfilmsContainer.insertAdjacentHTML('beforeend', movieItemTpl(films));
// }

export default function markupFilms(films) {
  refs.filmContainer.insertAdjacentHTML('beforeend', movieItemTpl(films));
}

function showBestFilms(url) {
  // loadingSpinner();
  return filmsApiService
    .resultFetchFilms(url)
    .then(markupFilms)
    .then(loadingSpinner);
}

showBestFilms('trending/movie/day');

// refs.filmContainer.addEventListener('click', checkClick);

// function checkClick(evt) {
//   if (evt.target.tagName === 'IMG') {
//     startTest(evt.target.dataset.id);
//   }
// }
