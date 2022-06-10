export const apiService = (function () {

	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
			'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
		},
		body: '{"search_terms":"python programmer","location":"30301","page":"1","fetch_full_text":"yes"}'
	};

	console.log(`🚀 fetch...`);
	function seek() {
		fetch('https://linkedin-jobs-search.p.rapidapi.com/', options)
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err));
	}

	return {
		seek
	}
})();

const apiAdapter = function (data) {

	return {

	}
}