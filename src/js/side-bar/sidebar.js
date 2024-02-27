import { getCategories } from './api';
import { renderSb } from './render-sb';
import { changeThemeSb } from './dark-side-bar';

const themeSwitcher = document.querySelector('#theme'); 

export async function initializeSb() {
    const categories = await getCategories();
		renderSb(categories);
		themeSwitcher.addEventListener('click', changeThemeSb);
};
initializeSb();