import{b as S,c as I}from"./Apple books-7445b324.js";function D(){const t=document.getElementById("pagination-numbers"),o=document.getElementById("paginated-list").querySelectorAll("li"),i=document.getElementById("next-button"),l=document.getElementById("prev-button"),a=3,p=Math.ceil(o.length/a);let r=1;const u=e=>{e.classList.add("disabled"),e.setAttribute("disabled",!0)},A=e=>{e.classList.remove("disabled"),e.removeAttribute("disabled")},L=()=>{r===1?u(l):A(l),p===r?u(i):A(i)},v=()=>{document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==r&&e.classList.add("active")})},y=e=>{const n=document.createElement("button");n.className="pagination-number",n.innerHTML=e,n.setAttribute("page-index",e),n.textContent=e,t.appendChild(n)},E=()=>{for(let e=1;e<=p;e++)y(e)},d=e=>{r=e,v(),L();const n=(e-1)*a,B=e*a;o.forEach((m,b)=>{m.classList.add("hidden"),m.classList.remove("visible"),b>=n&&b<B&&(m.classList.remove("hidden"),m.classList.add("visible"))})};window.addEventListener("load",()=>{E(),d(1),l.addEventListener("click",()=>{d(r-1)}),i.addEventListener("click",()=>{d(r+1)}),document.querySelectorAll(".pagination-number").forEach(e=>{const n=Number(e.getAttribute("page-index"));n&&e.addEventListener("click",()=>{d(n)})})})}const q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADCSURBVHgBrVLBDcIwDHQQf8IEZAPoJrBBmaCrMAojsAEwAWUCYIJwrlzJhLip1J50iuVeLhenRBPhcs0Y4w7LPmmfnXO3VLugORIYJ5bQJdIJPNiM2NiI9hdI4cFXaTdrWGt9jKqueyHXOc2gO9YHuAED11bK9BXe4IpseNEMGqzJRgBb3VhmDPoB8U/zkfpCBlKDp5xCeOOD6h9l9cq0Q+4KgWxsqXCFE3jl6UsaDR5uDVZmAsRuRXCnf7BhJZr58AVKj1zad4nIbgAAAABJRU5ErkJggg==",k=document.getElementById("theme");function N(){const t=document.querySelector(".hero-title"),s=document.querySelector(".sidebar");t.textContent==="Shopping List"&&(s.style.display="none")}N();const c=document.querySelector(".shopping-list"),R=localStorage.getItem("booksData"),g=C();function C(){let t;try{return t=JSON.parse(R),t}catch(s){console.error("Error:",s)}}function J(t){const s=t.map(o=>`<li class="sl-item" data-bookId="${o._id}">
			<button class="sl-remove">
				<img src="${q}" class="sl-remove-img">
			</button>
			<img class="sl-img" src="${o.book_image}" alt="${o.description}">
			<div class="sl-info">
				<h3 class="sl-book-title">${o.title}</h3>
				<p class="sl-book-category">${o.list_name}</p>
				<p class="sl-book-description">${o.description}</p>
				<div class="sl-sell-box">
					<p class="sl-book-author">${o.author}</p>
					<div class="sl-book-links">
						<a class="sl-book-link-amazon" href="${o.buy_links[0].url}">
							<img class="sl-book-link-amazon-img" src="${S}">
						</a>
						<a class="sl-book-link-ab" href="${o.buy_links[1].url}">
							<img class="sl-book-link-ab-img" src="${I}">
						</a>
					</div>
				</div>
			</div>
		</li>`).join(`

`);c.innerHTML=s}function h(){const t=`<div class="empty-page-box">
		<p class="empty-page-text">This page is empty, add some books and proceed to order.</p>
		<img class="empty-page-img" src="./img/png/IMG_96061.png" alt="This page is empty, add some books and proceed to order">
	</div>`;c.innerHTML=t}function w(t){try{t!==null&&t.length!==0?Array.isArray(g)?(J(g),f()):console.error(error):h()}catch(s){console.error("Помилка при розпарсЮванні даних:",s)}}w(g);c.addEventListener("click",t=>{const s=t.target.closest(".sl-remove");if(s){const o=s.closest(".sl-item");o.remove();const i=o.dataset.bookid;T(l=>x(l,i))}});function x(t,s){return t.filter(i=>i._id!==s)}function T(t){const s=JSON.parse(localStorage.getItem("booksData"))||[],o=t(s);localStorage.setItem("booksData",JSON.stringify(o))}c.getElementsByTagName("li").length>3?D():c.getElementsByTagName("li").length<=3?document.querySelectorAll(".pagination-button").forEach(s=>{s.style.display="none"}):h();k.addEventListener("click",f);function f(){const t=document.querySelector(".shopping-list-title"),s=document.querySelectorAll(".sl-book-title"),o=document.querySelectorAll(".sl-book-description"),i=document.querySelectorAll(".sl-book-link-amazon-img"),l=document.querySelectorAll(".sl-book-link-ab-img");k.checked?(t.classList.add("shopping-list-title-dark"),s.forEach(a=>{a.classList.add("sl-book-title-dark")}),console.log(s),o.forEach(a=>{a.classList.add("sl-book-description-dark")}),i.forEach(a=>{a.classList.add("sl-book-link-amazon-img-dark")}),l.forEach(a=>{a.classList.add("sl-book-link-ab-img-dark")})):(t.classList.remove("shopping-list-title-dark"),s.forEach(a=>{a.classList.remove("sl-book-title-dark")}),o.forEach(a=>{a.classList.remove("sl-book-description-dark")}),i.forEach(a=>{a.classList.remove("sl-book-link-amazon-img-dark")}),l.forEach(a=>{a.classList.remove("sl-book-link-ab-img-dark")}))}
