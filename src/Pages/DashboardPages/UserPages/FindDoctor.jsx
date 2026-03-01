import { useState } from "react";
import { Search, Star, MapPin, Clock } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { toast } from "react-hot-toast";

export default function FindDoctor() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDept, setSelectedDept] = useState("");
    const [openAppointmentModal, setOpenAppointmentModal] = useState(false);

    const [appointmentData, setAppointmentData] = useState({
        patientName: "",
        doctorName: "",
        date: "",
        time: "",
        notes: "",
    });

    const handleAppointmentChange = (e) => {
        const { name, value } = e.target;
        setAppointmentData({ ...appointmentData, [name]: value });
    };

    const handleAppointmentSubmit = (e) => {
        e.preventDefault();
        toast.success("Appointment booked successfully!");
        setOpenAppointmentModal(false);

        setAppointmentData({
            patientName: "",
            doctorName: "",
            date: "",
            time: "",
            notes: "",
        });
    };

    const doctors = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            specialty: "Cardiology",
            experience: "15 years",
            rating: 4.8,
            available: true,
            nextAvailable: "Tomorrow at 2 PM",
            location: "123 Medical Center, City",
            image: "https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-indian-doctor-woman-smiling-at-camera-png-image_12531120.png",
        },
        {
            id: 2,
            name: "Dr. Michael Chen",
            specialty: "Neurology",
            experience: "12 years",
            rating: 4.7,
            available: true,
            nextAvailable: "Today at 4 PM",
            location: "456 Health Plaza, City",
            image: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
        },
        {
            id: 3,
            name: "Dr. Emily Williams",
            specialty: "Dermatology",
            experience: "8 years",
            rating: 4.9,
            available: false,
            nextAvailable: "Next Monday",
            location: "789 Clinic Avenue, City",
            image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_rp_progressive&w=740&q=80",
        },
    ];

    const departments = [
        "Cardiology",
        "Neurology",
        "Dermatology",
        "Orthopedics",
        "Pediatrics",
        "General",
    ];

    const filteredDoctors = doctors.filter(
        (doc) =>
            (selectedDept === "" || doc.specialty === selectedDept) &&
            (searchTerm === "" ||
                doc.name.toLowerCase().includes(searchTerm.toLowerCase())),
    );

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                    Find Doctor
                </h2>
                <p className="text-muted-foreground">
                    Search for doctors by department and book appointments
                </p>
            </div>

            {/* Search & Filter */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="relative">
                    <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        size={20}
                    />
                    <input
                        type="text"
                        placeholder="Search doctors by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                    />
                </div>

                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedDept("")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedDept === ""
                                ? "bg-primary text-primary-foreground text-white cursor-pointer"
                                : "border border-border text-foreground hover:border-primary cursor-pointer"
                        }`}
                    >
                        All Departments
                    </button>
                    {departments.map((dept) => (
                        <button
                            key={dept}
                            onClick={() => setSelectedDept(dept)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                selectedDept === dept
                                    ? "bg-primary text-primary-foreground text-white cursor-pointer"
                                    : "border border-border text-foreground hover:border-primary cursor-pointer"
                            }`}
                        >
                            {dept}
                        </button>
                    ))}
                </div>
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="text-5xl">
                                    <img
                                        src={doctor.image}
                                        alt="Doctor"
                                        className="w-[96px] h-[96px] object-cover rounded-full"
                                    />
                                </div>
                                <div className="flex items-center gap-1">
                                    <Star
                                        size={16}
                                        className="text-yellow-500 fill-yellow-500"
                                    />
                                    <span className="font-semibold text-sm">
                                        {doctor.rating}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-foreground">
                                {doctor.name}
                            </h3>
                            <p className="text-sm text-primary font-medium">
                                {doctor.specialty}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                                {doctor.experience}
                            </p>

                            <div className="mt-4 space-y-2 py-4 border-y border-border">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <MapPin size={16} />
                                    {doctor.location}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Clock
                                        size={16}
                                        className={
                                            doctor.available
                                                ? "text-green-600"
                                                : "text-muted-foreground"
                                        }
                                    />
                                    <span
                                        className={
                                            doctor.available
                                                ? "text-green-600 font-medium"
                                                : "text-muted-foreground"
                                        }
                                    >
                                        {doctor.nextAvailable}
                                    </span>
                                </div>
                            </div>

                            <Button
                                onClick={() => setOpenAppointmentModal(true)}
                                className="w-full mt-4 bg-primary text-white hover:bg-primary/90 cursor-pointer"
                            >
                                Book Appointment
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredDoctors.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">
                        No doctors found matching your criteria
                    </p>
                </div>
            )}

            {openAppointmentModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-card w-[90%] max-w-lg rounded-xl p-6 relative shadow-lg">
                        {/* Close Button */}
                        <button
                            onClick={() => setOpenAppointmentModal(false)}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-destructive"
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-semibold mb-6">
                            Book Appointment
                        </h2>

                        <form
                            onSubmit={handleAppointmentSubmit}
                            className="space-y-4"
                        >
                            {/* Patient Name */}
                            <div>
                                <label className="text-sm font-medium">
                                    Patient Name
                                </label>
                                <input
                                    type="text"
                                    name="patientName"
                                    value={appointmentData.patientName}
                                    onChange={handleAppointmentChange}
                                    required
                                    className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background"
                                    placeholder="Enter patient name"
                                />
                            </div>

                            {/* Doctor Name */}
                            <div>
                                <label className="text-sm font-medium">
                                    Doctor Name
                                </label>
                                <input
                                    type="text"
                                    name="doctorName"
                                    value={appointmentData.doctorName}
                                    onChange={handleAppointmentChange}
                                    required
                                    className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background"
                                    placeholder="Enter doctor name"
                                />
                            </div>

                            {/* Date & Time */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={appointmentData.date}
                                        onChange={handleAppointmentChange}
                                        required
                                        className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={appointmentData.time}
                                        onChange={handleAppointmentChange}
                                        required
                                        className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background"
                                    />
                                </div>
                            </div>

                            {/* Notes */}
                            <div>
                                <label className="text-sm font-medium">
                                    Notes (Optional)
                                </label>
                                <textarea
                                    name="notes"
                                    value={appointmentData.notes}
                                    onChange={handleAppointmentChange}
                                    className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background"
                                    placeholder="Additional information..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-2 rounded-md hover:opacity-90 transition"
                            >
                                Confirm Appointment
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
