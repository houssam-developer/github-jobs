
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import { apiService } from './services/ApiService';
import { MdWorkOutline, MdWest, MdAccessTime } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import JobCard from './components/JobCard/JobCard';
import { v4 as uuidv4 } from 'uuid';

function App() {

	const [selectedJobAnnouncement, setSelectedJobAnnouncement] = useState(undefined);
	const mainContentRef = useRef();
	const modalJobRef = useRef();

	useEffect(() => {
		console.log(`🚀 App.init()`);

		//apiService.seek();
	}, []);

	function callModalJob(e, jobId) {
		e.preventDefault();
		console.log(`🔥 callModalJob() #jobId: ${jobId}`);

		mainContentRef.current.classList.add('hidden');
		modalJobRef.current.classList.remove('hidden');

		window.scrollTo({
			top: 0,
		});
	}

	function fnBackToSearch(e) {
		e.preventDefault();
		console.log(`🔥 fnBackToSearch()`);
		mainContentRef.current.classList.remove('hidden');
		modalJobRef.current.classList.add('hidden');
	}



	return (
		<div className="p-2 sm:p-4">
			<h1 className='text-[#111] text-2xl mb-6'><span className='font-semibold'>Github</span> Jobs</h1>
			<div className='hidden-smooth' ref={modalJobRef}>
				<ModalJob fnBackToSearch={fnBackToSearch} />
			</div>
			<main className='' ref={mainContentRef}>
				<form>

					{/* container search */}

					<div className='px-3 py-10 container-input-search rounded-md'>
						<div className='container-input-search__subcontainer'>
							<MdWorkOutline className='min-w-[14px]' size={20} />
							<input className='flex-grow font-[Roboto] text-[#334680]' type="text" name="search" placeholder='Title, companies, expert' />
							<button className='bg-[#1E86FF] text-xs md:text-base text-white py-3 px-4 rounded ml-auto' type='submit'>Search</button>
						</div>
					</div>

					{/* CONTAINER { Fulltime - Location } --- { Results } */}
					<div className='flex flex-wrap gap-4 py-4 justify-between'>
						<div className='flex-grow md:max-w-[380px]'>
							{/* Fulltime */}
							<div className='p-4 text-sm font-medium flex items-center gap-2'>
								<input type="checkbox" name="fulltime" id='fulltime' />
								<label htmlFor="fulltime">Full time</label>
							</div>

							{/* Location */}
							<div className=''>
								<h2 className='p-2 text-[#B9BDCF] text-sm font-bold'>Location</h2>
								<div className='container-input-location'>
									<BiWorld className='min-[20px]' size={20} />
									<input type="text" placeholder='City, state, zip code or country' />
								</div>

								<ul className='p-3 font-medium text-sm'>
									<li className='p-1 flex items-center gap-2'>
										<input type="radio" name="city" id="cityOne" />
										<label htmlFor="cityOne">London</label>
									</li>
									<li className='p-1 flex items-center gap-2'>
										<input type="radio" name="city" id="cityTwo" />
										<label htmlFor="cityTwo">Amsterdam</label>
									</li>
									<li className='p-1 flex items-center gap-2'>
										<input type="radio" name="city" id="cityThree" />
										<label htmlFor="cityThree">New York</label>
									</li>
									<li className='p-1 flex items-center gap-2'>
										<input type="radio" name="city" id="cityFour" />
										<label htmlFor="cityFour">Berlin</label>
									</li>
								</ul>
							</div>
						</div>

						{/* Results */}
						<ul className='flex-grow max-w-[790px] p-2 flex flex-col gap-2 md:gap-8'>
							{[...Array(5).keys()].map(it => <li key={uuidv4()}><JobCard id={uuidv4()} callModalJob={callModalJob} /></li>)}
						</ul>
					</div>


				</form>
			</main>


			{/* <p className="text-primary text-center p-4 font-medium">created by <span className='font-medium text-cyan-200'>houssam-developer</span> - devChallenges.io</p> */}
		</div>
	)
}

