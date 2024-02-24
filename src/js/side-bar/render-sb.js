const categoriesList = document.getElementById('categories-list');
let previousItem = null;
export function renderSb(categories) {
    categories.forEach(category => {
			const categoryItem = document.createElement('li');
			// створюємо лішку з кожного елементу масиву
			categoryItem.classList.add('category-item');
			// додаєм до лішки клас
			categoryItem.textContent = category;
			// додаєм до лішки текст який буде з'являтись

        categoryItem.addEventListener('click', () => {
					categoryItem.textContent = categoryItem.textContent.toUpperCase();
					// при кліку переводимо текст до верхнього регістру

            if (previousItem && previousItem !== categoryItem) {
                previousItem.textContent = previousItem.getAttribute('data-text');
					}
					// перевіряємо, чи є попередній елемент та чи він не є вибраним елементом. якщо так, то змінюємо текст попереднього елемента на текст який був спочатку.
					previousItem = categoryItem;
					// зберігаєм текст вибраного єлемента для наступних прівнянь
        });

        categoryItem.setAttribute('data-text', categoryItem.textContent);
				// додаєм артибут у якому зберігаєм текст
			categoriesList.appendChild(categoryItem);
			// рендерим створену лішку
    });
}