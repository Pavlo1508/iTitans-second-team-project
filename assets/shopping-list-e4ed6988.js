import{b as m,c as p}from"./dark-dea3505a.js";const k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADCSURBVHgBrVLBDcIwDHQQf8IEZAPoJrBBmaCrMAojsAEwAWUCYIJwrlzJhLip1J50iuVeLhenRBPhcs0Y4w7LPmmfnXO3VLugORIYJ5bQJdIJPNiM2NiI9hdI4cFXaTdrWGt9jKqueyHXOc2gO9YHuAED11bK9BXe4IpseNEMGqzJRgBb3VhmDPoB8U/zkfpCBlKDp5xCeOOD6h9l9cq0Q+4KgWxsqXCFE3jl6UsaDR5uDVZmAsRuRXCnf7BhJZr58AVKj1zad4nIbgAAAABJRU5ErkJggg==",A="/iTitans-second-team-project/assets/IMG_96061-729edc7b.png",c=document.getElementById("theme");function g(){const s=document.querySelector(".hero-title"),o=document.querySelector(".sidebar");s.textContent==="Shopping List"&&(o.style.display="none")}g();const i=document.querySelector(".shopping-list"),u=localStorage.getItem("booksData"),r=b();function b(){let s;try{return s=JSON.parse(u),s}catch(o){return console.error("Error:",o),null}}function h(s){const o=s.map(e=>`<li class="sl-item" data-bookId="${e._id}">
			<button class="sl-remove">
				<img src="${k}" class="sl-remove-img">
			</button>
			<img class="sl-img" src="${e.book_image}" alt="${e.description}">
			<div class="sl-info">
				<h3 class="sl-book-title">${e.title}</h3>
				<p class="sl-book-category">${e.list_name}</p>
				<p class="sl-book-description">${e.description}</p>
				<div class="sl-sell-box">
					<p class="sl-book-author">${e.author}</p>
					<div class="sl-book-links">
						<a class="sl-book-link-amazon" href="${e.buy_links[0].url}">
							<img class="sl-book-link-amazon-img" src="${m}">
						</a>
						<a class="sl-book-link-ab" href="${e.buy_links[1].url}">
							<img class="sl-book-link-ab-img" src="${p}">
						</a>
					</div>
				</div>
			</div>
		</li>`).join(`

`);i.innerHTML=o}function n(){const s=`<li class="empty-page-box">
		<p class="empty-page-text">This page is empty, add some books and proceed to order.</p>
		<img class="empty-page-img" src="${A}" alt="This page is empty, add some books and proceed to order">
	</li>`;i.innerHTML=s}function f(s){try{s!==null&&s.length!==0?Array.isArray(r)?(h(r),d()):console.error(error):n()}catch(o){console.error("Помилка при розпарсЮванні даних:",o)}}f(r);i.addEventListener("click",s=>{const o=s.target.closest(".sl-remove");if(o){const e=o.closest(".sl-item");e.remove();const a=e.dataset.bookid;S(l=>y(l,a)),i.getElementsByTagName("li").length===0&&n()}});function y(s,o){return s.filter(a=>a._id!==o)}function S(s){const o=JSON.parse(localStorage.getItem("booksData"))||[],e=s(o);localStorage.setItem("booksData",JSON.stringify(e))}c.addEventListener("click",d);function d(){const s=document.querySelector(".shopping-list-title"),o=document.querySelectorAll(".sl-book-title"),e=document.querySelectorAll(".sl-book-description"),a=document.querySelectorAll(".sl-book-link-amazon-img"),l=document.querySelectorAll(".sl-book-link-ab-img");c.checked?(s.classList.add("shopping-list-title-dark"),o.forEach(t=>{t.classList.add("sl-book-title-dark")}),e.forEach(t=>{t.classList.add("sl-book-description-dark")}),a.forEach(t=>{t.classList.add("sl-book-link-amazon-img-dark")}),l.forEach(t=>{t.classList.add("sl-book-link-ab-img-dark")})):(s.classList.remove("shopping-list-title-dark"),o.forEach(t=>{t.classList.remove("sl-book-title-dark")}),e.forEach(t=>{t.classList.remove("sl-book-description-dark")}),a.forEach(t=>{t.classList.remove("sl-book-link-amazon-img-dark")}),l.forEach(t=>{t.classList.remove("sl-book-link-ab-img-dark")}))}
