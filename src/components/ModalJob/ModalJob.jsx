import { MdWorkOutline, MdWest, MdAccessTime } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

function ModalJob({
	jobData = {}, fnBackToSearch,
	emailContact = 'wes@kasisto.com',
	emailCC_Contact = 'eric@kasisto.com',
	companyPicture = 'company-picture.png',
	companyName = 'CompanyName',
	jobTitle = 'JobTitle',
	jobTimeType = 'JobTimeType',
	jobLocation = 'JobCity',
	jobPostedDays = 'JobDays Ago',
	jobDescription = ''

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

export default ModalJob;