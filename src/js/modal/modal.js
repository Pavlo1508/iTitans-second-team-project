import axios from 'axios';

const refs = {
  modalCloseBtn: document.querySelector('.modal-close-btn'),
  modalAmazonIcon: document.querySelector('.amazon-icon'),
  modalAppleBooksIcon: document.querySelector('.apple-books-icon'),
  modalAddBtn: document.querySelector('.js-add-btn'),
  modalRemoveBtn: document.querySelector('.js-remove-btn'),
  modalBackdrop: document.querySelector('.modal-backdrop'),
  modalCard: document.querySelector('.modal-card'),
  modalRemoveText: document.querySelector('.modal-remove-text'),
  modal: document.querySelector('.add-modal'),
  heroList: document.querySelector('.hero-list'),
};

refs.modalCloseBtn.addEventListener('click', onCloseBtnClick);

function onCloseBtnClick() {
  refs.modalBackdrop.classList.remove('is-open');
  window.removeEventListener('keydown', onEscClick);
  document.body.style.overflow = '';
}

refs.modalBackdrop.addEventListener('click', onBackdropClick);

function onBackdropClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  } else {
    refs.modalBackdrop.classList.remove('is-open');
    window.removeEventListener('keydown', onEscClick);
    document.body.style.overflow = '';
  }
}

function onEscClick(e) {
  if (e.key !== 'Escape') {
    return;
  }
  refs.modalBackdrop.classList.remove('is-open');
  window.removeEventListener('keydown', onEscClick);
  document.body.style.overflow = '';
}

async function onModalCreate(id) {
  const res = await axios.get(`https://books-backend.p.goit.global/books/${id}`);
  return res.data;
}

function modalBookTemplate({ book_image, title, author, description, buy_links }) {
  const [amazon, apple_book] = buy_links;
  const amazonUrl = amazon.url;
  const appleUrl = apple_book.url;
  const markup = ` <img src="${book_image}" alt="${title}" class="image" />
        <div class="card-text">
          <h3 class="book-title">${title}</h3>
          <p class="book-author">${author}</p>
          <p class="book-text">
            ${description}
          </p>
          <div class="modal-icons">
            <a href="${amazonUrl}">
              <img
                src="./img/png/amazon.png"
                class="amazon-icon"
                alt="Amazon"
                width="62"
                height="19"
              />
            </a>
            <a href="${appleUrl}">
              <img
                src="./img/png/Apple books.png"
                class="apple-books-icon"
                alt="Apple books"
                width="33"
                height="32"
              />
            </a>
          </div>
        </div>`;
  refs.modalCard.innerHTML = markup;
}

refs.modalAddBtn.addEventListener('click', onModalAddBtnClick);

function onModalAddBtnClick() {
  onModalCreate(cardID)
    .then(data => {
      const existingData = loadFromLS(localStorageKey);
      existingData.push(data);
      saveToLS(localStorageKey, existingData);
      refs.modalAddBtn.classList.add('visually-hidden');
      refs.modalRemoveBtn.classList.remove('visually-hidden');
      refs.modalRemoveText.classList.remove('visually-hidden');
    })
    .catch(error => console.log(error));
}

refs.modalRemoveBtn.addEventListener('click', onModalRemoveBtnClick);

const localStorageKey = 'booksData';

function onModalRemoveBtnClick() {
  const allData = loadFromLS(localStorageKey);
  const objectToRemove = allData[0];
  const updatedData = allData.filter(item => item !== objectToRemove);
  saveToLS(localStorageKey, updatedData);
  refs.modalAddBtn.classList.remove('visually-hidden');
  refs.modalRemoveBtn.classList.add('visually-hidden');
  refs.modalRemoveText.classList.add('visually-hidden');
}

refs.heroList.addEventListener('click', onItemClick);

let cardID = null;

function onItemClick(e) {
  checkBtnStatus();
  window.addEventListener('keydown', onEscClick);
  const name = e.target.nodeName;
  if (name !== 'IMG' && name !== 'H3' && name !== 'P' && name !== 'LI') {
    return;
  }
  refs.modalBackdrop.classList.add('is-open');
  const liElement = e.target.closest('li');
  cardID = liElement.dataset.cardid;
  onModalCreate(cardID)
    .then(data => modalBookTemplate(data))
    .catch(error => console.log(error));
  document.body.style.overflow = 'hidden';
}

function loadFromLS(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function saveToLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function checkBtnStatus() {
  const dataFromLS = loadFromLS(localStorageKey);
  dataFromLS.map(({ _id }) => {
    console.log(_id === cardID);
    if (_id === cardID) {
      refs.modalAddBtn.classList.remove('visually-hidden');
      refs.modalRemoveBtn.classList.add('visually-hidden');
      refs.modalRemoveText.classList.add('visually-hidden');
    } else {
      refs.modalAddBtn.classList.add('visually-hidden');
      refs.modalRemoveBtn.classList.remove('visually-hidden');
      refs.modalRemoveText.classList.remove('visually-hidden');
    }
  });
}
