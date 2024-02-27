import{a as k}from"./sidebar-4fb000f0.js";let p=null;async function B(){if(!p)try{p=(await k.get("https://books-backend.p.goit.global/books/top-books")).data}catch(o){throw console.error(o),o}return p}function w(o){const{_id:e,author:t,book_image:s,title:c}=o;return`
    <li class="hero-list-card" data-cardID="${e}">
    <div class='card-image-cont'>
        <img class="hero-card-image" src="${s}" alt="${c}" />
        <p class='hidden-text'>Quick View</p>
        </div>
        <div>
          <h3 class='book-title'>${c}</h3>
          <p class='book-author'>${t}</p>
        </div>
    </li>
  `}function q(o){for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[o[e],o[t]]=[o[t],o[e]]}return o}async function L(){try{let o=await B();o=q(o);const e=document.querySelector(".hero-list");let t=4,s=1;window.innerWidth>=768&&window.innerWidth<1440?(t=4,s=3):window.innerWidth>=1440&&(t=3,s=5);for(let r=0;r<t;r+=1){const d=o[r],l=d.books.slice(0,s).map(w).join(""),i=`
        <li class="hero-list-wrapper">
          <h2 class="hero-card-title">${d.list_name}</h2>
          <ul class="hero-card-list">
            ${l}
          </ul>
          <button class='card-button' type='button' data-category="${d.list_name}">See More</button>
        </li>
      `;e.insertAdjacentHTML("beforeend",i)}document.querySelectorAll(".card-button").forEach(r=>{r.addEventListener("click",async()=>{const d=r.dataset.category;try{const l=(await k.get(`https://books-backend.p.goit.global/books/category?category=${d}`)).data;g(l,d)}catch(n){console.error("Error fetching category books:",n)}})}),document.getElementById("categories-list").querySelectorAll(".category-item").forEach(r=>{r.addEventListener("click",async()=>{const d=r.dataset.text;try{const l=(await k.get(`https://books-backend.p.goit.global/books/category?category=${d}`)).data;g(l,d)}catch(n){console.error("Error fetching category books:",n)}})})}catch(o){console.error("Error rendering book cards:",o)}}window.addEventListener("resize",()=>{document.querySelector(".hero-list").innerHTML="",document.querySelector(".hero-title").innerHTML='<h1 class="hero-title">Best Sellers <span class="hero-accent">Books</span></h1>',L()});function A(o){const{_id:e,author:t,book_image:s,title:c}=o;return`
    <li class="hero-list-card category-card" data-cardID="${e}">
    <div class='card-image-cont'>
        <img class="hero-card-image" src="${s}" alt="${c}" />
        <p class='hidden-text'>Quick View</p>
        </div>
        <div>
          <h3 class='book-title'>${c}</h3>
          <p class='book-author'>${t}</p>
        </div>
    </li>
  `}function g(o,e){const t=document.querySelector(".hero-list");t.classList.add("category-list"),t.innerHTML="",o.forEach(s=>{const c=A(s);t.insertAdjacentHTML("beforeend",c)}),document.querySelector(".hero-title").textContent=e}document.addEventListener("DOMContentLoaded",()=>{L()});function E(){const o=document.querySelector("#theme"),e=document.querySelector(".add-modal"),t=e.querySelector(".book-title"),s=e.querySelector(".book-author"),c=e.querySelector(".book-text"),r=e.querySelector(".amazon-icon"),d=e.querySelector(".apple-books-icon"),n=document.querySelector(".js-add-btn"),l=document.querySelector(".js-remove-btn"),i=document.querySelector(".modal-remove-text"),b=document.querySelector(".modal-close-icon");o.checked?(t.classList.add("dark-book-title"),s.classList.add("dark-book-author"),c.classList.add("dark-book-text"),r.classList.add("dark-amazon-icon"),d.classList.add("dark-apple-books-icon"),e.classList.add("dark-modal"),n.classList.add("dark-modal-btn"),l.classList.add("dark-modal-btn"),i.classList.add("dark-modal-remove-text"),b.classList.add("dark-modal-close-icon")):(t.classList.remove("dark-book-title"),s.classList.remove("dark-book-author"),c.classList.remove("dark-book-text"),r.classList.remove("dark-amazon-icon"),d.classList.remove("dark-apple-books-icon"),e.classList.remove("dark-modal"),n.classList.remove("dark-modal-btn"),l.classList.remove("dark-modal-btn"),i.classList.remove("dark-modal-remove-text"),b.classList.remove("dark-modal-close-icon"))}const a={modalCloseBtn:document.querySelector(".modal-close-btn"),modalAmazonIcon:document.querySelector(".amazon-icon"),modalAppleBooksIcon:document.querySelector(".apple-books-icon"),modalAddBtn:document.querySelector(".js-add-btn"),modalRemoveBtn:document.querySelector(".js-remove-btn"),modalRemoveText:document.querySelector(".modal-remove-text"),modalBackdrop:document.querySelector(".modal-backdrop"),modalCard:document.querySelector(".modal-card"),modal:document.querySelector(".add-modal"),heroList:document.querySelector(".hero-list")};function $(){a.modalBackdrop.classList.remove("is-open"),window.removeEventListener("keydown",h),document.body.style.overflow=""}function x(o){o.target===o.currentTarget&&(a.modalBackdrop.classList.remove("is-open"),window.removeEventListener("keydown",h),document.body.style.overflow="")}function h(o){o.key==="Escape"&&(a.modalBackdrop.classList.remove("is-open"),window.removeEventListener("keydown",h),document.body.style.overflow="")}function C({book_image:o,title:e,author:t,description:s,buy_links:c}){const[r,d]=c,n=r.url,l=d.url,i=` <img src="${o}" alt="${e}" class="image" />
        <div class="card-text">
          <h3 class="book-title">${e}</h3>
          <p class="book-author">${t}</p>
          <p class="book-text">
            ${s}
          </p>
          <div class="modal-icons">
            <a target="_blank" href="${n}">
              <img
                src="./img/png/amazon.png"
                class="amazon-icon"
                alt="Amazon"
                width="62"
                height="19"
              />
            </a>
            <a target="_blank" href="${l}">
              <img
                src="./img/png/Apple books.png"
                class="apple-books-icon"
                alt="Apple books"
                width="33"
                height="32"
              />
            </a>
          </div>
        </div>`;a.modalCard.innerHTML=i}async function f(o){try{return(await k.get(`https://books-backend.p.goit.global/books/${o}`)).data}catch(e){throw console.error("Error fetching book data:",e),e}}function y(o){return JSON.parse(localStorage.getItem(o))||[]}function S(o,e){localStorage.setItem(o,JSON.stringify(e))}a.modalCloseBtn.addEventListener("click",$);a.modalBackdrop.addEventListener("click",x);a.modalAddBtn.addEventListener("click",M);function M(){f(u).then(o=>{const e=y(m);e.some(s=>s._id===o._id)||(e.push(o),S(m,e)),v()}).catch(o=>console.log(o))}a.modalRemoveBtn.addEventListener("click",T);const m="booksData";function T(){const e=y(m).filter(t=>t._id!==u);S(m,e),v()}a.heroList.addEventListener("click",I);let u=null;async function I(o){R(),window.addEventListener("keydown",h);const e=o.target.nodeName;if(e!=="IMG"&&e!=="H3"&&e!=="P"&&e!=="LI")return;a.modalBackdrop.classList.add("is-open"),u=o.target.closest("li").dataset.cardid,await f(u).then(s=>{C(s),v()}).catch(s=>console.log(s)),document.body.style.overflow="hidden",E()}function R(){y(m).some(({_id:e})=>{e===u?(a.modalAddBtn.classList.remove("visually-hidden"),a.modalRemoveBtn.classList.add("visually-hidden"),a.modalRemoveText.classList.add("visually-hidden")):(a.modalAddBtn.classList.add("visually-hidden"),a.modalRemoveBtn.classList.remove("visually-hidden"),a.modalRemoveText.classList.remove("visually-hidden"))})}function v(){y(m).some(({_id:t})=>t===u)?(a.modalAddBtn.classList.add("visually-hidden"),a.modalRemoveBtn.classList.remove("visually-hidden"),a.modalRemoveText.classList.remove("visually-hidden")):(a.modalAddBtn.classList.remove("visually-hidden"),a.modalRemoveBtn.classList.add("visually-hidden"),a.modalRemoveText.classList.add("visually-hidden"))}
