import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import markupPopularMovies from './';

const API_KEY = '3f80d4cf4eb52d6e9d2ef400ea3d2acb';
const BASE_URL = 'https://api.themoviedb.org/3';

const refs = {
  filmContainer: document.querySelector('js-film-container'),
};

let pageMarkup = '';
let currentPage = 0;
const paginationEl = document.querySelector('#pagination');

// const pagination = new Pagination('pagination');

// const container = document.getElementById('pagination');
// const pagination = new Pagination(container);

paginationEl.addEventListener('click', onBtnClick);

fetchPage(currentPage + 1)
  .then(r => r.json())
  .then(({ total_pages }) => {
    paginationMarkup(total_pages);
  });

//Активация перехода по кнопке.
function onBtnClick(event) {
  const paginationBtnList = document.querySelectorAll('button.btn-number');
  const lastPage = Number(paginationBtnList[paginationBtnList - 1].textContent);

  //Если цифра присутствует, прыгаем на нее
  if (Number(event.target.textContent)) {
    onNumberBtnClick(event);
  }
  //если стрелка влево, возвращаем страницу -1
  else if (event.target.textContent === '→' && currentPage < lastPage - 1) {
    onRightBtnClick();
  }
  //если стрелка вправо, возвращаем страницу +1
  else if (event.target.textContent === '←' && currentPage > 0) {
    onLeftBtnClick();
  } else {
    return;
  }

  clearMarkup();
  clearFilmContainer();

  fetching(currentPage + 1)
    .then(r => r.json())
    .then(({ total_pages, results }) => {
      renderPagMarkup(total_pages);
      markupPopularMovies(results);
    })
    .then(
      setTimeout(() => {
        setActiveBtn(event);
      }, 500),
    );
}

//очищаем разметку и контейнер

//запрос на страницу
function fetchPage(page) {
  return fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`,
  );
}

//делаем разметку
function paginationMarkup(length) {
  renderMarkup(length);
  paginationEl.insertAdjacentElement('beforeend', pageMarkup);
}

//опции библиотеки туи, пока опционально
const options = {
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 10,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

//рендеринг разметки
function renderMarkup(length) {
  //если разметка меньше 5
  if (currentPage + 1 < 5) {
    pageMarkup =
      '<li class="pagination-item"><button class="#">&#8592</button></li>';

    for (let i = 1; i <= 5; i += 1) {
      const pageItem = `<li class="pagination-item"><button class="btn-number">${i}</button></li>`;
      pageMarkup += pageItem;
    }
    pageMarkup += `<li class="pagination-item"><button class="#">...</button></li>
  <li class="pagination-item"><button class="btn-number">${length}</button></li>
  <li class="pagination-item"><button class="#">&#8594</button></li>`;
  }
  //если разметка больше 5 и до последнего элемента остается 3 стр
  else if (currentPage + 1 >= 5 && currentPage + 1 < length - 3) {
    pageMarkup = `<li class="pagination-item"><button class="btn-number">1</button></li>
    <li class='pagination-item'><button class="#">...</button></li>
    <li class='pagination-item'><button class="btn-number">${
      currentPage - 1
    }</button></li>
    <li class='pagination-item'><button class="btn-number">${currentPage}</button></li>
    <li class='pagination-item'><button class="btn-number">${
      currentPage + 1
    }</button></li>
    <li class='pagination-item'><button class="btn-number">${
      currentPage + 2
    }</button></li>
    <li class='pagination-item'><button class="btn-number">${
      currentPage + 3
    }</button></li>
    <li class='pagination-item'><button class="#">...</button></li>
    <li class="pagination-item"><button class="btn-number">${length}</button></li>
    <li class="pagination-item"><button class="#">&#8594</button></li>`;
  }
  // когда не жмут границы сторон
  else {
    pageMarkup = `<li class="pagination-item"><button class="#">&#8592</button></li>
  <li class='pagination-item'><button class="btn-number">1</button></li>
      <li class='pagination-item'><button class="#">...</button></li>
      <li class='pagination-item'><button class="btn-number">${
        length - 4
      }</button></li>
      <li class='pagination-item'><button class="btn-number">${
        length - 3
      }</button></li>
      <li class='pagination-item'><button class="btn-number">${
        length - 2
      }</button></li>
      <li class='pagination-item'><button class="btn-number">${
        length - 1
      }</button></li>
      <li class='pagination-item'><button class="btn-number">${length}</button></li>
      <li class="pagination-item"><button class="#">&#8594</button></li>`;
  }
}

function clearMarkup() {
  paginationEl.innerHTML = '';
}

function onRightBtnClick() {
  currentPage += 1;
}

function onLeftBtnClick() {
  currentPage -= 1;
}

function clearFilmContainer() {
  refs.filmContainer.innerHTML = '';
}

// const pagination = new Pagination('pagination', options);
