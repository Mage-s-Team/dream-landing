const body = document.querySelector('body');
const preloader = document.querySelector('.preloader-wrap');

function hidePreloader() {
  body.classList.remove('scrollbar-hide');
  body.classList.add('scrollbar-unhide');
  preloader.classList.add('preloader-wrap-hidden');
}

setInterval(hidePreloader, 2000);