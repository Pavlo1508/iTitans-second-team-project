import{a as k,b as S,c as q}from"./Apple books-a5167c5e.js";let v=null;async function E(){if(!v)try{v=(await k.get("https://books-backend.p.goit.global/books/top-books")).data}catch(o){throw console.error(o),o}return v}function $(o){const{_id:e,author:t,book_image:s,title:d}=o;return`
    <li class="hero-list-card" data-cardID="${e}">
    <div class='card-image-cont'>
        <img class="hero-card-image" src="${s}" alt="${d}" />
        <p class='hidden-text'>Quick View</p>
        </div>
        <div>
          <h3 class='book-title'>${d}</h3>
          <p class='book-author'>${t}</p>
        </div>
    </li>
  `}function A(o){for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[o[e],o[t]]=[o[t],o[e]]}return o}window.addEventListener("resize",()=>{document.querySelector(".hero-list").innerHTML="",document.querySelector(".hero-title").innerHTML='<h1 class="hero-title">Best Sellers <span class="hero-accent">Books</span></h1>',f()});async function f(){try{let o=await E();o=A(o);const e=document.querySelector(".hero-list");let t=4,s=1;window.innerWidth>=768&&window.innerWidth<1440?(t=4,s=3):window.innerWidth>=1440&&(t=3,s=5);for(let r=0;r<t;r+=1){const c=o[r],l=c.books.slice(0,s).map($).join(""),i=`
        <li class="hero-list-wrapper">
          <h2 class="hero-card-title">${c.list_name}</h2>
          <ul class="hero-card-list">
            ${l}
          </ul>
          <button class='card-button' type='button' data-category="${c.list_name}">See More</button>
        </li>
      `;e.insertAdjacentHTML("beforeend",i)}document.querySelectorAll(".card-button").forEach(r=>{r.addEventListener("click",async()=>{const c=r.dataset.category;try{const l=(await k.get(`https://books-backend.p.goit.global/books/category?category=${c}`)).data;L(l,c)}catch(n){console.error("Error fetching category books:",n)}})}),document.getElementById("categories-list").querySelectorAll(".category-item").forEach(r=>{r.addEventListener("click",async()=>{const c=r.dataset.text;try{const l=(await k.get(`https://books-backend.p.goit.global/books/category?category=${c}`)).data;L(l,c)}catch(n){console.error("Error fetching category books:",n)}})})}catch(o){console.error("Error rendering book cards:",o)}}function T(o){const{_id:e,author:t,book_image:s,title:d}=o;return`
    <li class="hero-list-card category-card" data-cardID="${e}">
    <div class='card-image-cont'>
        <img class="hero-card-image" src="${s}" alt="${d}" />
        <p class='hidden-text'>Quick View</p>
        </div>
        <div>
          <h3 class='book-title'>${d}</h3>
          <p class='book-author'>${t}</p>
        </div>
    </li>
  `}function L(o,e){const t=document.querySelector(".hero-list");t.classList.add("category-list"),t.innerHTML="",o.forEach(s=>{const d=T(s);t.insertAdjacentHTML("beforeend",d)}),document.querySelector(".hero-title").textContent=e}document.addEventListener("DOMContentLoaded",()=>{f()});const x=document.querySelector(".first-categorie-item");x.addEventListener("click",()=>{location.reload()});function C(){const o=document.querySelector("#theme"),e=document.querySelector(".add-modal"),t=e.querySelector(".book-title"),s=e.querySelector(".book-author"),d=e.querySelector(".book-text"),r=e.querySelector(".amazon-icon"),c=e.querySelector(".apple-books-icon"),n=document.querySelector(".js-add-btn"),l=document.querySelector(".js-remove-btn"),i=document.querySelector(".modal-remove-text"),g=document.querySelector(".modal-close-icon");o.checked?(t.classList.add("dark-book-title"),s.classList.add("dark-book-author"),d.classList.add("dark-book-text"),r.classList.add("dark-amazon-icon"),c.classList.add("dark-apple-books-icon"),e.classList.add("dark-modal"),n.classList.add("dark-modal-btn"),l.classList.add("dark-modal-btn"),i.classList.add("dark-modal-remove-text"),g.classList.add("dark-modal-close-icon")):(t.classList.remove("dark-book-title"),s.classList.remove("dark-book-author"),d.classList.remove("dark-book-text"),r.classList.remove("dark-amazon-icon"),c.classList.remove("dark-apple-books-icon"),e.classList.remove("dark-modal"),n.classList.remove("dark-modal-btn"),l.classList.remove("dark-modal-btn"),i.classList.remove("dark-modal-remove-text"),g.classList.remove("dark-modal-close-icon"))}const a={modalCloseBtn:document.querySelector(".modal-close-btn"),modalAmazonIcon:document.querySelector(".amazon-icon"),modalAppleBooksIcon:document.querySelector(".apple-books-icon"),modalAddBtn:document.querySelector(".js-add-btn"),modalRemoveBtn:document.querySelector(".js-remove-btn"),modalRemoveText:document.querySelector(".modal-remove-text"),modalBackdrop:document.querySelector(".modal-backdrop"),modalCard:document.querySelector(".modal-card"),modal:document.querySelector(".add-modal"),heroList:document.querySelector(".hero-list")};function M(){a.modalBackdrop.classList.remove("is-open"),window.removeEventListener("keydown",h),document.body.style.overflow=""}function I(o){o.target===o.currentTarget&&(a.modalBackdrop.classList.remove("is-open"),window.removeEventListener("keydown",h),document.body.style.overflow="")}function h(o){o.key==="Escape"&&(a.modalBackdrop.classList.remove("is-open"),window.removeEventListener("keydown",h),document.body.style.overflow="")}function R({book_image:o,title:e,author:t,description:s,buy_links:d}){const[r,c]=d,n=r.url,l=c.url,i=` <img src="${o}" alt="${e}" class="image" />
        <div class="card-text">
          <h3 class="book-title">${e}</h3>
          <p class="book-author">${t}</p>
          <p class="book-text">
            ${s}
          </p>
          <div class="modal-icons">
            <a target="_blank" href="${n}">
              <img
                src="${S}"
                class="amazon-icon"
                alt="Amazon"
                width="62"
                height="19"
              />
            </a>
            <a target="_blank" href="${l}">
              <img
                src="${q}"
                class="apple-books-icon"
                alt="Apple books"
                width="33"
                height="32"
              />
            </a>
          </div>
        </div>`;a.modalCard.innerHTML=i}async function w(o){try{return(await k.get(`https://books-backend.p.goit.global/books/${o}`)).data}catch(e){throw console.error("Error fetching book data:",e),e}}function y(o){return JSON.parse(localStorage.getItem(o))||[]}function B(o,e){localStorage.setItem(o,JSON.stringify(e))}a.modalCloseBtn.addEventListener("click",M);a.modalBackdrop.addEventListener("click",I);a.modalAddBtn.addEventListener("click",D);function D(){w(u).then(o=>{const e=y(m);e.some(s=>s._id===o._id)||(e.push(o),B(m,e)),b()}).catch(o=>console.log(o))}a.modalRemoveBtn.addEventListener("click",z);const m="booksData";function z(){const e=y(m).filter(t=>t._id!==u);B(m,e),b()}a.heroList.addEventListener("click",_);let u=null;async function _(o){j(),window.addEventListener("keydown",h);const e=o.target.nodeName;if(e!=="IMG"&&e!=="H3"&&e!=="P"&&e!=="LI")return;a.modalBackdrop.classList.add("is-open"),u=o.target.closest("li").dataset.cardid,await w(u).then(s=>{R(s),b()}).catch(s=>console.log(s)),document.body.style.overflow="hidden",C()}function j(){y(m).some(({_id:e})=>{e===u?(a.modalAddBtn.classList.remove("visually-hidden"),a.modalRemoveBtn.classList.add("visually-hidden"),a.modalRemoveText.classList.add("visually-hidden")):(a.modalAddBtn.classList.add("visually-hidden"),a.modalRemoveBtn.classList.remove("visually-hidden"),a.modalRemoveText.classList.remove("visually-hidden"))})}function b(){y(m).some(({_id:t})=>t===u)?(a.modalAddBtn.classList.add("visually-hidden"),a.modalRemoveBtn.classList.remove("visually-hidden"),a.modalRemoveText.classList.remove("visually-hidden")):(a.modalAddBtn.classList.remove("visually-hidden"),a.modalRemoveBtn.classList.add("visually-hidden"),a.modalRemoveText.classList.add("visually-hidden"))}const p=document.querySelector(".btn-ring");function F(){window.addEventListener("scroll",()=>{window.scrollY>250||document.documentElement.scrollTop>250?H():N()}),p.onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}function H(){p.classList.remove("btn-ring-hidden")}function N(){p.classList.add("btn-ring-hidden")}F();
