export const apiService = (function () {

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'bd723f2f58msh817878da61885dbp1c82fejsn1e5961989a62',
			'X-RapidAPI-Host': 'job-search4.p.rapidapi.com'
		}
	};

	function seek() {
		fetch('https://job-search4.p.rapidapi.com/linkedin/search?query=React%20&page=1', options)
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err));
	}


	function findByCity(city) { }
	function finByKeyword(keyword) { }
	function findByCityOrZipCode(city, zipCode) { }
	function findBySelectedOption(option) { }
	function findByFulltime() { }

	return {
		seek
	}

})();

const apiAdapter = function (data) {

	return {

	}
}