import"./sidebar-4fb000f0.js";function E(){const t=document.getElementById("pagination-numbers"),s=document.getElementById("paginated-list").querySelectorAll("li"),o=document.getElementById("next-button"),l=document.getElementById("prev-button"),m=3,p=Math.ceil(s.length/m);let i=1;const u=e=>{e.classList.add("disabled"),e.setAttribute("disabled",!0)},b=e=>{e.classList.remove("disabled"),e.removeAttribute("disabled")},f=()=>{i===1?u(l):b(l),p===i?u(o):b(o)},h=()=>{document.querySelectorAll(".pagination-number").forEach(e=>{e.classList.remove("active"),Number(e.getAttribute("page-index"))==i&&e.classList.add("active")})},k=e=>{const a=document.createElement("button");a.className="pagination-number",a.innerHTML=e,a.setAttribute("page-index",e),a.textContent=e,t.appendChild(a)},L=()=>{for(let e=1;e<=p;e++)k(e)},c=e=>{i=e,h(),f();const a=(e-1)*m,S=e*m;s.forEach((d,v)=>{d.classList.add("hidden"),d.classList.remove("visible"),v>=a&&v<S&&(d.classList.remove("hidden"),d.classList.add("visible"))})};window.addEventListener("load",()=>{L(),c(1),l.addEventListener("click",()=>{c(i-1)}),o.addEventListener("click",()=>{c(i+1)}),document.querySelectorAll(".pagination-number").forEach(e=>{const a=Number(e.getAttribute("page-index"));a&&e.addEventListener("click",()=>{c(a)})})})}function A(){const t=document.querySelector(".hero-title"),n=document.querySelector(".sidebar");t.textContent==="Shopping List"&&(n.style.display="none")}A();const r=document.querySelector(".shopping-list"),B=localStorage.getItem("booksData"),g=I();function I(){let t;try{return t=JSON.parse(B),t}catch(n){console.error("Error:",n)}}function N(t){const n=t.map(s=>`<li class="sl-item" data-bookId="${s._id}">
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

`);r.innerHTML=n}function y(){const t=`<div class="empty-page-box">
		<p class="empty-page-text">This page is empty, add some books and proceed to order.</p>
		<img class="empty-page-img" src="./img/png/IMG_96061.png" alt="This page is empty, add some books and proceed to order">
	</div>`;r.innerHTML=t}function x(t){try{t!==null&&t.length!==0?Array.isArray(g)?N(g):console.error(error):y()}catch(n){console.error("Помилка при розпарсЮванні даних:",n)}}x(g);r.addEventListener("click",t=>{const n=t.target.closest(".sl-remove");if(n){const s=n.closest(".sl-item");s.remove();const o=s.dataset.bookid;T(l=>$(l,o))}});function $(t,n){return t.filter(o=>o._id!==n)}function T(t){const n=JSON.parse(localStorage.getItem("booksData"))||[],s=t(n);localStorage.setItem("booksData",JSON.stringify(s))}r.getElementsByTagName("li").length>3?E():r.getElementsByTagName("li").length<=3?document.querySelectorAll(".pagination-button").forEach(n=>{n.style.display="none"}):y();
