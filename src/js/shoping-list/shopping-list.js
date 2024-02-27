import {pagination} from './pagination'

function hideSidebar() {
	const tagTitle = document.querySelector('.hero-title');
	const sidebar = document.querySelector('.sidebar')
	if (tagTitle.textContent === 'Shopping List') {
		sidebar.style.display = 'none';
	}
}

hideSidebar();

const slList = document.querySelector('.shopping-list');
const dataFromLs = localStorage.getItem('booksData');
const parsedData = dataParse();

function dataParse() {
	let parsedData;
		try {
    parsedData = JSON.parse(dataFromLs);
		return parsedData
	} catch (error) {
    console.error("Error:", error);
	};
};

function templateSl(books) {
	const markupSl = books.map(book => 
		`<li class="sl-item" data-bookId="${book._id}">
			<button class="sl-remove">
				<img src="./img/png/dump.png" class="sl-remove-img">
			</button>
			<img class="sl-img" src="${book.book_image}" alt="${book.description}">
			<div class="sl-info">
				<h3 class="sl-book-title">${book.title}</h3>
				<p class="sl-book-category">${book.list_name}</p>
				<p class="sl-book-description">${book.description}</p>
				<div class="sl-sell-box">
					<p class="sl-book-author">${book.author}</p>
					<div class="sl-book-links">
						<a class="sl-book-link-amazon" href="${book.buy_links[0].url}">
							<img class="sl-book-link-amazon-img" src="./img/png/amazon.png">
						</a>
						<a class="sl-book-link-ab" href="${book.buy_links[1].url}">
							<img class="sl-book-link-ab-img" src="./img/png/Apple books.png">
						</a>
					</div>
				</div>
			</div>
		</li>`
	).join('\n\n');

	slList.innerHTML = markupSl;
};

function templateEmptySl() {
	const markupEmptySl =
	`<div class="empty-page-box">
		<p class="empty-page-text">This page is empty, add some books and proceed to order.</p>
		<img class="empty-page-img" src="./img/png/IMG_96061.png" alt="This page is empty, add some books and proceed to order">
	</div>`;
	
	slList.innerHTML = markupEmptySl;
}

function initializeRender(dataFromLs) {
    try {
        if (dataFromLs !== null && dataFromLs.length !== 0) {
            if (Array.isArray(parsedData)) {
                templateSl(parsedData);
            } else {
                console.error(error);
            }
				} else {
					templateEmptySl();
				}
    } catch (error) {
        console.error("Помилка при розпарсЮванні даних:", error);
    }
};

initializeRender(parsedData);

slList.addEventListener('click', event => {
	const removeBtn = event.target.closest('.sl-remove');
	if (removeBtn) {
		const listItem = removeBtn.closest('.sl-item');
		listItem.remove();
		const bookId = listItem.dataset.bookid;
		updateLs(parsedData => removeBookFromLs(parsedData, bookId));
	}
	});

function removeBookFromLs(books, bookId) {
	const filteredBook = books.filter(book => book._id !== bookId);
	return filteredBook
};

function updateLs(updateFunction) {
	const storedData = JSON.parse(localStorage.getItem('booksData')) || [];
	const updatedData = updateFunction(storedData);

	localStorage.setItem('booksData', JSON.stringify(updatedData));
};

if (slList.getElementsByTagName('li').length > 3) {
	pagination();
		} else if (slList.getElementsByTagName('li').length <= 3){
	const arrowsLAndR = document.querySelectorAll('.pagination-button');
	arrowsLAndR.forEach(arrow => {
		arrow.style.display = 'none';
	})} else {
		templateEmptySl();
	}