import{b as k,c as E}from"./Apple books-7a556c96.js";function I(){const t=document.getElementById("pagination-numbers"),s=document.getElementById("paginated-list").querySelectorAll("li"),o=document.getElementById("next-button"),l=document.getElementById("prev-button"),m=3,p=Math.ceil(s.length/m);let i=1;const u=e=>{e.classList.add("disabled"),e.setAttribute("disabled",!0)},A=e=>{e.classList.remove("disabled"),e.removeAttribute("disabled")},h=()=>{i===1?u(l):A(l),p===i?u(o):A(o)},v=()=>{document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==i&&e.classList.add("active")})},y=e=>{const n=document.createElement("button");n.className="pagination-number",n.innerHTML=e,n.setAttribute("page-index",e),n.textContent=e,t.appendChild(n)},B=()=>{for(let e=1;e<=p;e++)y(e)},c=e=>{i=e,v(),h();const n=(e-1)*m,L=e*m;s.forEach((d,b)=>{d.classList.add("hidden"),d.classList.remove("visible"),b>=n&&b<L&&(d.classList.remove("hidden"),d.classList.add("visible"))})};window.addEventListener("load",()=>{B(),c(1),l.addEventListener("click",()=>{c(i-1)}),o.addEventListener("click",()=>{c(i+1)}),document.querySelectorAll(".pagination-number").forEach(e=>{const n=Number(e.getAttribute("page-index"));n&&e.addEventListener("click",()=>{c(n)})})})}const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADCSURBVHgBrVLBDcIwDHQQf8IEZAPoJrBBmaCrMAojsAEwAWUCYIJwrlzJhLip1J50iuVeLhenRBPhcs0Y4w7LPmmfnXO3VLugORIYJ5bQJdIJPNiM2NiI9hdI4cFXaTdrWGt9jKqueyHXOc2gO9YHuAED11bK9BXe4IpseNEMGqzJRgBb3VhmDPoB8U/zkfpCBlKDp5xCeOOD6h9l9cq0Q+4KgWxsqXCFE3jl6UsaDR5uDVZmAsRuRXCnf7BhJZr58AVKj1zad4nIbgAAAABJRU5ErkJggg==";function D(){const t=document.querySelector(".hero-title"),a=document.querySelector(".sidebar");t.textContent==="Shopping List"&&(a.style.display="none")}D();const r=document.querySelector(".shopping-list"),N=localStorage.getItem("booksData"),g=R();function R(){let t;try{return t=JSON.parse(N),t}catch(a){console.error("Error:",a)}}function C(t){const a=t.map(s=>`<li class="sl-item" data-bookId="${s._id}">
			<button class="sl-remove">
				<img src=".${S}" class="sl-remove-img">
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
							<img class="sl-book-link-amazon-img" src="${k}">
						</a>
						<a class="sl-book-link-ab" href="${s.buy_links[1].url}">
							<img class="sl-book-link-ab-img" src="${E}">
						</a>
					</div>
				</div>
			</div>
		</li>`).join(`

`);r.innerHTML=a}function f(){const t=`<div class="empty-page-box">
		<p class="empty-page-text">This page is empty, add some books and proceed to order.</p>
		<img class="empty-page-img" src="./img/png/IMG_96061.png" alt="This page is empty, add some books and proceed to order">
	</div>`;r.innerHTML=t}function J(t){try{t!==null&&t.length!==0?Array.isArray(g)?C(g):console.error(error):f()}catch(a){console.error("Помилка при розпарсЮванні даних:",a)}}J(g);r.addEventListener("click",t=>{const a=t.target.closest(".sl-remove");if(a){const s=a.closest(".sl-item");s.remove();const o=s.dataset.bookid;$(l=>x(l,o))}});function x(t,a){return t.filter(o=>o._id!==a)}function $(t){const a=JSON.parse(localStorage.getItem("booksData"))||[],s=t(a);localStorage.setItem("booksData",JSON.stringify(s))}r.getElementsByTagName("li").length>3?I():r.getElementsByTagName("li").length<=3?document.querySelectorAll(".pagination-button").forEach(a=>{a.style.display="none"}):f();
