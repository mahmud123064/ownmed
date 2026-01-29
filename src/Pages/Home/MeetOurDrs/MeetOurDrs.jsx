import React, { useState } from "react";
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowRight, Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

export default function MeetOurDrs() {
    const [swiperRef, setSwiperRef] = useState(null);

    const doctorData = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            title: "Cardiologist",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
            bio: "Specialized in heart diseases with 15+ years of experience.",
            social: {
                email: "sarah@example.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                facebook: "https://facebook.com",
            },
        },
        {
            id: 2,
            name: "Dr. Michael Chen",
            title: "Neurologist",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
            bio: "Expert in neurological disorders and brain health.",
            social: {
                email: "michael@example.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                facebook: "https://facebook.com",
            },
        },
        {
            id: 3,
            name: "Dr. Emily Rodriguez",
            title: "Dermatologist",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
            bio: "Specialized in skin health and cosmetic procedures.",
            social: {
                email: "emily@example.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                facebook: "https://facebook.com",
            },
        },
        {
            id: 4,
            name: "Dr. James Wilson",
            title: "Orthopedic Surgeon",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
            bio: "Expert in bone and joint surgery with latest techniques.",
            social: {
                email: "james@example.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                facebook: "https://facebook.com",
            },
        },
        {
            id: 5,
            name: "Dr. Lisa Anderson",
            title: "Pediatrician",
            image: "https://images.unsplash.com/photo-1507001957560-d7a7c7f44667?w=400&h=500&fit=crop",
            bio: "Dedicated to children health and development care.",
            social: {
                email: "lisa@example.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                facebook: "https://facebook.com",
            },
        },
        {
            id: 6,
            name: "Dr. David Martinez",
            title: "Ophthalmologist",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=500&fit=crop",
            bio: "Specialized in eye health and vision correction.",
            social: {
                email: "david@example.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                facebook: "https://facebook.com",
            },
        },
        {
            id: 7,
            name: "Dr. Rachel Green",
            title: "Psychiatrist",
            image: "https://images.unsplash.com/photo-1516534775068-bb6a1db94cf2?w=400&h=500&fit=crop",
            bio: "Mental health expert with compassionate approach.",
            social: {
                email: "rachel@example.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                facebook: "https://facebook.com",
            },
        },
        {
            id: 8,
            name: "Dr. Christopher Lee",
            title: "Gastroenterologist",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
            bio: "Specialist in digestive system disorders.",
            social: {
                email: "christopher@example.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
                facebook: "https://facebook.com",
            },
        },
    ];
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 ">
            <div className="md:max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center mb-6">
                        <hr className="w-12 mr-3 border-2 border-primary" />
                        <h1 className="text-lg md:text-4xl font-bold text-primary whitespace-nowrap">
                            Meet Our Specialist Doctors
                        </h1>
                        <hr className="w-12 ml-3 border-2 border-primary" />
                    </div>
                    <i className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Experienced healthcare professionals dedicated to your
                        well-being. We provide comprehensive healthcare
                        solutions to help you manage your wellness journey. From
                        personal health tracking to finding trusted medical
                        professionals nearby, our services are designed to make
                        healthcare more accessible and convenient.
                    </i>
                </div>

                {/* Swiper Carousel */}
                <div className="relative">
                    <Swiper
                        ref={setSwiperRef}
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-custom",
                            nextEl: ".swiper-button-next-custom",
                        }}
                        pagination={{
                            el: ".swiper-pagination-custom",
                            clickable: true,

                            bulletClass: "swiper-pagination-bullet-custom",
                            bulletActiveClass:
                                "swiper-pagination-bullet-active-custom",
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                        className="pb-16"
                    >
                        {doctorData.map((doctor) => (
                            <SwiperSlide key={doctor.id}>
                                <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                                    {/* Doctor Image */}
                                    <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                                        <img
                                            src={
                                                doctor.image ||
                                                "/placeholder.svg"
                                            }
                                            alt={doctor.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Doctor Info */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                            {doctor.name}
                                        </h3>
                                        <p className="text-sm text-primary font-semibold mb-4">
                                            {doctor.title}
                                        </p>
                                        <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                                            {doctor.bio}
                                        </p>

                                        {/* Social Links */}
                                        <div className="flex gap-3 mt-auto pt-4">
                                            <a
                                                href={`mailto:${doctor.social.email}`}
                                                aria-label="Email"
                                                className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                                            >
                                                <Mail size={18} />
                                            </a>
                                            <a
                                                href={doctor.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="LinkedIn"
                                                className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                                            >
                                                <Linkedin size={18} />
                                            </a>
                                            <a
                                                href={doctor.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Twitter"
                                                className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                                            >
                                                <Twitter size={18} />
                                            </a>
                                            <a
                                                href={doctor.social.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Facebook"
                                                className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                                            >
                                                <Facebook size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <button
                        className="swiper-button-prev-custom absolute left-0 top-1/3 -translate-y-1/2 -ml-4 sm:-ml-6 lg:-ml-8 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-colors duration-300"
                        aria-label="Previous doctors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        className="swiper-button-next-custom absolute right-0 top-1/3 -translate-y-1/2 -mr-4 sm:-mr-6 lg:-mr-8 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-colors duration-300"
                        aria-label="Next doctors"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="swiper-pagination-custom flex justify-center gap-2 mt-8" />
                </div>
                
                <div className="text-center mt-12">
                    {/* <Link
                        to="/"
                        className="relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-6 py-3 text-white font-medium transition hover:bg-primary group"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Find More Doctors
                            <ArrowRight size={18} />
                        </span>

                        <span className="absolute inset-0 bg-white/20 scale-0 rounded-full transition-transform duration-500 group-hover:scale-150" />
                    </Link> */}
                    <PrimaryButton />
                </div>
            </div>

            <style jsx>{`
                .swiper-pagination-bullet-custom {
                    width: 10px;
                    height: 10px;
                    border-radius: 100%;
                    background-color: #68d6ce;
                    opacity: 1;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .swiper-pagination-bullet-active-custom {
                    background-color: #207dff;
                }
            `}</style>
        </section>
    );
}
