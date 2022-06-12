
import { MdAccessTime } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

function JobCard(
	{
		job = {},
		companyPicture = 'company-picture.png',
		companyName = 'CompanyName',
		jobTitle = 'JobTitle',
		jobTimeType = 'JobTimeType',
		jobLocation = 'JobCity',
		jobPostedDays = 'JobDays Ago',
		id = '',
		callModalJob = undefined,
	}) {

	//console.log(`📡 JobCard.init() #job: `, job.companyPicture);

	return (
		<a onClick={e => callModalJob(e, job)} href="#" className="p-2 bg-white shadow rounded-md font-['Roboto'] text-[#334680] cursor-pointer flex gap-1 sm:gap-2 md:gap-4">
			<div className="flex-grow min-w-[85px] max-w-[100px]">
				<div className="container-ratio-1-1  w-full">
					<img className="child-ratio rounded-md"
						src={`./images/companies/${job.companyPicture}`} alt="picture of an company" />
				</div>
			</div>

			<div className="flex-grow flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<h3 className=" text-xs font-bold">{job.companyName}</h3>
					<p className="text-xs sm:text-sm md:text-base">{job.title}</p>
				</div>
				<span className="px-[.5em] py-1 text-xs sm:text-sm font-bold border-[1px] border-[#334680] rounded self-start">{job.timeType}</span>
				<div className="py-2 text-xs text-[#B7BCCE] font-medium flex items-center gap-2 sm:gap-4">
					<div className="flex items-center gap-1">
						<BiWorld className='min-[14px]' size={14} />
						<span>{job.city}</span>
					</div>
					<div className="flex items-center gap-1">
						<MdAccessTime className='min-[14px]' size={14} />
						<span>{job.postedAt}</span>
					</div>
				</div>
			</div>
		</a>
	)
}

export default JobCard;