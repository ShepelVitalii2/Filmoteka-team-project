import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const API_KEY = '3f80d4cf4eb52d6e9d2ef400ea3d2acb';
const BASE_URL = 'https://api.themoviedb.org/3';

let pageMarkup = '';

const paginationEl = document.querySelector('#pagination');

// const pagination = new Pagination('pagination');

// const container = document.getElementById('pagination');
// const pagination = new Pagination(container);

paginationEl.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  const paginationBtnList = document.querySelectorAll('button.btn-number');
  const lastPage = Number(paginationBtnList[paginationBtnList - 1].textContent);

  if (Number(event.target.textContent)) {
    onNumberBtnClick(event);
  } else if (event.target.textContent === '→' && currentPage < lastPage - 1) {
    onRightBtnClick();
  } else if (event.target.textContent === '←' && currentPage > 0) {
    onLeftBtnClick();
  } else {
    return;
  }

  clearMarkup();
  clearContainer();
}

function fetchPage(page) {
  return fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`,
  );
}

function paginationMarkup(length) {
  renderMarkup(length);
  paginationEl.insertAdjacentElement('beforeend', pageMarkup);
}

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

function renderMarkup(length) {
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
  } else if (currentPage + 1 >= 5 && currentPage + 1 < length - 3) {
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
  } else {
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

// const pagination = new Pagination('pagination', options);
