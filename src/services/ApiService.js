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
		job.companyPicture = `fake-company-0${Math.floor(Math.random() * 5)}.png`
		jobs.push(job);
	});

	function parseFromNow(date_posted) {
		try {
			return moment(date_posted, "YYYYMMDD").fromNow();
		} catch (err) {
			console.log(`🚫 parseFromNow() #err: `, err);
		}
	}

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

	function seekJobs(formData) {
		if (!formData) { return jobs; }

		let targetJobSearch = {
			search: '',
			fulltime: false,
			location: '',
			city: ''
		};

		Array.from(formData.entries()).forEach(it => {
			if (it[0] === 'search') { targetJobSearch.search = it[1]; }
			else if (it[0] === 'fulltime') { targetJobSearch.fulltime = true; }
			else if (it[0] === 'location') { targetJobSearch.location = it[1] }
			else if (it[0] === 'city') { targetJobSearch.city = it[1] }
		})

		let jobsFiltered = jobs;

		if (targetJobSearch.search) {
			const searchVal = targetJobSearch.search.toLowerCase();
			jobsFiltered = jobs.filter(it => it.title.toLowerCase().includes(searchVal) || it.companyName.toLowerCase().includes(searchVal));
		}

		if (targetJobSearch.fulltime) { jobsFiltered = jobsFiltered.filter(it => it.timeType === 'Full time'); }
		else { jobsFiltered = jobsFiltered.filter(it => it.timeType === 'Part time'); }

		if (targetJobSearch.location) {
			const locationVal = targetJobSearch.location.toLowerCase();

			jobsFiltered = jobsFiltered.filter(it => it.city.toLowerCase() === locationVal || it.state.toLowerCase() === locationVal);
		}

		if (!targetJobSearch.location || targetJobSearch.city) {
			const cityVal = targetJobSearch.city.toLowerCase();
			if (cityVal) {
				jobsFiltered = jobsFiltered.filter(it => it.city.toLowerCase() === cityVal);
			}
		}

		return jobsFiltered;
	}

	// function findByCity(city) { }
	// function finByKeyword(keyword) { }
	// function findByCityOrZipCode(city, zipCode) { }
	// function findBySelectedOption(option) { }
	// function findByFulltime() { }

	return {
		seekJobs
	}

})();

