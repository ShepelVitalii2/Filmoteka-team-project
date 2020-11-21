import { Spinner } from 'spin.js';

export default function loadingSpinner() {
  document.querySelector('.loadspin-overlay').classList.toggle('is-open');
}
