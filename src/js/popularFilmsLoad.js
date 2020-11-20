// import {
//   fetchTopWeekMovie,
//   fetchMovieByKeyWord,
//   fetchMovieFullInfo,
// } from './apiService';
import ApiService from './apiService';
// import loadingSpinner from './spinner';
import movieItemTpl from '../templates/movieItemTpl';

const API_KEY = '3f80d4cf4eb52d6e9d2ef400ea3d2acb';
const BASE_URL = 'https://api.themoviedb.org/3';
const refs = {
  //Сюда поставить контейнер для фильмов
  // filmContainer: document.querySelector('js-film-container'),
  popfilmsContainer: document.querySelector('.container-item'),
};

// const filmsApiService = new ApiService();

document.addEventListener('DOMContentLoaded', fetchTopWeekMovie);

function fetchTopWeekMovie() {
  return fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then(resalt => resalt.json())
    .then(films => {
      console.log(films);
      markupFilms(films);
    });
}

function markupFilms(films) {
  //вместо решетки карточку фильмов
  refs.popfilmsContainer.insertAdjacentHTML('beforeend', movieItemTpl(films));
}

// function showBestFilms(url) {
//   loadingSpinner();
//   return filmsApiService(url).then(markupFilms).then(loadingSpinner);
// }

// showBestFilms('trending/movie/day');

// refs.filmContainer.addEventListener('click', checkClick);

// function checkClick(evt) {
//   if (evt.target.tagName === 'IMG') {
//     startPopup(evt.target.dataset.id);
//   }
// }

// filmsApiService.fetchMovie();
