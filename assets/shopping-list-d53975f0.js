import"./modal-bf86b0ae.js";function r(){const e=document.querySelector(".hero-title"),t=document.querySelector(".sidebar");e.textContent==="Shopping List"&&(t.style.display="none")}r();const l=document.querySelector(".shopping-list"),n=localStorage.getItem("booksData"),a=c();function c(){let e;try{return e=JSON.parse(n),e}catch(t){console.error("Error:",t)}}function p(e){const t=e.map(s=>`<li class="sl-item" data-bookId="${s._id}">
			<button class="sl-remove">
				<img src="./img/png/dump.png" class="sl-remove-img">
			</button>
			<img class="sl-img" src="${s.book_image}" alt="${s.description}">
			<div class="sl-info">
				<h3 class="sl-book-title">${s.title}</h3>
				<p class="sl-book-category">${s.list_name}</p>
				<p class="sl-book-description">${s.description}</p>
				<div class="sl-sell-box">
					<p class="sl-book-author">${s.author}</p>
					<div class="sl-book-links">
						<a class="sl-book-link-amazon" href="${s.buy_links[0].url}">
							<img class="sl-book-link-amazon-img" src="./img/png/amazon.png">
						</a>
						<a class="sl-book-link-ab" href="${s.buy_links[1].url}">
							<img class="sl-book-link-ab-img" src="./img/png/Apple books.png">
						</a>
					</div>
				</div>
			</div>
		</li>`).join(`

`);l.innerHTML=t}function m(){const e=`<div class="empty-page-box">
		<p class="empty-page-text">This page is empty, add some books and proceed to order.</p>
		<img class="empty-page-img" src="./img/png/IMG_96061.png" alt="This page is empty, add some books and proceed to order">
	</div>`;l.innerHTML=e}function d(e){try{e!==null&&e.length!==0?Array.isArray(a)?p(a):console.error(error):m()}catch(t){console.error("Помилка при розпарсЮванні даних:",t)}}d(a);l.addEventListener("click",e=>{const t=e.target.closest(".sl-remove");if(t){const s=t.closest(".sl-item");s.remove();const o=s.dataset.bookid;u(i=>g(i,o))}});function g(e,t){return e.filter(o=>o._id!==t)}function u(e){const t=JSON.parse(localStorage.getItem("booksData"))||[],s=e(t);localStorage.setItem("booksData",JSON.stringify(s))}
