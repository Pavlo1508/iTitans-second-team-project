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
//   -------------
function loadFromLS(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function saveToLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// ---------------------------

async function onModalCreate(id) {
  const res = await axios.get(`https://books-backend.p.goit.global/books/${id}`);
  return res.data;
}

onModalCreate('643282b1e85766588626a0dc')
  .then(data => modalBookTemplate(data))
  .catch(error => console.log(error));

// 643282b1e85766588626a0dc no desc
// 643282b1e85766588626a086 desk
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

// refs.modalAddBtn.addEventListener('click', onModalAddBtnClick);
// function onModalAddBtnClick(key) {
//   refs.modalAddBtn.classList.add('visually-hidden');
//   refs.modalRemoveBtn.classList.remove('visually-hidden');
//   refs.modalRemoveText.classList.remove('visually-hidden');
//   refs.modal.classList.add('remove-modal');
//   const objForLs = {};
//   onModalCreate('643282b1e85766588626a086')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
//   // saveToLS();
// }

refs.modalAddBtn.addEventListener('click', onModalAddBtnClick);

function onModalAddBtnClick() {
  // Определите ключ, который будет использоваться в локальном хранилище
  const localStorageKey = 'booksData';

  // Используйте onModalCreate для получения данных
  onModalCreate('643282b1e85766588626a086')
    .then(data => {
      // Добавьте данные в локальное хранилище
      const existingData = loadFromLS(localStorageKey);
      existingData.push(data);
      saveToLS(localStorageKey, existingData);

      // Другие изменения в пользовательском интерфейсе, если нужно
      refs.modalAddBtn.classList.add('visually-hidden');
      refs.modalRemoveBtn.classList.remove('visually-hidden');
      refs.modalRemoveText.classList.remove('visually-hidden');
      refs.modal.classList.add('remove-modal');
    })
    .catch(error => console.log(error));
}

// refs.modalRemoveBtn.addEventListener('click', onModalRemoveBtnClick);
// function onModalRemoveBtnClick() {
//   refs.modalAddBtn.classList.remove('visually-hidden');
//   refs.modalRemoveBtn.classList.add('visually-hidden');
//   refs.modalRemoveText.classList.add('visually-hidden');
//   refs.modal.classList.remove('remove-modal');
// }
refs.modalRemoveBtn.addEventListener('click', onModalRemoveBtnClick);

function onModalRemoveBtnClick() {
  // Определите ключ, который используется в локальном хранилище
  const localStorageKey = 'booksData';

  // Получите все данные из локального хранилища
  const allData = loadFromLS(localStorageKey);

  // Определите объект, который вы хотите удалить (в данном случае, например, первый элемент массива)
  const objectToRemove = allData[0];

  // Удалите объект из массива данных
  const updatedData = allData.filter(item => item !== objectToRemove);

  // Сохраните обновленные данные в локальное хранилище
  saveToLS(localStorageKey, updatedData);

  // Другие изменения в пользовательском интерфейсе, если нужно
  refs.modalAddBtn.classList.remove('visually-hidden');
  refs.modalRemoveBtn.classList.add('visually-hidden');
  refs.modalRemoveText.classList.add('visually-hidden');
  refs.modal.classList.remove('remove-modal');
}
