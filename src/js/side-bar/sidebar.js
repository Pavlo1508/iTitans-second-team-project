import { getCategories } from './api';
import { renderSb } from './render-sb';
import { scrollToUp } from './ToUpBtn';


export async function initializeSb() {
    const categories = await getCategories();
    renderSb(categories);
};
initializeSb();
scrollToUp();
// ПЕРЕНЕСТИ В МЕЙН
// import { initializeSb } from './side-bar/sidebar'
// initializeSb();

// ПЕРЕНЕСТИ В МЕЙН
// import { initializeSb } from './side-bar/sidebar'
// initializeSb();
