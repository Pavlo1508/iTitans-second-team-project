import axios from 'axios';

let cachedBooksData = null;

async function fetchBooksDataIfNeeded() {
  if (!cachedBooksData) {
    try {
      const response = await axios.get('https://books-backend.p.goit.global/books/top-books');
      cachedBooksData = response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  return cachedBooksData;
}

function createMarkupForBookCard(book) {
  const { _id, author, book_image, title } = book;
  return `
    <li class="hero-list-card" data-cardID="${_id}">
      <figure>
        <img class="hero-card-image" src="${book_image}" alt="${title}" />
        <figcaption>
          <h3 class='book-title'>${title}</h3>
          <p class='book-author'>${author}</p>
        </figcaption>
      </figure>
    </li>
  `;
}

export async function renderBookCards() {
  try {
    let booksData = await fetchBooksDataIfNeeded();
    booksData = shuffleArray(booksData);
    const gallery = document.querySelector('.hero-list');
    let categoriesToShow = 4;
    let booksPerCategory = 1;
    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      categoriesToShow = 4;
      booksPerCategory = 3;
    } else if (window.innerWidth >= 1440) {
      categoriesToShow = 3;
      booksPerCategory = 5;
    }
    for (let i = 0; i < categoriesToShow; i += 1) {
      const category = booksData[i];
      const booksToShow = category.books.slice(0, booksPerCategory);
      const booksMarkup = booksToShow.map(createMarkupForBookCard).join('');
      const categoryMarkup = `
        <li class="hero-list-wrapper">
          <h2 class="hero-card-title">${category.list_name}</h2>
          <ul class="hero-card-list">
            ${booksMarkup}
          </ul>
          <button class='card-button' type='button'>See More</button>
        </li>
      `;
      gallery.insertAdjacentHTML('beforeend', categoryMarkup);
    }
  } catch (error) {
    console.error('Error rendering book cards:', error);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

renderBookCards();

window.addEventListener('resize', () => {
  document.querySelector('.hero-list').innerHTML = '';
  renderBookCards();
});


const loadBtn = document.querySelector('.button-load');

loadBtn.addEventListener('click', async () => {
    const data = await getImg();
    render(data);
    lightbox.refresh();
    const galleryCards = document.querySelectorAll('.gallery-card');
});

function render(imgs) {
    const markup = imgs.map((img) => {
        return `<li class="gallery-card">
    <a class="" href="$">
        <img src="" alt="" />
    </ul>
    </a>
</li>`;
    }).join('');

    list.insertAdjacentHTML('beforeend', markup);
}



async function getImg() {
    
    const params = new URLSearchParams({
    });
    
    const response = await axios.get(`https://books-backend.p.goit.global/books/top-books&_limit=5&_sort=name`);
    return response.data;
}