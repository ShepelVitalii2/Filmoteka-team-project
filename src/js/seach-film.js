
import filmListTempl from '../templates/list-seach-film.hbs';
const debounce = require('lodash.debounce');

const refs = {
  inputSeachElem: document.querySelector('.input-search'),
    listBoxElem: document.querySelector('.container-item'),
    errorMessElem: document.querySelector('.error-message'),
};
const API_KEY = '3f80d4cf4eb52d6e9d2ef400ea3d2acb';
const BASE_URL = 'https://api.themoviedb.org/3';

refs.inputSeachElem.addEventListener('submit', onSeach);
refs.inputSeachElem.addEventListener('input', debounce(onSeach, 500));

function onSeach() {
  const keyWord = refs.inputSeachElem.value;
    fetchMovieByKeyWord(keyWord).then(obj => {
      if (obj.results.length===0) {
          refs.errorMessElem.textContent = 'Any movie with such name has not found';
          return;
        }
          refs.listBoxElem.innerHTML = '';
    obj.results.forEach(element => {
      element.genre_ids.forEach((elem, idx, arr) => {
        changeGenres(elem, idx, arr);
      })
    });
    refs.listBoxElem.insertAdjacentHTML('beforeend', filmListTempl(obj.results));
  })
}
function fetchMovieByKeyWord(keyWord) {
  return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyWord}`)
    .then(r => r.json());
}

function changeGenres (elem,idx,arr) {
          switch (elem) {
          case 28: arr[idx] = 'Action'; break;
          case 12: arr[idx] = 'Adventure'; break;
          case 16: arr[idx] = 'Animation'; break;
          case 35: arr[idx] = 'Comedy'; break;
          case 80: arr[idx] = 'Crime'; break;
          case 99: arr[idx] = 'Documentary'; break;
          case 18: arr[idx] = 'Drama'; break;
          case 10751: arr[idx] = 'Family'; break;
          case 14: arr[idx] = 'Fantasy'; break;
          case 36: arr[idx] = 'History'; break;
          case 27: arr[idx] = 'Horror'; break;
          case 10402: arr[idx] = 'Music'; break;
          case 9648: arr[idx] = 'Mystery'; break;
          case 10749: arr[idx] = 'Romance'; break;
          case 878: arr[idx] = 'Science Fiction'; break;
          case 10770: arr[idx] = 'TV Movie'; break;
          case 53: arr[idx] = 'Thriller'; break;
          case 10752: arr[idx] = 'War'; break;
          case 37: arr[idx] = 'Western'; break;
      }
     return arr[idx];
    }