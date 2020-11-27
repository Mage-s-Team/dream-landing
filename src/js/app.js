const body = document.querySelector('body');
const preloader = document.querySelector('.preloader-wrap');

const modalOpenBtn = document.querySelector('#open-modal-btn');
const modalCloseBtn = document.querySelector('.modal-wrap__btn-close');
const modalWindow = document.querySelector('.modal-wrap');

function hidePreloader() {
  body.style.overflow = 'auto';
  preloader.classList.add('preloader-wrap-hidden');
  sessionStorage.setItem('isPrealoaderNeed', false);
}

const isPrealoaderNeed = JSON.parse(sessionStorage.getItem('isPrealoaderNeed'));

if (isPrealoaderNeed === null) {
  setInterval(hidePreloader, 1800);
  console.log(isPrealoaderNeed);
} else {
  body.style.overflow = 'auto';
  preloader.style.display = 'none';
}

function showModal() {
  modalWindow.classList.remove('modal-wrap-hidden');
  body.style.overflow = 'hidden';
}

function closeModal(e) {
  e.stopPropagation();
  modalWindow.classList.add('modal-wrap-hidden');
  body.style.overflow = 'auto';
}

modalOpenBtn.addEventListener('click', showModal);
modalCloseBtn.addEventListener('click', closeModal);
// modalWindow.addEventListener('click', closeModal);