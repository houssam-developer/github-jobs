
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import { apiService } from './services/ApiService';
import { MdWorkOutline } from "react-icons/md";
import { BiWorld } from "react-icons/bi";


function App() {

	useEffect(() => {
		console.log(`🚀 App.init()`);

		//apiService.seek();
	}, []);

	return (
		<div className="p-2">
			<h1 className='text-[#111] text-2xl mb-6'><span className='font-semibold'>Github</span> Jobs</h1>
			<main>
				<form>

					{/* container search */}
					<div className='px-3 py-10 container-input-search rounded-md'>
						<div className='container-input-search__subcontainer'>
							<MdWorkOutline className='min-w-[14px]' size={24} />
							<input className='font-[Roboto] font-normal text-xs text-[#334680]' type="text" name="search" placeholder='Title, companies, expert' />
							<button className='bg-[#1E86FF] text-xs text-white py-3 px-4 rounded ml-auto' type='submit'>Search</button>
						</div>
					</div>

					{/* CONTAINER { Fulltime - Location } --- { Results } */}
					<div>

						<div>
							{/* Fulltime */}
							<div className='p-4 text-sm font-medium flex items-center gap-2'>
								<input type="checkbox" name="fulltime" id='fulltime' />
								<label htmlFor="fulltime">Full time</label>
							</div>

							{/* Location */}
							<div>
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

						<div>
							{/* Results */}

						</div>
					</div>


				</form>
			</main>


			{/* <p className="text-primary text-center p-4 font-medium">created by <span className='font-medium text-cyan-200'>houssam-developer</span> - devChallenges.io</p> */}
		</div>
	)
}

export default App;
