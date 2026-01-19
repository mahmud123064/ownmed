import "./about.css";
import About1 from "@/assets/about_home_bg1.jpg";
import About2 from "@/assets/about_home_bg2.jpg";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function About() {
    return (
        <div className="max-w-7xl  mx-auto px-8 py-16 background">
            <div className="flex flex-col md:flex-row items-center gap-28">
                {/* Left Image Section */}
                <div className="relative w-full md:w-1/2 flex mr-auto">
                    {/* Main Image */}
                    <img
                        src={About1}
                        alt="About main"
                        className=" max-w-[400px] md:max-w-[600px] lg:max-w-[600px] rounded-xl"
                    />

                    {/* Overlapping Image (md & lg) */}
                    <div className="hidden md:block absolute right-[-45px] bottom-[-45px]">
                        <img
                            src={About2}
                            alt="About secondary"
                            className="w-56 md:w-52 lg:w-72 aspect-square object-cover rounded-2xl shadow-lg"
                        />
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="w-full md:w-1/2 text-center md:text-center lg:text-left flex flex-col items-center md:items-center lg:items-start mt-20 ">
                    {/* Title */}
                    <div className="flex items-center mb-4">
                        <hr className="w-12 mr-3 border-2 border-blue-500" />
                        <h1 className="text-lg font-semibold text-blue-600">
                            Welcome To Our OwnMed
                        </h1>
                        <hr className="w-12 ml-3 border-2 border-blue-500" />
                    </div>

                    <h2 className="text-3xl font-bold mb-4 max-w-lg">
                        Best Care for You and Your Family’s Health
                    </h2>

                    <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
                        We provide reliable healthcare services designed to
                        support you and your loved ones. Our mission is to make
                        healthcare simple, accessible, and trustworthy for
                        everyone.
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-3 text-left">
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
                    <button className="mt-5 border-[2px] border-blue-600 px-4 py-1 rounded hover:text-white hover:bg-blue-600 flex items-center">
                        Learn More <ArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
