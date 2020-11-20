//Импорты
import modalCardTpl from '../templates/modal-card.hbs';

//DOM элементы
const filmContainerEl = document.querySelector('.film-container');
const backdrop = document.querySelector('.js-backdrop');
const modalEl = document.querySelector('.modal');
let btnAddWatch;
let btnAddQueue;

//Слушатели событий
filmContainerEl.addEventListener('click', onOpenModal);
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
function onAddWatch(e) {
  console.log('ADD WATCH');
}

//Картинка не идет, так как нету пути, в src в handlebars укажи путь картинки. Пример выше - list-search-film. Будут вопросы, пиши
//пример
// <img src="{{webformatURL}}" data-source={{адрес картинки которую нужно запостить, когда открыта модалка}} alt="{{tags}}" />
//вроде так


//Функция кнопки AddQueue
function onAddQueue(e) {
  console.log('ADD QUEUE');
}

// onOpenModal(fetchMovieFullInfo(2));

export { onOpenModal };

