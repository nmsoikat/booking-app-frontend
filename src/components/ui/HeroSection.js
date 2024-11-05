// src/components/HeroSection.js

import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            {/* Background image */}
            <div className="absolute inset-0 bg-cover bg-center bg-opacity-50" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x1080)' }}></div>

            <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-24 md:py-48 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
                    Event ticketing made simple
                </h1>
                <p className="mt-4 text-xl sm:text-2xl font-light">
                    Discover endless possibilities and grow your business with us.
                </p>

                <div className="mt-8">
                    <Link to="/auth/login" className="inline-block px-8 py-3 text-lg font-semibold bg-blue-800 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"> Get Started</Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
