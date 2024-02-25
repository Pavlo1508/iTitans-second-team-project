const slList = document.querySelector('.shopping-list');
const dataFromLs = localStorage.getItem('booksData');
console.log(dataFromLs);
const parsedData = dataParse();
console.log(parsedData);

function dataParse() {
	let parsedData;
	try {
    parsedData = JSON.parse(dataFromLs);
		return parsedData
} catch (error) {
    console.error("Error:", error);
}
}

export function renderSl(books) {
	// функція приймає масив об'єктів з ls
	books.forEach(book => {
		console.log(book);
		// if (book.id === )
		// створення елементів
		const slItem = document.createElement('li');
		slItem.classList.add('sl-item');

		const slImg = document.createElement('img');
		slImg.setAttribute('src', `${book.book_image}`);
		slImg.setAttribute('alt', '');
		slImg.classList.add('sl-img');

		const slInfo = document.createElement('div');
		slInfo.classList.add('sl-info');

		const bookTitle = document.createElement('h3');
		bookTitle.classList.add('sl-book-title');
		bookTitle.textContent = `${book.title}`

		const bookAuthor = document.createElement('p');
		bookAuthor.classList.add('sl-book-author');
		bookAuthor.textContent = `${book.author}`

		const bookDescription = document.createElement('p');
		bookDescription.classList.add('sl-book-description');
		bookDescription.textContent = `${book.description}`

		const bookLinks = document.createElement('div');
		bookLinks.classList.add('sl-book-links');

		slList.appendChild(slItem);
		slItem.appendChild(slImg);
		slItem.appendChild(slInfo);
		slInfo.appendChild(bookTitle);
		slInfo.appendChild(bookAuthor);
		slInfo.appendChild(bookDescription);
		slInfo.appendChild(bookLinks);

		if (Array.isArray(book.buy_links)) {
			book.buy_links.forEach(link => {
				if (link.name === 'Amazon') {
					const bookLinkAmazon = document.createElement('a');		
					bookLinkAmazon.setAttribute('href', link.url);
					bookLinkAmazon.classList.add('sl-book-link-amazon');
					bookLinks.appendChild(bookLinkAmazon);
					const bookLinkAmazonImg = document.createElement('img');
					bookLinkAmazonImg.classList.add('sl-book-link-amazon-img');
					bookLinkAmazonImg.setAttribute('src', './img/png/amazon.png')
					bookLinks.appendChild(bookLinkAmazon);
					bookLinkAmazon.appendChild(bookLinkAmazonImg);
				}
      });
    }
		if (Array.isArray(book.buy_links)) {
			book.buy_links.forEach(link => {
				if (link.name === 'Apple Books') {
					const bookLinkAb = document.createElement('a');		
					bookLinkAb.setAttribute('href', link.url);
					bookLinkAb.classList.add('sl-book-link-amazon');
					bookLinks.appendChild(bookLinkAb);
					const bookLinkAbImg = document.createElement('img');
					bookLinkAbImg.classList.add('sl-book-link-amazon-img');
					bookLinkAbImg.setAttribute('src', './img/png/Apple books.png')
					bookLinks.appendChild(bookLinkAb);
					bookLinkAb.appendChild(bookLinkAbImg);
				};
      });
		};
	});
};

function initializeRender(dataFromLs) {
    try {
        if (dataFromLs !== null) {
            if (Array.isArray(parsedData)) {
                renderSl(parsedData);
            } else {
                console.error("Дані з локального сховища не є масивом.");
            }
        } else {
            console.error("Дані під вказаним ключем відсутні.");
        }
    } catch (error) {
        console.error("Помилка при розпарсюванні даних з локального сховища:", error);
    }
};

initializeRender(parsedData);
