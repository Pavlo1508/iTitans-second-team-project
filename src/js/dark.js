const switcher = document.querySelector('#theme');
const menu = document.querySelector('.icon-menu');
const logo = document.querySelector('.icon-logo');
const shoppingList = document.querySelector('.nav-shopping');
const shoppingIcon = document.querySelector('.shopping-icon');
const body = document.body;
const header = document.querySelector('header');
const closeIcon = document.querySelector('.icon-close');
const key = 'dark-theme';
switcher.addEventListener('click', changeTheme);
function changeTheme() {
  if (switcher.checked) {
    shoppingIcon.classList.add('dark-icons');
    shoppingList.classList.add('dark-icons');
    closeIcon.classList.add('dark-icons');
    logo.classList.add('dark-icons');
    menu.classList.add('dark-menu');
    body.classList.add('dark-mode-body');
    header.classList.add('dark-mode');
    // localStorage.setItem(key, JSON.stringify(switcher.checked))
  } else {
    shoppingIcon.classList.remove('dark-icons');
    shoppingList.classList.remove('dark-icons');
    closeIcon.classList.remove('dark-icons');
    logo.classList.remove('dark-icons');
    menu.classList.remove('dark-menu');
    body.classList.remove('dark-mode-body');
    header.classList.remove('dark-mode');
  }
}