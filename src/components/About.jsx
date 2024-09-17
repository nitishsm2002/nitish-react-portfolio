import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
// import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' style={{ background: '#151030' }}>
        <img src={service.icon} alt='some_icon' className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="App">
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Nitish S M, a 2024 graduate🎓 with a passion for crafting robust frontend web pages. As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='http://linkedin.com/in/nitish-sm-74aa2926a'>developer</a>, I specialize in Html CSS javascript and react.js🚀.
              <br />
              ✍️ Beyond coding, I love sharing my insights and experiences through engaging blogs on this website.
              On a different note, I'm also into graphic designing and typography. It's not just a hobby; I see it as a way to express creativity and communicate visually compelling messages.</p>

            <ButtonLink
              url='https://drive.google.com/file/d/1cgoCH4Pb_e8znuD-yQKP4LYpzIdWVEW_/view?usp=drivesdk'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default About;
