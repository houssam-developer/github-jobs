import moment from 'moment';
import jobsApi from '../data/Jobs.json';
import { v4 as uuidv4 } from 'uuid';


function makeJob() {

	return {
		id: '',
		companyPicture: 'company-picture.png',
		companyName: 'CompanyName',
		title: 'JobTitle',
		timeType: 'JobTimeType',
		city: 'JobCity',
		state: 'JobState',
		country: 'JobCountry',
		postedAt: 'JobDays Ago',
		description: ''
	}
};

const apiAdapter = (function (data) {
	const jobs = [];

	let fakeId = 1;

	jobsApi.map(it => {
		const job = makeJob();
		job.id = fakeId++;
		job.companyName = it.company_name === '' ? 'ExtractCorp' : it.company_name;
		job.title = it.title;
		job.timeType = (Math.floor(Math.random() * 40) % 2 === 0) ? 'Full time' : 'Part time';
		job.city = it.city;
		job.state = it.state === null || it.state === undefined ? '' : it.state;
		job.country = it.country;
		job.postedAt = parseFromNow(it.date_posted);
		job.description = it.description

		jobs.push(job);
	});

	function parseFromNow(date_posted) {
		try {
			return moment(date_posted, "YYYYMMDD").fromNow();
		} catch (err) {
			console.log(`🚫 parseFromNow() #err: `, err);
		}
	}


	//jobs.forEach(it => console.log('🔁 #it:', it));

	function getJobs() {
		return jobs;
	}

	return {
		getJobs
	}
})();


export const apiService = (function () {
	// const options = {
	// 	method: 'GET',
	// 	headers: {
	// 		'X-RapidAPI-Key': 'bd723f2f58msh817878da61885dbp1c82fejsn1e5961989a62',
	// 		'X-RapidAPI-Host': 'job-search4.p.rapidapi.com'
	// 	}
	// };

	// function seek() {
	// 	fetch('https://job-search4.p.rapidapi.com/linkedin/search?query=Front-End%20&page=1', options)
	// 		.then(response => response.json())
	// 		.then(response => console.log(response))
	// 		.catch(err => console.error(err));
	// }

	const jobs = apiAdapter.getJobs();

	function seekJobs() {
		return jobs;
	}

	function findByCity(city) { }
	function finByKeyword(keyword) { }
	function findByCityOrZipCode(city, zipCode) { }
	function findBySelectedOption(option) { }
	function findByFulltime() { }

	return {
		seekJobs
	}

})();

