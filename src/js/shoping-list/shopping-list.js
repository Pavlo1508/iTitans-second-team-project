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
}
}

export function renderSl(books) {
	// функція приймає масив об'єктів з ls
	books.forEach(book => {
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
		bookTitle.textContent = `${book.title}`;
		
		const bookCategory = document.createElement('p');
		bookCategory.classList.add('sl-book-category');
		bookCategory.textContent = `${book.list_name}`

		const bookDescription = document.createElement('p');
		bookDescription.classList.add('sl-book-description');
		bookDescription.textContent = `${book.description}`;

		const bookSellBox = document.createElement('div');
		bookSellBox.classList.add('sl-sell-box')

		const bookAuthor = document.createElement('p');
		bookAuthor.classList.add('sl-book-author');
		bookAuthor.textContent = `${book.author}`;

		const bookLinks = document.createElement('div');
		bookLinks.classList.add('sl-book-links');

		const slBtn = document.createElement('button');
		slBtn.classList.add('sl-remove');

		const slBtnImg = document.createElement('img');
		slBtnImg.setAttribute('src', "./img/png/dump.png");
		slBtnImg.classList.add('sl-remove-img');

		slList.appendChild(slItem);
		slItem.appendChild(slBtn);
		slBtn.appendChild(slBtnImg);
		slItem.appendChild(slImg);
		slItem.appendChild(slInfo);
		slInfo.appendChild(bookTitle);
		slInfo.appendChild(bookCategory);
		slInfo.appendChild(bookDescription);
		slInfo.appendChild(bookSellBox);
		bookSellBox.appendChild(bookAuthor);
		bookSellBox.appendChild(bookLinks);

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
					bookLinkAmazon.appendChild(bookLinkAmazonImg);
				}
      });
    }
		if (Array.isArray(book.buy_links)) {
			book.buy_links.forEach(link => {
				if (link.name === 'Apple Books') {
					const bookLinkAb = document.createElement('a');		
					bookLinkAb.setAttribute('href', link.url);
					bookLinkAb.classList.add('sl-book-link-ab');
					bookLinks.appendChild(bookLinkAb);
					const bookLinkAbImg = document.createElement('img');
					bookLinkAbImg.classList.add('sl-book-link-ab-img');
					bookLinkAbImg.setAttribute('src', './img/png/Apple books.png')
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
					const emptyPage = document.createElement('div');
					emptyPage.classList.add('empty-page-box');

					const emptyPageText = document.createElement('p');
					emptyPageText.classList.add('empty-page-text');
					emptyPageText.textContent = 'This page is empty, add some books and proceed to order.';

					const emptyPageImg = document.createElement('img');
					emptyPageImg.classList.add('empty-page-img');
					emptyPageImg.setAttribute('src', './img/png/IMG_96061.png')

					slList.appendChild(emptyPage);
					emptyPage.appendChild(emptyPageText);
					emptyPage.appendChild(emptyPageImg);


          console.error("Дані під вказаним ключем відсутні.");
        }
    } catch (error) {
        console.error("Помилка при розпарсюванні даних з локального сховища:", error);
    }
};

initializeRender(parsedData);
