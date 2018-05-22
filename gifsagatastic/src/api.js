import axios from "axios";

const getGiphy = (searchTerm) => {
	let uriSearchTerm = encodeURIComponent(searchTerm)
	let urlWithSearchTerm = "https://api.giphy.com/v1/gifs/search?api_key=3a4a1f1b1bcd4f59beca120bfe5622f4&limit=10&lang=en&q=" + uriSearchTerm;
	return axios.get(urlWithSearchTerm);
}

export default getGiphy;