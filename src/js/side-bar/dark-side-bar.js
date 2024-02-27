export function changeThemeSb() {
	const themeSwitcher = document.querySelector('#theme'); 
	const allCategoryItems = document.querySelectorAll('.category-item');
	if (themeSwitcher.checked) {
		allCategoryItems.forEach(categoryItem => categoryItem.classList.add('dark-category-item'))
	} else {
		allCategoryItems.forEach(categoryItem => categoryItem.classList.remove('dark-category-item'))
	}
	

}


