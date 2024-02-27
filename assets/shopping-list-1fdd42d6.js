import"./modal-54bde1da.js";function y(){const t=document.getElementById("pagination-numbers"),s=document.getElementById("paginated-list").querySelectorAll("li"),o=document.getElementById("next-button"),l=document.getElementById("prev-button"),p=3,g=Math.ceil(s.length/p);let i=1;const u=e=>{e.classList.add("disabled"),e.setAttribute("disabled",!0)},b=e=>{e.classList.remove("disabled"),e.removeAttribute("disabled")},k=()=>{i===1?u(l):b(l),g===i?u(o):b(o)},h=()=>{document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==i&&e.classList.add("active")})},L=e=>{const a=document.createElement("button");a.className="pagination-number",a.innerHTML=e,a.setAttribute("page-index",e),a.textContent=e,t.appendChild(a)},S=()=>{for(let e=1;e<=g;e++)L(e)},r=e=>{i=e,h(),k();const a=(e-1)*p,E=e*p;s.forEach((c,v)=>{c.classList.add("hidden"),c.classList.remove("visible"),v>=a&&v<E&&(c.classList.remove("hidden"),c.classList.add("visible"))})};window.addEventListener("load",()=>{S(),r(1),l.addEventListener("click",()=>{r(i-1)}),o.addEventListener("click",()=>{r(i+1)}),document.querySelectorAll(".pagination-number").forEach(e=>{const a=Number(e.getAttribute("page-index"));a&&e.addEventListener("click",()=>{r(a)})})})}function B(){const t=document.querySelector(".hero-title"),n=document.querySelector(".sidebar");t.textContent==="Shopping List"&&(n.style.display="none")}B();const m=document.querySelector(".shopping-list"),I=localStorage.getItem("booksData"),d=A();function A(){let t;try{return t=JSON.parse(I),t}catch(n){console.error("Error:",n)}}function x(t){const n=t.map(s=>`<li class="sl-item" data-bookId="${s._id}">
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

`);m.innerHTML=n}function N(){const t=`<div class="empty-page-box">
		<p class="empty-page-text">This page is empty, add some books and proceed to order.</p>
		<img class="empty-page-img" src="./img/png/IMG_96061.png" alt="This page is empty, add some books and proceed to order">
	</div>`;m.innerHTML=t}function f(t){try{t!==null&&t.length!==0?Array.isArray(d)?x(d):console.error(error):N()}catch(n){console.error("Помилка при розпарсЮванні даних:",n)}}f(d);m.addEventListener("click",t=>{const s=t.target.closest(".sl-remove").closest(".sl-item");s.remove();const o=s.dataset.bookid;q(l=>$(l,o)),f(d),y()});function $(t,n){return t.filter(o=>o._id!==n)}function q(t){const n=JSON.parse(localStorage.getItem("booksData"))||[],s=t(n);localStorage.setItem("booksData",JSON.stringify(s))}if(m.getElementsByTagName("li").length>3)y();else{const t=document.querySelector(".pagination-button");t.sttyle.display="none"}
