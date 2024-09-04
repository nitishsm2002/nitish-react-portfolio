import React from 'react';
import { FaGithub, FaTwitter,FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
			<div className='flex justify-between flex-wrap gap-4'>
				<p className='text-white text-center w-full sm:w-auto font-light'>© {year} Nitish. All rights reserved.</p>
				<div className='text-white flex justify-around sm:w-[250px] w-full'>
					<a 
						href="mailto:nitshdhavan7@gmail.com" 
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' 
						target="_blank" 
						rel="noopener noreferrer"
					>
						<FiMail className='text-xl' />
					</a>
					<a 
						href="https://twitter.com/ohayo0niichan" 
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' 
						target="_blank" 
						rel="noopener noreferrer"
					>
						<FaTwitter className='text-xl' />
					</a>
					<a 
						href="http://linkedin.com/in/nitish-sm-74aa2926a"  
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' 
						target="_blank" 
						rel="noopener noreferrer"
					>
						{}
						<FaLinkedin className='text-xl' />
					</a>
					<a 
						href="https://github.com/nitishsm2002"  
						className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' 
						target="_blank" 
						rel="noopener noreferrer"
					>
						<FaGithub className='text-xl' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;