import{a as k,b as q,c as E}from"./Apple books-494c272a.js";const b=document.querySelector("#theme");let v=null;async function A(){if(!v)try{v=(await k.get("https://books-backend.p.goit.global/books/top-books")).data}catch(o){throw console.error(o),o}return v}function T(o){const{_id:e,author:a,book_image:t,title:d}=o;return`
    <li class="hero-list-card" data-cardID="${e}">
    <div class='card-image-cont'>
        <img class="hero-card-image" src="${t}" alt="${d}" />
        <p class='hidden-text'>Quick View</p>
        </div>
        <div>
          <h3 class='book-title'>${d}</h3>
          <p class='book-author'>${a}</p>
        </div>
    </li>
  `}function $(o){for(let e=o.length-1;e>0;e--){const a=Math.floor(Math.random()*(e+1));[o[e],o[a]]=[o[a],o[e]]}return o}window.addEventListener("resize",()=>{document.querySelector(".hero-list").innerHTML="",document.querySelector(".hero-title").innerHTML='<h1 class="hero-title">Best Sellers <span class="hero-accent">Books</span></h1>',S()});async function S(){try{let o=await A();o=$(o);const e=document.querySelector(".hero-list");let a=4,t=1;window.innerWidth>=768&&window.innerWidth<1440?(a=4,t=3):window.innerWidth>=1440&&(a=3,t=5);for(let r=0;r<a;r+=1){const c=o[r],n=c.books.slice(0,t).map(T).join(""),i=`
        <li class="hero-list-wrapper">
          <h2 class="hero-card-title">${c.list_name}</h2>
          <ul class="hero-card-list">
            ${n}
          </ul>
          <button class='card-button' type='button' data-category="${c.list_name}">See More</button>
        </li>
      `;e.insertAdjacentHTML("beforeend",i)}document.querySelectorAll(".card-button").forEach(r=>{r.addEventListener("click",async()=>{const c=r.dataset.category;try{const n=(await k.get(`https://books-backend.p.goit.global/books/category?category=${c}`)).data;f(n,c)}catch(l){console.error("Error fetching category books:",l)}})}),document.getElementById("categories-list").querySelectorAll(".category-item").forEach(r=>{r.addEventListener("click",async()=>{const c=r.dataset.text;try{const n=(await k.get(`https://books-backend.p.goit.global/books/category?category=${c}`)).data;f(n,c),M()}catch(l){console.error("Error fetching category books:",l)}})})}catch(o){console.error("Error rendering book cards:",o)}}function x(o){const{_id:e,author:a,book_image:t,title:d}=o;return`
    <li class="hero-list-card category-card" data-cardID="${e}">
    <div class='card-image-cont'>
        <img class="hero-card-image" src="${t}" alt="${d}" />
        <p class='hidden-text'>Quick View</p>
        </div>
        <div>
          <h3 class='book-title'>${d}</h3>
          <p class='book-author'>${a}</p>
        </div>
    </li>
  `}function f(o,e){const a=document.querySelector(".hero-list");a.classList.add("category-list"),a.innerHTML="",o.forEach(t=>{const d=x(t);a.insertAdjacentHTML("beforeend",d)}),document.querySelector(".hero-title").textContent=e}document.addEventListener("DOMContentLoaded",()=>{S()});const C=document.querySelector(".first-categorie-item");C.addEventListener("click",()=>{location.reload()});b.addEventListener("click",()=>{const o=document.querySelector(".hero-title"),e=document.querySelectorAll(".book-title"),a=document.querySelectorAll(".card-button");b.checked?(o.classList.add("dark-hero"),e.forEach(t=>{t.classList.add("dark-hero")}),a.forEach(t=>{t.classList.add("dark-hero")})):(o.classList.remove("dark-hero"),e.forEach(t=>{t.classList.remove("dark-hero")}),a.forEach(t=>{t.classList.remove("dark-hero")}))});function M(){const o=document.querySelector(".hero-title"),e=document.querySelectorAll(".book-title"),a=document.querySelectorAll(".card-button");b.checked?(o.classList.add("dark-hero"),e.forEach(t=>{t.classList.add("dark-hero")}),a.forEach(t=>{t.classList.add("dark-hero")})):(o.classList.remove("dark-hero"),e.forEach(t=>{t.classList.remove("dark-hero")}),a.forEach(t=>{t.classList.remove("dark-hero")}))}function I(){const o=document.querySelector("#theme"),e=document.querySelector(".add-modal"),a=e.querySelector(".book-title"),t=e.querySelector(".book-author"),d=e.querySelector(".book-text"),r=e.querySelector(".amazon-icon"),c=e.querySelector(".apple-books-icon"),l=document.querySelector(".js-add-btn"),n=document.querySelector(".js-remove-btn"),i=document.querySelector(".modal-remove-text"),g=document.querySelector(".modal-close-icon");o.checked?(a.classList.add("dark-book-title"),t.classList.add("dark-book-author"),d.classList.add("dark-book-text"),r.classList.add("dark-amazon-icon"),c.classList.add("dark-apple-books-icon"),e.classList.add("dark-modal"),l.classList.add("dark-modal-btn"),n.classList.add("dark-modal-btn"),i.classList.add("dark-modal-remove-text"),g.classList.add("dark-modal-close-icon")):(a.classList.remove("dark-book-title"),t.classList.remove("dark-book-author"),d.classList.remove("dark-book-text"),r.classList.remove("dark-amazon-icon"),c.classList.remove("dark-apple-books-icon"),e.classList.remove("dark-modal"),l.classList.remove("dark-modal-btn"),n.classList.remove("dark-modal-btn"),i.classList.remove("dark-modal-remove-text"),g.classList.remove("dark-modal-close-icon"))}const s={modalCloseBtn:document.querySelector(".modal-close-btn"),modalAmazonIcon:document.querySelector(".amazon-icon"),modalAppleBooksIcon:document.querySelector(".apple-books-icon"),modalAddBtn:document.querySelector(".js-add-btn"),modalRemoveBtn:document.querySelector(".js-remove-btn"),modalRemoveText:document.querySelector(".modal-remove-text"),modalBackdrop:document.querySelector(".modal-backdrop"),modalCard:document.querySelector(".modal-card"),modal:document.querySelector(".add-modal"),heroList:document.querySelector(".hero-list")};function D(){s.modalBackdrop.classList.remove("is-open"),window.removeEventListener("keydown",h),document.body.style.overflow=""}function R(o){o.target===o.currentTarget&&(s.modalBackdrop.classList.remove("is-open"),window.removeEventListener("keydown",h),document.body.style.overflow="")}function h(o){o.key==="Escape"&&(s.modalBackdrop.classList.remove("is-open"),window.removeEventListener("keydown",h),document.body.style.overflow="")}function z({book_image:o,title:e,author:a,description:t,buy_links:d}){const[r,c]=d,l=r.url,n=c.url,i=` <img src="${o}" alt="${e}" class="image" />
        <div class="card-text">
          <h3 class="book-title">${e}</h3>
          <p class="book-author">${a}</p>
          <p class="book-text">
            ${t}
          </p>
          <div class="modal-icons">
            <a target="_blank" href="${l}">
              <img
                src="${q}"
                class="amazon-icon"
                alt="Amazon"
                width="62"
                height="19"
              />
            </a>
            <a target="_blank" href="${n}">
              <img
                src="${E}"
                class="apple-books-icon"
                alt="Apple books"
                width="33"
                height="32"
              />
            </a>
          </div>
        </div>`;s.modalCard.innerHTML=i}async function w(o){try{return(await k.get(`https://books-backend.p.goit.global/books/${o}`)).data}catch(e){throw console.error("Error fetching book data:",e),e}}function y(o){return JSON.parse(localStorage.getItem(o))||[]}function B(o,e){localStorage.setItem(o,JSON.stringify(e))}s.modalCloseBtn.addEventListener("click",D);s.modalBackdrop.addEventListener("click",R);s.modalAddBtn.addEventListener("click",_);function _(){w(u).then(o=>{const e=y(m);e.some(t=>t._id===o._id)||(e.push(o),B(m,e)),L()}).catch(o=>console.log(o))}s.modalRemoveBtn.addEventListener("click",j);const m="booksData";function j(){const e=y(m).filter(a=>a._id!==u);B(m,e),L()}s.heroList.addEventListener("click",F);let u=null;async function F(o){H(),window.addEventListener("keydown",h);const e=o.target.nodeName;if(e!=="IMG"&&e!=="H3"&&e!=="P"&&e!=="LI")return;s.modalBackdrop.classList.add("is-open"),u=o.target.closest("li").dataset.cardid,await w(u).then(t=>{z(t),L()}).catch(t=>console.log(t)),document.body.style.overflow="hidden",I()}function H(){y(m).some(({_id:e})=>{e===u?(s.modalAddBtn.classList.remove("visually-hidden"),s.modalRemoveBtn.classList.add("visually-hidden"),s.modalRemoveText.classList.add("visually-hidden")):(s.modalAddBtn.classList.add("visually-hidden"),s.modalRemoveBtn.classList.remove("visually-hidden"),s.modalRemoveText.classList.remove("visually-hidden"))})}function L(){y(m).some(({_id:a})=>a===u)?(s.modalAddBtn.classList.add("visually-hidden"),s.modalRemoveBtn.classList.remove("visually-hidden"),s.modalRemoveText.classList.remove("visually-hidden")):(s.modalAddBtn.classList.remove("visually-hidden"),s.modalRemoveBtn.classList.add("visually-hidden"),s.modalRemoveText.classList.add("visually-hidden"))}const p=document.querySelector(".btn-ring");function N(){window.addEventListener("scroll",()=>{window.scrollY>250||document.documentElement.scrollTop>250?O():U()}),p.onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}function O(){p.classList.remove("btn-ring-hidden")}function U(){p.classList.add("btn-ring-hidden")}N();
