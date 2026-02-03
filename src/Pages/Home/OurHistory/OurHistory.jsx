import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";

export default function OurHistory() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Healthcare Statistics Section */}
            <section
                className="relative w-full min-h-screen bg-gradient-to-br from-blue-200 to-blue-700 overflow-hidden flex items-center justify-center"
                style={{
                    backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220603/pngtree-doctor-working-in-hospital-with-other-doctors-background-banner-nurses-photo-image_46961770.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Blue overlay for better text readability */}
                <div className="absolute inset-0 bg-primary/60" />

                {/* Content */}
                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
                    <div className="max-w-7xl mx-auto">
                        {/* Left side - Main content */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                            {/* Left column */}
                            <div className="flex flex-col justify-center space-y-8">
                                <div>
                                    <p className="text-xs sm:text-sm font-bold text-blue-100 tracking-widest uppercase mb-4">
                                        Fun Facts
                                    </p>
                                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-balance">
                                        Over 5,100 patients trust us
                                    </h1>
                                </div>

                                <PrimaryButton className="w-full md:w-1/2 lg:w-1/3">
                                    Go to Dashboard
                                </PrimaryButton>
                            </div>

                        
                            {/* Right column - Stats Grid */}
                            <div className="relative grid grid-cols-2 grid-rows-2 gap-6 sm:gap-8 ">
                                {/* Center lines */}
                                <div className="absolute inset-0 pointer-events-none">
                                    {/* Vertical line */}
                                    <div className="absolute left-1/2 top-4 h-full w-px bg-white/40 hover:bg-white/60"></div>
                                    {/* Horizontal line */}
                                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/40"></div>
                                </div>

                                {/* Stat 1 */}
                                <div className="space-y-2 text-center sm:text-left flex flex-col justify-center">
                                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                                        30
                                    </div>
                                    <p className="text-sm sm:text-base text-blue-100">
                                        Years of Experienced
                                    </p>
                                </div>

                                {/* Stat 2 */}
                                <div className="space-y-2 text-center sm:text-left flex flex-col justify-center">
                                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                                        4,500
                                    </div>
                                    <p className="text-sm sm:text-base text-blue-100">
                                        Happy Patients
                                    </p>
                                </div>

                                {/* Stat 3 */}
                                <div className="space-y-2 text-center sm:text-left flex flex-col justify-center">
                                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                                        84
                                    </div>
                                    <p className="text-sm sm:text-base text-blue-100">
                                        Number of Doctors
                                    </p>
                                </div>

                                {/* Stat 4 */}
                                <div className="space-y-2 text-center sm:text-left flex flex-col justify-center">
                                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                                        300
                                    </div>
                                    <p className="text-sm sm:text-base text-blue-100">
                                        Number of Staffs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
