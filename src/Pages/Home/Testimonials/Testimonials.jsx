import { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Star } from "lucide-react";

export default function Testimonials() {
    const [swiperRef, setSwiperRef] = useState(null);

    const testimonials = [
        {
            id: 1,
            name: "Simon Árpád",
            title: "Customer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            rating: 5,
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        },
        {
            id: 2,
            name: "Anthony Berryman",
            title: "Client",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
            rating: 5,
            text: "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae blandit. Elit enim massa etiam heque laoreet lorem sed.",
        },
        {
            id: 3,
            name: "Gleason",
            title: "Patient",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            rating: 5,
            text: "Dr. Johnson provided exceptional care during my consultation. Professional, compassionate, and thorough. I felt completely at ease.",
        },
        {
            id: 4,
            name: "Sarah Mitchell",
            title: "Patient",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
            rating: 5,
            text: "The treatment I received exceeded all my expectations. The team is truly experts in their field with an incredible bedside manner.",
        },
        {
            id: 5,
            name: "James Patterson",
            title: "Customer",
            image: "https://images.unsplash.com/photo-1507001957560-d7a7c7f44667?w=400&h=400&fit=crop",
            rating: 5,
            text: "Outstanding service from start to finish! The team helped with my concerns using the most advanced techniques available.",
        },
        {
            id: 6,
            name: "Emma Rodriguez",
            title: "Patient",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop",
            rating: 5,
            text: "My health has improved dramatically thanks to this team. Their advanced care techniques and attention to detail are unmatched.",
        },
    ];

    const StarRating = ({ rating }) => {
        return (
            <div className="flex gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#68d6ce] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
        
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center mb-6">
                        <hr className="w-12 mr-3 border-2 border-primary" />
                        <h1 className="text-lg md:text-4xl font-bold text-primary whitespace-nowrap">
                            What Our Clients Say
                        </h1>
                        <hr className="w-12 ml-3 border-2 border-primary" />
                    </div>
                    <i className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Hear from patients who have experienced our exceptional
                        healthcare services
                    </i>
                </div>

                {/* Swiper Carousel */}
                <div className="relative px-4 sm:px-8 lg:px-12">
                    <Swiper
                        ref={setSwiperRef}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={5}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation={{
                            prevEl: ".testimonial-prev",
                            nextEl: ".testimonial-next",
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className="pb-12"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                {({ isActive }) => (
                                    <div
                                        className={`rounded-lg p-6 sm:p-8 h-full transition-all duration-300 flex flex-col border border-gray-200 ${
                                            isActive
                                                ? "bg-white shadow-2xl scale-100"
                                                : "bg-gray-50 shadow-md opacity-60 scale-90 hover:opacity-80 hover:shadow-lg"
                                        }`}
                                    >
                                        {/* Star Rating */}
                                        <div className="flex gap-1 mb-4">
                                            {Array.from({
                                                length: testimonial.rating,
                                            }).map((_, i) => (
                                                <span
                                                    key={i}
                                                    className="text-yellow-400 text-sm"
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>

                                        {/* Testimonial Text */}
                                        <p className="text-gray-700 leading-relaxed flex-grow text-sm mb-6">
                                            "{testimonial.text}"
                                        </p>

                                        {/* Divider */}
                                        <div className="border-t border-gray-200 pt-4 mt-4" />

                                        {/* Client Info */}
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={
                                                    testimonial.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-gray-900 text-sm">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-xs text-gray-600">
                                                    {testimonial.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Buttons */}
                    <button
                        className="testimonial-prev absolute left-0 top-1/3 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-colors duration-300"
                        aria-label="Previous testimonial"
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
                        className="testimonial-next absolute right-0 top-1/3 -translate-y-1/2 z-20 p-2 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-colors duration-300"
                        aria-label="Next testimonial"
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
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary opacity-10 rounded-full -ml-48 -mb-48" />
        </section>
    );
}
