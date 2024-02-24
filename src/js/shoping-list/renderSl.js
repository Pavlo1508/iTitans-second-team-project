const shoppingList = document.querySelector('.shopping-list');
console.log(shoppingList);
const dataJson = localStorage.getItem('title')
const data = JSON.parse(dataJson);

function templateSl(bookData) {
	const templateItem = `<li class="shopping-list-item">
			<img sclas="book-img" src="" alt="">
			<div class="book-info">
				<p class="book-title">${bookData.title}</p>
				<p class="book-author"></p>
				<p class="book-description"></p>
				<div class="book-links">
					<a href="" class="amazon-link"></a>
					<a href="" class="ab-link"></a>
				</div>
			</div>
		</li>`
	return templateItem
}


function renderSp() {
	if (!data) {
		console.error('no have data');
		return;
	}

	const markup = data.map(book => templateSl(book)).join('');
	shoppingList.innerHTML = markup;
}

goToShoppingListBtn.addEventListener('click', renderSp);