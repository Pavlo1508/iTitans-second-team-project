import{a as k,b as E,c as T}from"./dark-dea3505a.js";const L=document.querySelector("#theme");let v=null;async function A(){if(!v)try{v=(await k.get("https://books-backend.p.goit.global/books/top-books")).data}catch(e){throw console.error(e),e}return v}function M(e){const{_id:o,author:t,book_image:a,title:c}=e;return`
    <li class="hero-list-card" data-cardID="${o}">
    <div class='card-image-cont'>
        <img class="hero-card-image" src="${a}" alt="${c}" />
        <p class='hidden-text'>Quick View</p>
        </div>
        <div>
          <h3 class='book-title'>${c}</h3>
          <p class='book-author'>${t}</p>
        </div>
    </li>
  `}function $(e){for(let o=e.length-1;o>0;o--){const t=Math.floor(Math.random()*(o+1));[e[o],e[t]]=[e[t],e[o]]}return e}window.addEventListener("resize",()=>{document.querySelector(".hero-list").innerHTML="",document.querySelector(".hero-title").innerHTML='<h1 class="hero-title">Best Sellers <span class="hero-accent">Books</span></h1>',S()});async function S(){try{let e=await A();e=$(e);const o=document.querySelector(".hero-list");let t=4,a=1;window.innerWidth>=768&&window.innerWidth<1440?(t=4,a=3):window.innerWidth>=1440&&(t=3,a=5);for(let r=0;r<t;r+=1){const n=e[r],l=n.books.slice(0,a).map(M).join(""),i=`
        <li class="hero-list-wrapper">
          <h2 class="hero-card-title">${n.list_name}</h2>
          <ul class="hero-card-list">
            ${l}
          </ul>
          <button class='card-button' type='button' data-category="${n.list_name}">See More</button>
        </li>
      `;o.insertAdjacentHTML("beforeend",i)}document.querySelectorAll(".card-button").forEach(r=>{r.addEventListener("click",async()=>{const n=r.dataset.category;try{const l=(await k.get(`https://books-backend.p.goit.global/books/category?category=${n}`)).data;w(l,n)}catch(d){console.error("Error fetching category books:",d)}})}),document.getElementById("categories-list").querySelectorAll(".category-item").forEach(r=>{r.addEventListener("click",async()=>{const n=r.dataset.text;try{const l=(await k.get(`https://books-backend.p.goit.global/books/category?category=${n}`)).data;w(l,n),I()}catch(d){console.error("Error fetching category books:",d)}})})}catch(e){console.error("Error rendering book cards:",e)}}function x(e){const{_id:o,author:t,book_image:a,title:c}=e;return`
    <li class="hero-list-card category-card" data-cardID="${o}">
    <div class='card-image-cont'>
        <img class="hero-card-image" src="${a}" alt="${c}" />
        <p class='hidden-text'>Quick View</p>
        </div>
        <div>
          <h3 class='book-title'>${c}</h3>
          <p class='book-author'>${t}</p>
        </div>
    </li>
  `}function w(e,o){const t=document.querySelector(".hero-list");t.classList.add("category-list"),t.innerHTML="",e.forEach(a=>{const c=x(a);t.insertAdjacentHTML("beforeend",c)}),document.querySelector(".hero-title").textContent=o}document.addEventListener("DOMContentLoaded",()=>{S()});const C=document.querySelector(".first-categorie-item");C.addEventListener("click",()=>{location.reload()});L.addEventListener("click",()=>{const e=document.querySelector(".hero-title"),o=document.querySelectorAll(".book-title"),t=document.querySelectorAll(".card-button");L.checked?(e.classList.add("dark-hero"),o.forEach(a=>{a.classList.add("dark-hero")}),t.forEach(a=>{a.classList.add("dark-hero")})):(e.classList.remove("dark-hero"),o.forEach(a=>{a.classList.remove("dark-hero")}),t.forEach(a=>{a.classList.remove("dark-hero")}))});function I(){const e=document.querySelector(".hero-title"),o=document.querySelectorAll(".book-title"),t=document.querySelectorAll(".card-button");L.checked?(e.classList.add("dark-hero"),o.forEach(a=>{a.classList.add("dark-hero")}),t.forEach(a=>{a.classList.add("dark-hero")})):(e.classList.remove("dark-hero"),o.forEach(a=>{a.classList.remove("dark-hero")}),t.forEach(a=>{a.classList.remove("dark-hero")}))}function R(){const e=document.querySelector("#theme"),o=document.querySelector(".add-modal"),t=o.querySelector(".book-title"),a=o.querySelector(".book-author"),c=o.querySelector(".book-text"),r=o.querySelector(".amazon-icon"),n=o.querySelector(".apple-books-icon"),d=document.querySelector(".js-add-btn"),l=document.querySelector(".js-remove-btn"),i=document.querySelector(".modal-remove-text"),g=document.querySelector(".modal-close-icon");e.checked?(t.classList.add("dark-book-title"),a.classList.add("dark-book-author"),c.classList.add("dark-book-text"),r.classList.add("dark-amazon-icon"),n.classList.add("dark-apple-books-icon"),o.classList.add("dark-modal"),d.classList.add("dark-modal-btn"),l.classList.add("dark-modal-btn"),i.classList.add("dark-modal-remove-text"),g.classList.add("dark-modal-close-icon")):(t.classList.remove("dark-book-title"),a.classList.remove("dark-book-author"),c.classList.remove("dark-book-text"),r.classList.remove("dark-amazon-icon"),n.classList.remove("dark-apple-books-icon"),o.classList.remove("dark-modal"),d.classList.remove("dark-modal-btn"),l.classList.remove("dark-modal-btn"),i.classList.remove("dark-modal-remove-text"),g.classList.remove("dark-modal-close-icon"))}const s={modalCloseBtn:document.querySelector(".modal-close-btn"),modalAmazonIcon:document.querySelector(".amazon-icon"),modalAppleBooksIcon:document.querySelector(".apple-books-icon"),modalAddBtn:document.querySelector(".js-add-btn"),modalRemoveBtn:document.querySelector(".js-remove-btn"),modalRemoveText:document.querySelector(".modal-remove-text"),modalBackdrop:document.querySelector(".modal-backdrop"),modalCard:document.querySelector(".modal-card"),modal:document.querySelector(".add-modal"),heroList:document.querySelector(".hero-list")};function D(){s.modalBackdrop.classList.remove("is-open"),window.removeEventListener("keydown",y),document.body.style.overflow=""}function H(e){e.target===e.currentTarget&&(s.modalBackdrop.classList.remove("is-open"),window.removeEventListener("keydown",y),document.body.style.overflow="")}function y(e){e.key==="Escape"&&(s.modalBackdrop.classList.remove("is-open"),window.removeEventListener("keydown",y),document.body.style.overflow="")}function _({book_image:e,title:o,author:t,description:a,buy_links:c}){const[r,n]=c,d=r.url,l=n.url,i=` <img src="${e}" alt="${o}" class="image" />
        <div class="card-text">
          <h3 class="book-title">${o}</h3>
          <p class="book-author">${t}</p>
          <p class="book-text">
            ${a}
          </p>
          <div class="modal-icons">
            <a target="_blank" href="${d}">
              <img
                src="${E}"
                class="amazon-icon"
                alt="Amazon"
                width="62"
                height="19"
              />
            </a>
            <a target="_blank" href="${l}">
              <img
                src="${T}"
                class="apple-books-icon"
                alt="Apple books"
                width="33"
                height="32"
              />
            </a>
          </div>
        </div>`;s.modalCard.innerHTML=i}async function B(e){try{return(await k.get(`https://books-backend.p.goit.global/books/${e}`)).data}catch(o){throw console.error("Error fetching book data:",o),o}}function p(e){return JSON.parse(localStorage.getItem(e))||[]}function q(e,o){localStorage.setItem(e,JSON.stringify(o))}s.modalCloseBtn.addEventListener("click",D);s.modalBackdrop.addEventListener("click",H);s.modalAddBtn.addEventListener("click",z);function z(){B(u).then(e=>{const o=p(m);o.some(a=>a._id===e._id)||(o.push(e),q(m,o)),f()}).catch(e=>console.log(e))}s.modalRemoveBtn.addEventListener("click",F);const m="booksData";function F(){const o=p(m).filter(t=>t._id!==u);q(m,o),f()}s.heroList.addEventListener("click",j);let u=null;async function j(e){O(),window.addEventListener("keydown",y);const o=e.target.nodeName;if(o!=="IMG"&&o!=="H3"&&o!=="P"&&o!=="LI")return;s.modalBackdrop.classList.add("is-open"),u=e.target.closest("li").dataset.cardid,await B(u).then(a=>{_(a),f()}).catch(a=>console.log(a)),document.body.style.overflow="hidden",R()}function O(){p(m).some(({_id:o})=>{o===u?(s.modalAddBtn.classList.remove("visually-hidden"),s.modalRemoveBtn.classList.add("visually-hidden"),s.modalRemoveText.classList.add("visually-hidden")):(s.modalAddBtn.classList.add("visually-hidden"),s.modalRemoveBtn.classList.remove("visually-hidden"),s.modalRemoveText.classList.remove("visually-hidden"))})}function f(){p(m).some(({_id:t})=>t===u)?(s.modalAddBtn.classList.add("visually-hidden"),s.modalRemoveBtn.classList.remove("visually-hidden"),s.modalRemoveText.classList.remove("visually-hidden")):(s.modalAddBtn.classList.remove("visually-hidden"),s.modalRemoveBtn.classList.add("visually-hidden"),s.modalRemoveText.classList.add("visually-hidden"))}function N(){const e=document.querySelector(".btn-ring");document.querySelector(".arrow-to-up use").setAttribute("xlink:href","../img/sprite.svg#icon-material-symbols_arrow-back-ios-rounded");function t(){e.classList.remove("btn-ring-hidden")}function a(){e.classList.add("btn-ring-hidden")}window.addEventListener("scroll",()=>{window.scrollY>250||document.documentElement.scrollTop>250?t():a()}),e.onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}N();function b(){let e=document.getElementById("loader-overlay");e&&(e.style.display="flex")}function h(){let e=document.getElementById("loader-overlay");e&&(e.style.display="none")}function U(){let e=XMLHttpRequest.prototype.open,o=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(){let t=this;return t.addEventListener("loadstart",function(){b()}),t.addEventListener("loadend",function(){h()}),e.apply(this,arguments)},XMLHttpRequest.prototype.send=function(){let t=this;return t.addEventListener("loadstart",function(){b()}),t.addEventListener("loadend",function(){h()}),o.apply(this,arguments)}}function X(){let e=window.fetch;window.fetch=function(){return b(),e.apply(this,arguments).then(function(o){return h(),o}).catch(function(o){throw h(),o})}}U();X();