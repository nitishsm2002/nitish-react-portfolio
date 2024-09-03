import React from "react";
import vpn from '../assets/vpn.png';
import copeople from '../assets/copeople.png';
import portfolio from '../assets/portfolio.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-950 dark:border-gray-900">
            {title === 'Seri-Sense' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn} alt="" />
            </a>}
            {title === 'Volleyball club Management System' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>}
            {title === 'Personal portfolio website' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={portfolio} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="App"> {/* Added className="App" */}
            <div className="bg-black projects"> {/* Added className="projects" */}
                <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                    {project.map((item, index) => (
                        <ProjectCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            links={item.links}
                            git={item.git}
                            technologies={item.technologies}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export const project = [
    {
        title: 'Seri-Sense',
        description: 'A Comprehensive Disease Identification andrecommendation system for sericulture using ML and imageprocessing Developed a sericulture disease management system using CNNs and image processing, providing identification, preventive resources, and expert contacts for farmers.',
        image: vpn,
        git: '',
        technologies: ['CNN', 'ResNet50', 'VGG16']
    },
    {
        title: 'Volleyball club Management System',
        description: 'A web-based interface management systemfor scheduling games, managing member profiles, and tracking performance statistics, enhancing operational efficiency, and overall club management using MySQL for database management and queries.',
        git: "",
        technologies: ['mysql']
    },
    {
        title: 'Personal portfolio website',
        description: 'My personal portfolio website is a dynamic and interactive showcase of my skills, projects, and professional achievements. Built using HTML, CSS, JavaScript, and React, the website features a clean and modern design that is fully responsive.',
        image: portfolio,
        git: '',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap/Tailwind CSS', 'GitHub']
    }
]

export default Projects;