import React from "react";

import {
    LayoutDashboard,
    Activity,
    Heart,
    MapPin,
    Pill,
    Building2,
} from "lucide-react";

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div
            className={`p-8 rounded-xl transition-all duration-500 cursor-pointer bg-white text-gray-800 border border-gray-200 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 hover:text-white hover:border-blue-600 hover:shadow-2xl hover:scale-110`}
        >
            <div className="flex justify-center mb-4">
                <div
                    className={`p-3 rounded-full transition-all duration-500 bg-blue-50 group-hover:bg-blue-500 group-hover:bg-opacity-30`}
                >
                    <div className="text-blue-600 group-hover:text-white transition-all duration-900">
                        {icon}
                    </div>
                </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
            <p
                className={`text-center hover:text-white transition-all duration-500`}
            >
                {description}
            </p>
        </div>
    );
};

const services = [
    {
        icon: <LayoutDashboard size={32} />,
        title: "Personal Dashboard",
        description:
            "Access your health records and medical history in one place",
    },
    {
        icon: <Activity size={32} />,
        title: "Health Summary",
        description: "Get detailed insights about your overall health status",
    },
    {
        icon: <Heart size={32} />,
        title: "Health Updates",
        description: "Stay informed with personalized health recommendations",
    },
    {
        icon: <MapPin size={32} />,
        title: "Find Doctor",
        description: "Locate healthcare professionals near you instantly",
    },
    {
        icon: <Pill size={32} />,
        title: "Find Pharmacy",
        description: "Discover pharmacies and medication options nearby",
    },
    {
        icon: <Building2 size={32} />,
        title: "Find Hospital",
        description: "Search for hospitals and medical facilities in your area",
    },
];

export default function Services() {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="md:max-w-7xl mx-auto">
                {/* Title Section */}
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center mb-6">
                        <hr className="w-12 mr-3 border-2 border-blue-500" />
                        <h1 className="text-4xl font-bold text-blue-600 whitespace-nowrap">
                            Meet Our Services
                        </h1>
                        <hr className="w-12 ml-3 border-2 border-blue-500" />
                    </div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        We provide comprehensive healthcare solutions to help
                        you manage your wellness journey. From personal health
                        tracking to finding trusted medical professionals
                        nearby, our services are designed to make healthcare
                        more accessible and convenient.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
