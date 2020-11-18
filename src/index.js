import './sass/main.scss';
import { startSpinner, stopSpinner } from './js/spinner';
import {
  fetchTopWeekMovie,
  fetchMovieByKeyWord,
  fetchMovieFullInfo,
} from './js/apiService';

import './js/modal';
import './js/spinner';

fetchTopWeekMovie();
fetchMovieByKeyWord();
fetchMovieFullInfo(2);

// startSpinner();
// stopSpinner();
