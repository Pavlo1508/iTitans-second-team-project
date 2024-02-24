// import axios from 'axios';

// export async function getBooks() {
// 	try {
// 		axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/top-books';
// 		const response = await axios.get();
// 		console.log(response);
// 		// return response.data.map(item => item.list_name);
// 		const categories = response.data
// 		console.log(categories);
// 		const categorie = categories[0]
// 		console.log(categorie);
// 		const books = categorie.books;
// 		console.log(books);
// 		const title = books.map(book => book.title)
// 		console.log(title);
// 		const bookTitle = title[0];
// 		console.log(bookTitle);
// 		return bookTitle
// 		// const book = books[0];
// 		// console.log(book);
// 		// return book
// 	} catch (error) {
// 		return console.error(error);
// 	};
// };

// const titlePosition = document.querySelector('.book-name')
// 	titlePosition.innerHTML = getBooks();
import axios from 'axios';
// Асинхронна функція для отримання списку книг
export async function getBooks() {
  try {
    // Встановлення базового URL для Axios
    axios.defaults.baseURL = 'https://books-backend.p.goit.global';
    
    // Виконання HTTP-запиту GET до ендпоінта '/books/top-books'
    const response = await axios.get('/books/top-books');
    
    // Отримання списку категорій книг
    const categories = response.data;
    
    // Вибір першої категорії
    const category = categories[0];
    
    // Отримання списку книг вибраної категорії
    const books = category.books;
    
    // Отримання назв книг у вибраній категорії
    const titles = books.map(book => book.title);
    
    // Отримання назви першої книги
    const bookTitle = titles[0];
    
    // Повернення назви першої книги
    return bookTitle;
  } catch (error) {
    // Обробка помилок
    console.error(error);
    throw error; // Перевидач помилки, щоб можна було обробити її викликаючим кодом
  }
}

// Асинхронна функція для оновлення заголовку книги на сторінці
async function updateBookTitle() {
  const titlePosition = document.querySelector('.book-name');
  
  try {
    // Очікування отримання назви книги
    const bookTitle = await getBooks();
    
    // Оновлення HTML-елементу із класом 'book-name'
    return titlePosition.innerHTML = bookTitle;
  } catch (error) {
    // Обробка помилок і виведення повідомлення про помилку
    titlePosition.innerHTML = 'Помилка при отриманні назви книги';
    console.error(error);
  }
}

// Виклик функції для оновлення заголовку книги на сторінці
updateBookTitle();

const showBtn = document.querySelector('.show-book');
showBtn.addEventListener('click', showModal);

function showModal() {
	const modalWindow = document.querySelector('.modal');
	const bookTitleElement = document.querySelector('.modal-title');
  
  // Виправлення: Виправлено неправильний синтаксис для встановлення стилю.
	modalWindow.style.display = 'block';
	
	updateBookTitle().then(bookTitle => {
		bookTitleElement.innerHTML = bookTitle;
	}).catch(error => {
		// Обробка помилок та виведення повідомлення про помилку
		console.error(error);
		bookTitleElement.innerHTML = 'Помилка при отриманні назви книги';
	});
}