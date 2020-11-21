//Импорты
import modalCardTpl from '../templates/modal-card.hbs';

//DOM элементы
const filmContainerEl = document.querySelector('.js-film-container');
const backdrop = document.querySelector('.js-backdrop');
const modalEl = document.querySelector('.modal');
let btnAddWatch;
let btnAddQueue;
let currentFilm;
let currentFilmId;

//Слушатели событий
// filmContainerEl.addEventListener('click', onOpenModal);
backdrop.addEventListener('click', onBackdropClick);

//Функция открытия модалки
function onOpenModal(film) {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
  const filmCard = modalCardTpl(film);
  modalEl.insertAdjacentHTML('afterbegin', filmCard);

  btnAddWatch = document.querySelector('.watched');
  btnAddWatch.addEventListener('click', onAddWatch);

  btnAddQueue = document.querySelector('.queue');
  btnAddQueue.addEventListener('click', onAddQueue);
  currentFilm = film;
  currentFilmId = film.id;
}

//Функция закрытия модалки
function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  btnAddWatch.removeEventListener('click', onAddWatch);
  btnAddQueue.removeEventListener('click', onAddQueue);

  document.body.classList.remove('show-modal');
  modalEl.innerHTML = '';
}

//Функция закрытия по клику на бекдроп
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

//Функция закрытия по клику на ESC
function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}

//Функция кнопки AddWatch
function onAddWatch() {
  let arr = JSON.parse(localStorage.getItem('FilmToWatch')) || [];
  const allAvailable = arr.every(film => film.id !== currentFilmId);

  if (allAvailable) {
    arr.push(currentFilm);
    localStorage.setItem('FilmToWatch', JSON.stringify(arr));
  }
}

//Функция кнопки AddQueue
function onAddQueue() {
  let arr = JSON.parse(localStorage.getItem('FilmToQueue')) || [];
  const allAvailable = arr.every(film => film.id !== currentFilmId);

  if (allAvailable) {
    arr.push(currentFilm);
    localStorage.setItem('FilmToQueue', JSON.stringify(arr));
  }
}

export { onOpenModal, onAddWatch, onAddQueue };
// localStorage.clear();
