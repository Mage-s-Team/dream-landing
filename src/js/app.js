const body = document.querySelector('body');
const preloader = document.querySelector('.preloader-wrap');

function hidePreloader() {
  body.classList.remove('scrollbar-hide');
  body.classList.add('scrollbar-unhide');
  preloader.classList.add('preloader-wrap-hidden');
  sessionStorage.setItem('isPrealoaderNeed', false);
}

const isPrealoaderNeed = JSON.parse(sessionStorage.getItem('isPrealoaderNeed'));

if (isPrealoaderNeed === null) {
  setInterval(hidePreloader, 1800);
  console.log(isPrealoaderNeed)
} else {
  body.classList.remove('scrollbar-hide');
  body.classList.add('scrollbar-unhide');
  preloader.style.display = 'none';
}
