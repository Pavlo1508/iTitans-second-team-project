const categoriesList = document.getElementById('categories-list');
let previousItem = '';
export function renderSb(categories) {

    categories.forEach(category => {
		const categoryItem = document.createElement('li');
		// створюємо лішку з кожного елементу масиву
		categoryItem.classList.add('category-item');
		categoryItem.classList.add('dark-category-item');
		// додаєм до лішки клас
		categoryItem.textContent = category;
		// додаєм до лішки текст який буде з'являтись
		categoriesList.appendChild(categoryItem);
		// рендерим створену лішку
	});

	const allCategoryItems = document.querySelectorAll('.category-item');
	
	allCategoryItems.forEach(allCategoryItems => {
	allCategoryItems.addEventListener('click', () => {
		addStyle(allCategoryItems);
		allCategoryItems.textContent = allCategoryItems.textContent.toUpperCase();
		// при кліку переводимо текст до верхнього регістру
        if (previousItem && previousItem !== allCategoryItems) {
			previousItem.textContent = previousItem.getAttribute('data-text');
			resetStyle(previousItem);
		}
		// перевіряємо, чи є попередній елемент та чи він не є вибраним елементом
		// якщо так, то змінюємо текст попереднього елемента на текст який був спочатку.
		previousItem = allCategoryItems;
		// зберігаєм текст вибраного єлемента для наступних прівнянь
        });

        allCategoryItems.setAttribute('data-text', allCategoryItems.textContent);
		// додаєм артибут у якому зберігаєм текст
	});	
}

function addStyle(allCategoryItems) {
	const bodyStyle = window.getComputedStyle(document.body);
    const backgroundColor = bodyStyle.backgroundColor;
	if (backgroundColor === 'rgb(32, 32, 36)') {
	allCategoryItems.style.color = '#EAC645';
    allCategoryItems.style.fontWeight = '700';
	} else {
	allCategoryItems.style.color = '#4F2EE8';
    allCategoryItems.style.fontWeight = '700';	
	}
	
}
function resetStyle(previousItem) {
  	const bodyStyle = window.getComputedStyle(document.body);
	const backgroundColor = bodyStyle.backgroundColor;
	if (backgroundColor === 'rgb(32, 32, 36)') {
	previousItem.style.color = 'rgb(255, 255, 255, 0.6)';
    previousItem.style.fontWeight = '400';
	} else {
	previousItem.style.color = 'rgb(17, 17, 17, 0.6)';
    previousItem.style.fontWeight = '400';
	}
}