function ModalJob({ jobData = {}, fnBackToSearch }) {

	return (
		<div className='modal-job flex flex-wrap gap-8'>
			<div className='max-w-[300px] flex flex-col gap-8'>
				{/* Back */}
				<button onClick={fnBackToSearch} className='text-[#1E86FF] text-sm font-medium flex items-center gap-3'>
					<MdWest size={18} />
					<span>Back to search</span>
				</button>

				{/* Apply */}
				<div className='flex flex-col gap-2'>
					<h2 className='uppercase text-sm text-[#b9bdcf] font-bold'>how to apply</h2>
					<p className='text-sm font-medium'>
						Please email a copy of your resume and online portfolio
						to <span className='text-[#1E86FF]'>wes@kasisto.com</span> & CC <span className='text-[#1E86FF]'>eric@kasisto.com</span>
					</p>
				</div>
			</div>

			{/* Announcement */}
			<div className='flex flex-col gap-8 max-w-[750px]'>
				{/* Job Title */}
				<div className='flex flex-col gap-2'>
					<h2 className='font-[Roboto] font-bold text-xl sm:text-xl'>Front-End Software Engineer</h2>
					<span className="px-[.5em] py-1 text-xs sm:text-sm font-bold border-[1px] border-[#334680] rounded self-start">Full time</span>
					<div className=" text-xs text-[#B7BCCE] font-medium flex items-center gap-1 ">
						<MdAccessTime className='min-[18px]' size={18} />
						<span>5 days ago</span>
					</div>
				</div>

				{/* Company */}
				<div className='flex items-start gap-3'>
					<div>
						<img className='max-w-[42px] rounded-md' src="./images/companies/company-picture.png" alt="picture of company" />
					</div>
					<div className='flex flex-col gap-2'>
						<h2 className=" text-sm font-bold">Kasito</h2>
						<div className=" text-xs text-[#B7BCCE] font-medium flex items-center gap-1">
							<BiWorld className='min-[18px]' size={18} />
							<span>New York</span>
						</div>
					</div>
				</div>

				{/* Job Description */}
				<p className='font-[Roboto] font-normal flex flex-col gap-2'>
					Humanizing Digital Experiences®
					<span />
					Kasisto’s Digital Experience Platform, KAI, is designed for financial institutions to deliver the industry’s most amazing Conversational AI powered intelligent virtual assistants to their customers. KAI is open and extensible, and also fluent in the language of banking and finance. From simple retail transactions to the complex demands of corporate banks and wealth management, financial institutions can deliver meaningful digital interactions with KAI that help build their digital brand.
					<span />
					Financial institutions around the world use KAI, including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife Bank among others. They chose KAI for its proven track record to drive business results while improving customer experiences. The platform is used by millions of consumers around the world, all the time, across multiple channels, in different languages, and is optimized for performance, scalability, security, and compliance.
					<span />
					This position
					<span />
					We are looking for a Full-Stack, client side software engineer to help build and integrate responsive chat interfaces, analytics dashboards and reporting tools.
					What you’ll be doing
					Working closely with clients and internal engineering, product and design teams to gather requirements Building and integrating front-end applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack, Handlebars.js, LESS, Backbone, Python, Django and Java Working to improve user experience and functionality for tools Writing testable code utilizing common front-end unit and BDD testing frameworks What you need for this position

					3+ years in client-side web development with CSS, HTML, Javascript and jQuery Proven, full-stack front-end experience using Python and Django Other Modern Web Framework(s) experience is a plus (React, Vue, Angular, Ember) Experience working collaboratively to build scalable, modular, production software in an Agile environment Experience using RESTful json services Node.js and API development familiarity is plus D3.js is a plus

					What we offer:

					Competitive compensation package Ground floor opportunity within rapidly growing tech startup Great collaborative team environment Full Benefits Fun perks

					Location - NYC, Flatiron District

					We welcome your cover letter with a description of your previous complete experience and your resume.
					<span></span>
					Applicants must be authorized to work in the US as we are unable to sponsor.
					<span></span>
					Kasisto is an equal opportunity employer.
				</p>
			</div>
		</div>
	);
}

export default App;
