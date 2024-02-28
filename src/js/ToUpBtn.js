const btn = document.querySelector('.btn-ring');

export function scrollToUp() {
 window.addEventListener("scroll", () => {
    if ( window.scrollY > 250 || document.documentElement.scrollTop > 250) {
        showButton();
    } else {
       hideButton() 
    }
});

btn.onclick = () => {
     window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
};   
}


function showButton() {
  btn.classList.remove('btn-ring-hidden');  
}

function hideButton() {
     btn.classList.add('btn-ring-hidden'); 
}

scrollToUp();