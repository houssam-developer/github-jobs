
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import { apiService } from './services/ApiService';
import { MdWorkOutline, MdWest, MdAccessTime } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import JobCard from './components/JobCard/JobCard';
import { v4 as uuidv4 } from 'uuid';
import ModalJob from './components/ModalJob/ModalJob';

function App() {
	const [useIndex, setUseIndex] = useState(0)
	const [selectedJob, setSelectedJob] = useState(undefined);
	const mainContentRef = useRef();
	const modalJobRef = useRef();

	useEffect(() => {
		console.log(`🚀 App.init()`);
		//apiService.seek();
	}, []);

	function callModalJob(e, job) {
		e.preventDefault();
		console.log(`🔥 callModalJob()`);

		setSelectedJob(job);

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
			<div className='hidden' ref={modalJobRef}>
				<ModalJob fnBackToSearch={fnBackToSearch} job={selectedJob} />
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
									<input type="text" placeholder='City, state, zip code' />
								</div>

								<ul className='p-3 font-medium text-sm'>
									<li className='p-1 flex items-center gap-2'>
										<input type="radio" name="city" id="cityThree" />
										<label htmlFor="cityThree">New York</label>
									</li>
									<li className='p-1 flex items-center gap-2'>
										<input type="radio" name="city" id="cityOne" />
										<label htmlFor="cityOne">Fremont</label>
									</li>
									<li className='p-1 flex items-center gap-2'>
										<input type="radio" name="city" id="cityTwo" />
										<label htmlFor="cityTwo">Los Angeles</label>
									</li>
									<li className='p-1 flex items-center gap-2'>
										<input type="radio" name="city" id="cityFour" />
										<label htmlFor="cityFour">Chicago</label>
									</li>
								</ul>
							</div>
						</div>

						{/* Results */}
						<ul className='flex-grow max-w-[790px] p-2 flex flex-col gap-2 md:gap-8'>
							{apiService.seekJobs().map(it => <li key={uuidv4()}><JobCard id={uuidv4()} job={it} callModalJob={callModalJob} /></li>)}
						</ul>
					</div>
				</form>
			</main>


			{/* <p className="text-primary text-center p-4 font-medium">created by <span className='font-medium text-cyan-200'>houssam-developer</span> - devChallenges.io</p> */}
		</div>
	)
}


export default App;
