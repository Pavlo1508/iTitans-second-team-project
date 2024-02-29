import '../img/sprite.svg';

const btn = document.querySelector('.btn-ring');
const arrowToUpIcon = document.querySelector('.arrow-to-up-icon');

arrowToUpIcon.setAttribute(
  'href',
  '../img/sprite.svg#icon-material-symbols_arrow-back-ios-rounded'
);

export function scrollToUp() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 250 || document.documentElement.scrollTop > 250) {
      showButton();
    } else {
      hideButton();
    }
  });

  btn.onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
}

function showButton() {
  btn.classList.remove('btn-ring-hidden');
}

function hideButton() {
  btn.classList.add('btn-ring-hidden');
}

scrollToUp();
