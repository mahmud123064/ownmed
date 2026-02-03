import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";
import {
    Users,
    Heart,
    Target,
    Award,
    LayoutDashboard,
    Stethoscope,
    Hospital,
    HousePlus,
} from "lucide-react";

const AboutUs = () => {
    const values = [
        {
            icon: LayoutDashboard,
            title: "Dashboard",
            description:
                "A centralized view of appointments, medications, prescriptions, and health updates in one place.",
        },
        {
            icon: Stethoscope,
            title: "Doctor",
            description:
                "A centralized view of doctors, specialties, availability, and appointment management.",
        },
        {
            icon: Hospital,
            title: "Hospital",
            description:
                "A centralized view of hospitals, services, locations, and healthcare facilities.",
        },
        {
            icon: HousePlus,
            title: "pharmacy",
            description:
                "A centralized view of pharmacies, prescriptions, medicines, and medication-related information.",
        },
    ];

    const timeline = [
        {
            year: "2024",
            milestone:
                "Founded our first clinic with a vision to provide quality healthcare",
        },
        {
            year: "2025",
            milestone:
                "Achieved international healthcare certification standards",
        },
        {
            year: "2026",
            milestone: "Reached milestone of 5,100+ satisfied patients",
        },
    ];

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden">
                {/* Background image with overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220603/pngtree-doctor-working-in-hospital-with-other-doctors-background-banner-nurses-photo-image_46961770.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}
                >
                    <div className="absolute inset-0 bg-blue-600/25" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-white space-y-6">
                            <div>
                                <p className="text-sm font-semibold tracking-widest uppercase text-blue-200 mb-2">
                                    About OwnMed
                                </p>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                                    Dedicated to Your Health
                                </h1>
                            </div>
                            <p className="text-lg sm:text-xl text-blue-50 leading-relaxed max-w-xl">
                                OwnMed is a modern, health-based web platform
                                designed to simplify and enhance everyday
                                healthcare management. With over 3 years of
                                experience, we help individuals take control of
                                their health through technology-driven solutions
                                that are secure, reliable, and easy to use.
                            </p>
                            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-base">
                                    Learn More
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-base bg-transparent"
                                >
                                    Contact Us
                                </Button>
                            </div> */}
                        </div>

                        {/* Right Stats */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            <Card className="bg-white/20 backdrop-blur border-white/30 p-6 sm:p-8 text-white rounded-lg">
                                <div className="space-y-2">
                                    <p className="text-3xl sm:text-4xl font-bold">
                                        3+
                                    </p>
                                    <p className="text-sm sm:text-base text-blue-100">
                                        Years Experience
                                    </p>
                                </div>
                            </Card>
                            <Card className="bg-white/20 backdrop-blur border-white/30 p-6 sm:p-8 text-white rounded-lg">
                                <div className="space-y-2">
                                    <p className="text-3xl sm:text-4xl font-bold">
                                        1.1K
                                    </p>
                                    <p className="text-sm sm:text-base text-blue-100">
                                        Happy Patients
                                    </p>
                                </div>
                            </Card>
                            <Card className="bg-white/20 backdrop-blur border-white/30 p-6 sm:p-8 text-white rounded-lg">
                                <div className="space-y-2">
                                    <p className="text-3xl sm:text-4xl font-bold">
                                        84
                                    </p>
                                    <p className="text-sm sm:text-base text-blue-100">
                                        Expert Doctors
                                    </p>
                                </div>
                            </Card>
                            <Card className="bg-white/20 backdrop-blur border-white/30 p-6 sm:p-8 text-white rounded-lg">
                                <div className="space-y-2">
                                    <p className="text-3xl sm:text-4xl font-bold">
                                        300
                                    </p>
                                    <p className="text-sm sm:text-base text-blue-100">
                                        Staff Members
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Sidebar */}
                        {/* <div className="lg:col-span-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Our Story
                            </h3>
                            <nav className="space-y-4 border-l-2 border-blue-500 pl-4">
                                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                                    Founded
                                </p>
                                <p className="text-gray-600 text-sm">Mission</p>
                                <p className="text-gray-600 text-sm">Vision</p>
                            </nav>
                        </div> */}

                        <div className="lg:col-span-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Our Story
                            </h3>

                            <nav className="space-y-4 border-l-2 border-blue-500 pl-4">
                                <a
                                    href="#founded"
                                    className="block text-blue-600 font-semibold text-sm uppercase tracking-wide"
                                >
                                    Founded
                                </a>

                                <a
                                    href="#mission"
                                    className="block text-gray-600 text-sm hover:text-blue-600 transition"
                                >
                                    Mission
                                </a>

                                <a
                                    href="#vision"
                                    className="block text-gray-600 text-sm hover:text-blue-600 transition"
                                >
                                    Vision
                                </a>
                            </nav>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Founded */}
                            <section id="founded">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                    A Legacy of Excellence in Healthcare
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    OwnMed is a modern health-based web
                                    platform designed to simplify and improve
                                    the way people manage their healthcare.
                                    Built with innovation and trust at its core,
                                    our platform helps users stay organized,
                                    informed, and connected throughout their
                                    healthcare journey. With 3 years of
                                    experience and the trust of over 1,100 happy
                                    patients, OwnMed provides a reliable
                                    digital solution for everyday health needs —
                                    from medicine tracking to doctor
                                    appointments and healthcare service
                                    discovery.
                                </p>
                            </section>

                            {/* Mission */}
                            <section id="mission">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Mission
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    To empower individuals with smart, secure,
                                    and accessible digital healthcare tools that
                                    simplify health management, improve
                                    communication, and support better health
                                    outcomes for everyone. We are committed to
                                    making healthcare more organized,
                                    transparent, and patient-centered through
                                    modern technology.
                                </p>
                            </section>

                            {/* Vision */}
                            <section id="vision">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Vision
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    To become a trusted digital healthcare
                                    ecosystem where patients and providers
                                    connect seamlessly — enabling healthier
                                    communities through innovation, reliability,
                                    and continuous improvement. We envision a
                                    future where managing healthcare is simple,
                                    connected, and accessible anytime, anywhere.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-gray-600 text-center text-lg max-w-2xl mx-auto">
                            These principles guide everything we do and shape
                            our commitment to excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <Card
                                    key={index}
                                    className="p-6 sm:p-8 hover:shadow-lg transition-shadow"
                                >
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
                            Our Journey
                        </h2>
                        <p className="text-gray-600 text-center text-lg max-w-2xl mx-auto">
                            Key milestones that shaped our healthcare
                            organization
                        </p>
                    </div>

                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
                            >
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white font-bold text-lg">
                                        {item.year}
                                    </div>
                                </div>
                                <div className="flex-grow pt-2">
                                    <p className="text-gray-600 text-lg">
                                        {item.milestone}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#68d6ce] to-indigo-400">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
                        Ready to Experience Quality Healthcare?
                    </h2>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Join thousands of satisfied patients who have trusted us
                        with their health. Schedule an appointment today.
                    </p>
                    <PrimaryButton className="w-full md:w-1/2 lg:w-1/3">
                        Go to Dashboard
                    </PrimaryButton>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;
