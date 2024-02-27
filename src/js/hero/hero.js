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
    <div class='card-image-cont'>
        <img class="hero-card-image" src="${book_image}" alt="${title}" />
        <p class='hidden-text'>Quick View</p>
        </div>
        <div>
          <h3 class='book-title'>${title}</h3>
          <p class='book-author'>${author}</p>
        </div>
    </li>
  `;
}
// export async function renderBookCards() {
//   try {
//     let booksData = await fetchBooksDataIfNeeded();
//     booksData = shuffleArray(booksData);
//     const gallery = document.querySelector('.hero-list');
//     let categoriesToShow = 4;
//     let booksPerCategory = 1;
//     if (window.innerWidth >= 768 && window.innerWidth < 1440) {
//       categoriesToShow = 4;
//       booksPerCategory = 3;
//     } else if (window.innerWidth >= 1440) {
//       categoriesToShow = 3;
//       booksPerCategory = 5;
//     }
//     for (let i = 0; i < categoriesToShow; i += 1) {
//       const category = booksData[i];
//       const booksToShow = category.books.slice(0, booksPerCategory);
//       const booksMarkup = booksToShow.map(createMarkupForBookCard).join('');
//       const categoryMarkup = `
//         <li class="hero-list-wrapper">
//           <h2 class="hero-card-title">${category.list_name}</h2>
//           <ul class="hero-card-list">
//             ${booksMarkup}
//           </ul>
//           <button class='card-button' type='button'>See More</button>
//         </li>
//       `;
//       gallery.insertAdjacentHTML('beforeend', categoryMarkup);
//     }
//   } catch (error) {
//     console.error('Error rendering book cards:', error);
//   }
// }
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// renderBookCards();
// window.addEventListener('resize', () => {
//   document.querySelector('.hero-list').innerHTML = '';
//   renderBookCards();
// });
// ПЕРЕНЕСТИ В MAIN.JS
// import './hero';
// function darkThemeForHero() {
//   const heroTitle = document.querySelector('.hero-title');
//   const switcher = document.querySelector('#theme');
//   const cardBookTitle = document.querySelector('.book-title');
//   const heroBtn = document.querySelector('.card-button');
//   // console.log(switcher);
//   // console.log(cardBookTitle);
//   // console.log(heroBtn);
//   if (switcher.checked) {
//     heroTitle.classList.add('dark-hero');
//     cardBookTitle.classList.add('dark-hero');
//     heroBtn.classList.add('dark-hero');
//     // localStorage.setItem(key, JSON.stringify(switcher.checked))
//   } else {
//     heroTitle.classList.remove('dark-hero');
//     cardBookTitle.classList.remove('dark-hero');
//     heroBtn.classList.remove('dark-hero');
//   }
// }
// function getElementsForChange(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const heroTitle = document.querySelectorAll('.hero-title');
//       const switcher = document.querySelectorAll('#theme');
//       const cardBookTitle = document.querySelectorAll('.book-title');
//       const heroBtn = document.querySelectorAll('.card-button');
//       resolve({ heroTitle, switcher, cardBookTitle, heroBtn });
//     }, delay);
//   });
// }
// function addDarkThemeForHero(elements) {
//   const { heroTitle, switcher, cardBookTitle, heroBtn } = elements;
//   console.log(elements);
//   if (switcher && heroTitle && cardBookTitle && heroBtn) {
//     if (switcher.checked) {
//       heroTitle.classList.add('dark-hero');
//       cardBookTitle.classList.add('dark-hero');
//       heroBtn.classList.add('dark-hero');
//       // localStorage.setItem(key, JSON.stringify(switcher.checked))
//     } else {
//       heroTitle.classList.remove('dark-hero');
//       cardBookTitle.classList.remove('dark-hero');
//       heroBtn.classList.remove('dark-hero');
//     }
//   } else {
//     console.error('Один або декілька елементів не знайдено.');
//   }
// }
// getElementsForChange(3000)
//   .then(elements => {
//     addDarkThemeForHero(elements);
//   })
//   .catch(error => {
//     console.error('Сталася помилка:', error);
//   });
//
// function addDarkThemeForHero() {
//   const heroTitle = document.querySelectorAll('.hero-title');
//   const switcher = document.querySelector('#theme');
//   const cardBookTitle = document.querySelectorAll('.book-title');
//   const heroBtn = document.querySelectorAll('.card-button');
//   if (switcher && switcher.checked) {
//     heroTitle.forEach(title => title.classList.add('dark-hero'));
//     cardBookTitle.forEach(title => title.classList.add('dark-hero'));
//     heroBtn.forEach(btn => btn.classList.add('dark-hero'));
//   } else {
//     heroTitle.forEach(title => title.classList.remove('dark-hero'));
//     cardBookTitle.forEach(title => title.classList.remove('dark-hero'));
//     heroBtn.forEach(btn => btn.classList.remove('dark-hero'));
//   }
// }
// // Відслідковуємо подію завантаження DOM
// document.addEventListener('DOMContentLoaded', function () {
//   // Отримуємо елементи та змінюємо їх стилі
//   addDarkThemeForHero();
// });
// setTimeout(darkThemeForHero, 3000);
window.addEventListener('resize', () => {
  document.querySelector('.hero-list').innerHTML = '';
  document.querySelector(
    '.hero-title'
  ).innerHTML = `<h1 class="hero-title">Best Sellers <span class="hero-accent">Books</span></h1>`;
  renderBookCards();
});
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
          <button class='card-button' type='button' data-category="${category.list_name}">See More</button>
        </li>
      `;
      gallery.insertAdjacentHTML('beforeend', categoryMarkup);
    }
    document.querySelectorAll('.card-button').forEach(button => {
      button.addEventListener('click', async () => {
        const categoryName = button.dataset.category;
        try {
          const response = await axios.get(
            `https://books-backend.p.goit.global/books/category?category=${categoryName}`
          );
          const categoryBooks = response.data;
          displayCategoryBooks(categoryBooks, categoryName);
        } catch (error) {
          console.error('Error fetching category books:', error);
        }
      });
    });
    const categoriesList = document.getElementById('categories-list');
    categoriesList.querySelectorAll('.category-item').forEach(category => {
      if (category.textContent !== 'All categories') {
        category.addEventListener('click', async () => {
          const categoryName = category.dataset.text;
          try {
            const response = await axios.get(
              `https://books-backend.p.goit.global/books/category?category=${categoryName}`
            );
            const categoryBooks = response.data;
            displayCategoryBooks(categoryBooks, categoryName);
          } catch (error) {
            console.error('Error fetching category books:', error);
          }
        });
      }
    });
  } catch (error) {
    console.error('Error rendering book cards:', error);
  }
}
function createMarkupForBookCardCategory(book) {
  const { _id, author, book_image, title } = book;
  return `
    <li class="hero-list-card category-card" data-cardID="${_id}">
    <div class='card-image-cont'>
        <img class="hero-card-image" src="${book_image}" alt="${title}" />
        <p class='hidden-text'>Quick View</p>
        </div>
        <div>
          <h3 class='book-title'>${title}</h3>
          <p class='book-author'>${author}</p>
        </div>
    </li>
  `;
}
function displayCategoryBooks(categoryBooks, categoryName) {
  const gallery = document.querySelector('.hero-list');
  gallery.classList.add('category-list');
  gallery.innerHTML = '';
  categoryBooks.forEach(book => {
    const bookMarkup = createMarkupForBookCardCategory(book);
    gallery.insertAdjacentHTML('beforeend', bookMarkup);
  });
  document.querySelector('.hero-title').textContent = categoryName;
}
document.addEventListener('DOMContentLoaded', () => {
  renderBookCards();
});
const firstCategoryItems = document.getElementById('category-el');
console.log(firstCategoryItems);
firstCategoryItems.addEventListener('click', () => {
  document.querySelector('.hero-list').innerHTML = '';
  document.querySelector(
    '.hero-title'
  ).innerHTML = `<h1 class="hero-title">Best Sellers <span class="hero-accent">Books</span></h1>`;
  renderBookCards();
});