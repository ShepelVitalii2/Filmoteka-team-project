import { onOpenModal } from './modal';

const refs = {
  listConteinerElem: document.querySelector('.container-item'),
  // itemConteinerElem: document.querySelector('.item-film'),
};
refs.listConteinerElem.addEventListener('click', renderModal);

function renderModal(e) {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    console.log(e.target.dataset.id);
    const idFilm = e.target.dataset.id;
    console.log(idFilm);
    fetch(
      `https://api.themoviedb.org/3/movie/${idFilm}?api_key=3f80d4cf4eb52d6e9d2ef400ea3d2acb`,
    )
      // fetch(
      //   `https://api.themoviedb.org/3/movie/${idFilm}?api_key=3f80d4cf4eb52d6e9d2ef400ea3d2acb`,
      // )
      .then(r => r.json())
      .then(obj => {
        console.log(obj);
        onOpenModal(obj);
      });
  }
}
