const loadBtn = document.querySelector('.button-load');
loadBtn.addEventListener('click', async () => {
    const data = await getImg();
    render(data);
    lightbox.refresh();
    const galleryCards = document.querySelectorAll('.gallery-card');
});

function render(imgs) {
    const markup = imgs.map((img) => {
        return `<li class="gallery-card">
    <a class="" href="$">
        <img src="" alt="" />
    </ul>
    </a>
</li>`;
    }).join('');

    list.insertAdjacentHTML('beforeend', markup);
}


async function getImg() {
    
    const params = new URLSearchParams({
    });
    
    const response = await axios.get(`https://books-backend.p.goit.global/books/top-books&_limit=5&_sort=name`);
    return response.data;
}