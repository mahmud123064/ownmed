import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Banner = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10"></div>

            <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-0 py-12">
                
                {/* TEXT SECTION */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
                    
                    <div className="flex items-center justify-center md:justify-start gap-3">
                        <hr className="w-8 border-2 border-primary" />
                        <h1 className="text-sm sm:text-base font-semibold text-primary">
                            Welcome To Our OwnMed
                        </h1>
                        <hr className="w-8 border-2 border-blue-500" />
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
                        We Care About Your{" "}
                        <span className="block sm:inline">
                            <Typewriter
                                options={{
                                    strings: [
                                        '<span class="text-primary">Health</span>',
                                        '<span class="text-primary">Family</span>',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    html: true,
                                }}
                            />
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-accent max-w-md mx-auto md:mx-0">
                        Track medications, book doctors, and access healthcare
                        anytime with complete confidence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <Link to="/dashboard">
                            <button className="btn btn-primary w-full sm:w-auto hover:bg-primary/60 text-white">
                                Dashboard
                            </button>
                        </Link>

                        <Link to="/about-us">
                            <button className="btn w-full sm:w-auto border border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>

                {/* IMAGE SECTION */}
                <div className="w-full md:block md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
                    <img
                        src="https://i.ibb.co.com/ymgS8CHm/doctor.png"
                        alt="Doctor"
                        className="w-64 sm:w-72 md:w-full max-w-sm rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
