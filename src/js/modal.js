//Импорты
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import modalCardTpl from '../templates/modal-card.hbs';
import ApiService from './apiService';

const filmsApiService = new ApiService();

const filmContainerEl = document.querySelector('.film-container');

filmContainerEl.addEventListener('click', onFilmCardClick);
console.log('MODAL');

function onFilmCardClick(e) {
  console.log('CLiCK');
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const filmCard = modalCardTpl();
  const instance = basicLightbox.create(filmCard);

  instance.show();
}
//Картинка не идет, так как нету пути, в src в handlebars укажи путь картинки. Пример выше - list-search-film. Будут вопросы, пиши
//пример
// <img src="{{webformatURL}}" data-source={{адрес картинки которую нужно запостить, когда открыта модалка}} alt="{{tags}}" />
//вроде так
