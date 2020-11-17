//Импорты
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';


const filmContainerEl=document.querySelector('.film-container')

filmContainerEl.addEventListener('click', onFilmCardClick);
console.log('MODAL')



function onFilmCardClick(e) {
    console.log('CLiCK');
    basicLightbox.create(`
		<h1>HTML</h1>
		<p>HTML inside a lightbox.</p>
	`).show()
}