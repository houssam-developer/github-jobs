
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import { apiService } from './services/ApiService';
import { MdWorkOutline } from "react-icons/md";


function App() {

	useEffect(() => {
		console.log(`🚀 App.init()`);

		//apiService.seek();
	}, []);

	return (
		<div className="p-2">
			<h1 className='text-2xl mb-6'><span className='font-semibold'>Github</span> Jobs</h1>
			<main>
				<form>
					<div className='px-3 py-10 container-search-input rounded-md'>
						<div className='container-search-input__subcontainer'>
							<MdWorkOutline className='min-w-[14px]' size={24} />
							<input className='font-[Roboto] font-normal text-xs text-[#334680]' type="text" name="search" placeholder='Title, companies, expert' />
							<button className='bg-[#1E86FF] text-xs text-white py-3 px-4 rounded ml-auto' type='submit'>Search</button>
						</div>
					</div>
				</form>
			</main>


			{/* <p className="text-primary text-center p-4 font-medium">created by <span className='font-medium text-cyan-200'>houssam-developer</span> - devChallenges.io</p> */}
		</div>
	)
}

export default App;
