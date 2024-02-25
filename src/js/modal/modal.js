import axios from 'axios';

const refs = {
  modalCloseBtn: document.querySelector('.modal-close-btn'),
  modalAmazonIcon: document.querySelector('.amazon-icon'),
  modalAppleBooksIcon: document.querySelector('.apple-books-icon'),
  modalAddBtn: document.querySelector('.js-add-btn'),
  modalRemoveBtn: document.querySelector('.js-remove-btn'),
  modalBackdrop: document.querySelector('.modal-backdrop'),
};

refs.modalCloseBtn.addEventListener('click', onCloseBtnClick);

function onCloseBtnClick() {
  refs.modalBackdrop.classList.remove('is-open');
  window.removeEventListener('keydown', onEscClick);
}

refs.modalBackdrop.addEventListener('click', onBackdropClick);

function onBackdropClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  } else {
    refs.modalBackdrop.classList.remove('is-open');
    window.removeEventListener('keydown', onEscClick);
  }
}

// Прослуховувач потрібно занести в функцію, яка відкриватиме модальне вікно
window.addEventListener('keydown', onEscClick);

function onEscClick(e) {
  if (e.key !== 'Escape') {
    return;
  }
  refs.modalBackdrop.classList.remove('is-open');
  window.removeEventListener('keydown', onEscClick);
}

function loadFromLS(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function saveToLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

let cashedBooksData = null;

async function onModelCreate() {
  if (!cashedBooksData) {
    try {
      const res = await axios.get(
        'https://books-backend.p.goit.global/books/643282b1e85766588626a0dc'
      );
      cashedBooksData = res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  return cashedBooksData;
}

onModelCreate();