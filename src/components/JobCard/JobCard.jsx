
import { MdAccessTime } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

function JobCard(
	{
		companyPicture = 'company-picture.png',
		companyName = 'CompanyName',
		jobTitle = 'JobTitle',
		jobTimeType = 'JobTimeType',
		jobLocation = 'JobCity',
		jobPostedDays = 'JobDays Ago'

	}) {
	return (
		<article className="p-2 bg-white shadow rounded-md font-['Roboto'] text-[#334680] flex gap-1 sm:gap-2 md:gap-4">
			<div>
				<img className="max-w-[90px] max-h-auto object-contain rounded-md border-[1px] border-orange-400"
					src={`./images/companies/${companyPicture}`} alt="picture of an company" />
			</div>

			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<h3 className=" text-xs font-bold">{companyName}</h3>
					<p className="text-xs sm:text-sm md:text-base">{jobTitle}</p>
				</div>
				<span className="px-[.5em] py-1 text-xs sm:text-sm font-bold border-[1px] border-[#334680] rounded self-start">{jobTimeType}</span>
				<div className="py-2 text-xs text-[#B7BCCE] font-medium flex items-center gap-2 sm:gap-4">
					<div className="flex items-center gap-1">
						<BiWorld className='min-[14px]' size={14} />
						<span>{jobLocation}</span>
					</div>
					<div className="flex items-center gap-1">
						<MdAccessTime className='min-[14px]' size={14} />
						<span>{jobPostedDays}</span>
					</div>
				</div>
			</div>
		</article>
	)
}

export default JobCard;