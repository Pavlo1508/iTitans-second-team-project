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

//=====================================//
const menuCont = document.querySelector('.mobile-menu-container');
const openBtn = document.querySelector('.btn-menu');
const fondsCont = document.querySelector('.supporters');

openBtn.addEventListener('click', () => {
  if (menuCont.classList.contains('none')) {
    menuCont.classList.remove('none');
    fondsCont.style.display = 'none';
    openBtn.innerHTML = `<svg class="icon-menu-close" width="14" height="14">
        <use href="./img/fonds/svg/icons.svg#icon-burg-close"></use>
      </svg>`;
    document.body.classList.add('mobile-menu-open');
  } else {
    menuCont.classList.add('none');
    fondsCont.style.display = 'block';
    openBtn.innerHTML = `<svg class="icon-menu" width="28" height="28">
        <use href="./img/fonds/svg/icons.svg#icon-burger-menu"></use>
      </svg>`;
    document.body.classList.remove('mobile-menu-open');
  }
});
