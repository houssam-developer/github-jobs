import { MdWest, MdAccessTime } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

function ModalJob({
	fnBackToSearch,
	emailContact = 'wes@kasisto.com',
	emailCC_Contact = 'eric@kasisto.com',
	job = {}
}) {

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
						to <span className='text-[#1E86FF]'>{emailContact}</span> {emailCC_Contact && <span>& CC <span className='text-[#1E86FF]'>{emailCC_Contact}</span></span>}
					</p>
				</div>
			</div>

			{/* Announcement */}
			<div className='flex flex-col gap-8 max-w-[750px]'>
				{/* Job Title */}
				<div className='flex flex-col gap-2'>
					<h2 className='font-[Roboto] font-bold text-xl sm:text-xl'>{job.title}</h2>
					<span className="px-[.5em] py-1 text-xs sm:text-sm font-bold border-[1px] border-[#334680] rounded self-start">{job.timeType}</span>
					<div className=" text-xs text-[#B7BCCE] font-medium flex items-center gap-1 ">
						<MdAccessTime className='min-[18px]' size={18} />
						<span>{job.postedAt}</span>
					</div>
				</div>

				{/* Company */}
				<div className='flex items-start gap-3'>
					<div>
						<img className='max-w-[80px] rounded-md' src={`./images/companies/${job.companyPicture}`} alt="picture of company" />
					</div>
					<div className='flex flex-col gap-2'>
						<h2 className=" text-sm font-bold">{job.companyName}</h2>
						<div className=" text-xs text-[#B7BCCE] font-medium flex items-center gap-1">
							<BiWorld className='min-[18px]' size={18} />
							<span>{job.city}</span>
						</div>
					</div>
				</div>

				{/* Job Description */}
				<p className='font-[Roboto] font-normal flex flex-col gap-2'>
					{job.description}
				</p>
			</div>
		</div>
	);
}

export default ModalJob;