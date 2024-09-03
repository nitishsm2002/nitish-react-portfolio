import React, { useState, useEffect } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Footer from './Footer';

const Home = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        let currentText = '';
        const interval = setInterval(() => {
            if (currentText.length < name.length) {
                currentText += name[currentText.length];
                setText(currentText);
            } else {
                clearInterval(interval);
            }
        }, 100); // Reduced interval time for faster animation
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='area relative z-0 bg-black w-screen h-screen'>
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
                <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
                    <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>
                        Hi, I'm&nbsp;
                        {text.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className='text-yellow-200 font-extrabold'
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                    <p className='mt-3 text-xl'>I love to learn and build scalable and optimized frontend projects.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;