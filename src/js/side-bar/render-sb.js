const categoriesList = document.getElementById('categories-list');
import './sidebar';  // Якщо це модуль, переконайтеся, що він імпортується належним чином
let previousItem = null;
const switcherForDarkSidebar = document.getElementById('theme');

function handleItemClick(event) {
    const clickedItem = event.target;

    if (clickedItem.classList.contains('category-item')) {
        const isDarkMode = switcherForDarkSidebar.checked;

        if (previousItem && previousItem !== clickedItem) {
            previousItem.textContent = previousItem.getAttribute('data-text');
            resetStyle(previousItem, isDarkMode);
        }

        clickedItem.textContent = clickedItem.textContent.toUpperCase();
        addStyle(clickedItem, isDarkMode);

        previousItem = clickedItem;
        allCategory.setAttribute('id', '');
    }
}

categoriesList.addEventListener('click', handleItemClick);

export function renderSb(categories) {
    categories.forEach(category => {
        categoriesList.insertAdjacentHTML('beforeend', `<li class="category-item">${category}</li>`);
    });

    const allCategoryItems = document.querySelectorAll('.category-item');
    // const allCategory = document.querySelector('.first-categorie-item');

    allCategoryItems.forEach(item => {
        item.setAttribute('data-text', item.textContent);
    });

    switcherForDarkSidebar.addEventListener('click', () => {
        const isDarkMode = switcherForDarkSidebar.checked;

        allCategoryItems.forEach(item => {
            resetStyle(item, !isDarkMode);
            addStyle(item, isDarkMode);
        });

        if (previousItem) {
            handleItemClick({ target: previousItem });
        }
    });
}

function addStyle(item, isDarkMode) {
    // const bodyStyle = window.getComputedStyle(document.body);
    // const backgroundColor = bodyStyle.backgroundColor;

    if (isDarkMode) {
        item.style.color = '#EAC645';
        item.style.fontWeight = '700';
    } else {
        item.style.color = '#4F2EE8';
        item.style.fontWeight = '700';
    }
}

function resetStyle(item, isDarkMode) {
    // const bodyStyle = window.getComputedStyle(document.body);
    // const backgroundColor = bodyStyle.backgroundColor;

    if (isDarkMode) {
        item.style.color = 'rgba(255, 255, 255, 0.6)';
        item.style.fontWeight = '400';
    } else {
        item.style.color = 'rgba(17, 17, 17, 0.6)';
        item.style.fontWeight = '400';
    }
}

// Додайте інші функції, такі як addDarkStyle, resetDarkStyle, якщо вони використовуються в іншому коді.

