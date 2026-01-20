import "./about.css";
import About1 from "@/assets/about_home_bg1.jpg";
import About2 from "@/assets/about_home_bg2.jpg";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16 background">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                {/* Left Image Section */}
                <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
                    {/* Main Image */}
                    <img
                        src={About1}
                        alt="About main"
                        className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[560px] rounded-xl"
                    />

                    {/* Overlapping Image (tablet & desktop only) */}
                    <div className="hidden md:block absolute md:right-[-40px] md:bottom-[-40px] lg:right-[-60px] lg:bottom-[-60px]">
                        <img
                            src={About2}
                            alt="About secondary"
                            className="w-40 md:w-44 lg:w-64 aspect-square object-cover rounded-2xl shadow-lg"
                        />
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0">
                    {/* Section Title */}
                    <div className="flex items-center mb-4">
                        <hr className="w-10 mr-3 border-2 border-blue-500" />
                        <h1 className="text-lg font-semibold text-blue-600">
                            Welcome To Our OwnMed
                        </h1>
                        <hr className="w-10 ml-3 border-2 border-blue-500" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 max-w-lg">
                        Best Care for You and Your Family’s Health
                    </h2>

                    <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
                        We provide reliable healthcare services designed to
                        support you and your loved ones. Our mission is to make
                        healthcare simple, accessible, and trustworthy for
                        everyone.
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-3 text-left mb-6">
                        <li className="flex items-center gap-2">
                            <CheckCircle className="text-blue-500" size={20} />
                            <span>
                                Trusted doctors and healthcare providers
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="text-blue-500" size={20} />
                            <span>Easy appointment booking</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="text-blue-500" size={20} />
                            <span>Family health tracking and support</span>
                        </li>
                    </ul>

                    {/* Button */}
                    <Link
                        to="/"
                        className="relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-blue-600 px-6 py-3 text-white font-medium transition hover:bg-blue-700 group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Learn More
                            <ArrowRight size={18} />
                        </span>

                        <span className="absolute inset-0 bg-white/20 scale-0 rounded-full transition-transform duration-500 group-hover:scale-150" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
