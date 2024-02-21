import axios from 'axios';

const searchesOptions = {
  key: '42379891-9b2b3e5f2dd038df1d72b79a3',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
	safesearch: true,
	per_page: 15,
	page: 1,
};

async function searchImages() {
	const params = new URLSearchParams(searchesOptions);
	const res = await axios.get(`https://pixabay.com/api/?${params}`);
	return res.data;
};


export {
	searchesOptions,
	searchImages,
}