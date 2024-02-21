import * as pixabay from './js/pixabay-api';
import * as gallaryToRander from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from './img/bi_x-octagon.png';
import { all } from 'axios';
export const form = document.querySelector('.search-form');
let allHits = 0;

form.addEventListener('submit', async e => {
  e.preventDefault();
  const searchValue = form.elements.searchInput.value.trim();
	if (searchValue) {
		allHits = 0;
		gallaryToRander.gallery.innerHTML = '';
		gallaryToRander.loadMoreBtn.style.display = 'none';
		pixabay.searchesOptions.q = searchValue;
		pixabay.searchesOptions.page = 1;
		await performImageSearch();
	} else {
		 setTimeout(() => {
      iziToast.show({
        iconUrl: iconError,
        message: 'Please enter what you want to find!',
        messageColor: '#FAFAFB',
        backgroundColor: '#EF4040',
        position: 'topRight'
      });
    }, 200)
	}
});

async function performImageSearch() {
  gallaryToRander.loader.style.display = 'block';
	try {
		const images = await pixabay.searchImages();
		allHits += images.hits.length
		if (images.hits.length > 0) {
			gallaryToRander.renderGallery(images);
			if (allHits >= images.totalHits) {
				gallaryToRander.loadMoreBtn.style.visibility = 'hidden';
				iziToast.show({
      iconUrl: iconError,
      message: 'You have reached the end of the search results.',
      messageColor: '#FAFAFB',
      backgroundColor: '#3498db',
      position: 'topRight',
    });
			} else {
				gallaryToRander.loadMoreBtn.style.visibility = 'visible';
			}
    } else {
      gallaryToRander.loadMoreBtn.style.display = 'none';
      iziToast.show({
        iconUrl: iconError,
        message: 'No more images found.',
        messageColor: '#FAFAFB',
        backgroundColor: '#EF4040',
        position: 'topRight',
      });
    }
  } catch (error) {
    gallaryToRander.loadMoreBtn.style.display = 'none';
    iziToast.show({
      iconUrl: iconError,
      message: 'You have reached the end of the search results.',
      messageColor: '#FAFAFB',
      backgroundColor: '#3498db',
      position: 'topRight',
    });
  } finally {
    gallaryToRander.loader.style.display = 'none';
  }

  form.reset();
}

gallaryToRander.loadMoreBtn.addEventListener('click', async () => {
	gallaryToRander.loadMoreBtn.style.visibility = 'hidden';
	gallaryToRander.loader.style.position = 'fixed';
	gallaryToRander.loader.style.bottom = '0';
	pixabay.searchesOptions.page++;
	await performImageSearch();
	scroll()
});

function scroll() {
  const galleryItem = document.querySelector('.gallery-item');
  const heightScroll = galleryItem.getBoundingClientRect().height * 2;
  window.scrollBy({
    top: heightScroll,
    behavior: 'smooth',
  });
}

