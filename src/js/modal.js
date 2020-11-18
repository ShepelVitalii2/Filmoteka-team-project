//Импорты
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import modalCardTpl from '../templates/modal-card.hbs'; 



const filmContainerEl=document.querySelector('.film-container')

filmContainerEl.addEventListener('click', onFilmCardClick);
console.log('MODAL')



function onFilmCardClick(e) {
    console.log('CLiCK');
    if (e.target.nodeName !== 'IMG') {
    return;
  }

    const filmCard = modalCardTpl();
    const instance = basicLightbox.create(filmCard);
   
  instance.show();
}

