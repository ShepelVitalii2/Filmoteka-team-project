import './sass/main.scss';

// import { startSpinner, stopSpinner } from './js/spinner';
// import {
//   fetchTopWeekMovie,
//   fetchMovieByKeyWord,
//   fetchMovieFullInfo,
// } from './js/apiService';

import './js/popularFilmsLoad';

import { onOpenModal } from './js/modal';
import './js/spinner';
import listFilmTempls from './templates/list-seach-film.hbs';
const debounce = require('lodash.debounce');

// fetchTopWeekMovie();
// fetchMovieByKeyWord();
// fetchMovieFullInfo(2);

// // Разобраться почему подтягиваются информация о фильме в шаблон???
// onOpenModal(fetchMovieFullInfo(3));
