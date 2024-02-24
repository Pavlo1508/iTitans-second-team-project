const modalBtn = document.querySelector('.modal-btn');
const bookTitleElement = document.querySelector('.modal-title');
const itemsToLs = {};
const itemsToLsKey = 'title';

modalBtn.addEventListener('click', addToLs);

function addToLs() {
	const textTitle = bookTitleElement.textContent;
	itemsToLs.title = textTitle;

	localStorage.setItem(itemsToLsKey, JSON.stringify(itemsToLs))
}