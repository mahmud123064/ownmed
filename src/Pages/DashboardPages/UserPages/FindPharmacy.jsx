import { useState } from "react";
import { Search, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "../../../components/ui/button";
import toast from "react-hot-toast";

export default function FindPharmacy() {
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");
    const [selectedPharmacy, setSelectedPharmacy] = useState(null);

    const pharmacies = [
        {
            id: 1,
            name: "HealthCare Pharmacy",
            address: "123 Main St, Downtown",
            phone: "+1-234-567-8900",
            distance: "0.5 km",
            hours: "Open now",
            rating: 4.5,
            discount: "10% off on all medicines",
            description:
                "Trusted pharmacy providing quality healthcare products.",
        },
        {
            id: 2,
            name: "MediPlus Pharmacy",
            address: "456 Oak Ave, Midtown",
            phone: "+1-234-567-8901",
            distance: "1.2 km",
            hours: "Open now",
            rating: 4.7,
            discount: "15% discount on prescriptions",
            description: "Fast service with home delivery available.",
        },
        {
            id: 3,
            name: "QuickMeds Pharmacy",
            address: "789 Pine Rd, Uptown",
            phone: "+1-234-567-8902",
            distance: "2.1 km",
            hours: "Closes at 10 PM",
            rating: 4.3,
            discount: "5% cashback on online orders",
            description: "Affordable medicines and 24/7 support.",
        },
    ];

    const filteredPharmacies = pharmacies.filter(
        (p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.address.toLowerCase().includes(location.toLowerCase()),
    );

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                    Find Pharmacy
                </h2>
                <p className="text-muted-foreground">
                    Locate nearby pharmacies and order medicines
                </p>
            </div>

            {/* Search */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                            size={20}
                        />
                        <input
                            type="text"
                            placeholder="Search pharmacy name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                        />
                    </div>
                    <div className="relative">
                        <MapPin
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                            size={20}
                        />
                        <input
                            type="text"
                            placeholder="Search by location..."
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                        />
                    </div>
                </div>
            </div>

            {/* Pharmacies */}
            <div className="space-y-4">
                {filteredPharmacies.map((pharmacy) => (
                    <div
                        key={pharmacy.id}
                        className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-foreground">
                                    {pharmacy.name}
                                </h3>
                                <div className="space-y-2 mt-3 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin size={16} />
                                        {pharmacy.address}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Phone size={16} />
                                        {pharmacy.phone}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock size={16} />
                                        <span className="text-green-600 font-medium">
                                            {pharmacy.hours}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-3">
                                <div className="text-right">
                                    <p className="text-sm font-medium text-foreground">
                                        {pharmacy.distance} away
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        ⭐ {pharmacy.rating}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                         {pharmacy.discount}
                                    </p>
                                </div>
                                <Button
                                    onClick={() =>
                                        setSelectedPharmacy(pharmacy)
                                    }
                                    className="bg-primary text-white hover:bg-primary/90"
                                >
                                    View Details
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPharmacy && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className=" text-primary-foreground w-[90%] max-w-xl rounded-xl p-6 relative shadow-xl border border-border"
                    style={{
                    backgroundColor: "hsl(var(--sidebar-background))",
                    borderColor: "hsl(var(--sidebar-border))",
                    color: "hsl(var(--sidebar-foreground))",
                }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedPharmacy(null)}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-destructive"
                        >
                            ✕
                        </button>

                        {/* Title */}
                        <h2 className="text-2xl font-bold mb-4">
                            {selectedPharmacy.name}
                        </h2>

                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin size={16} />
                                {selectedPharmacy.address}
                            </div>

                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Phone size={16} />
                                {selectedPharmacy.phone}
                            </div>

                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock size={16} />
                                <span className="text-green-600 font-medium">
                                    {selectedPharmacy.hours}
                                </span>
                            </div>

                            <div>
                                ⭐ Rating:{" "}
                                <span className="font-medium">
                                    {selectedPharmacy.rating}
                                </span>
                            </div>

                            <div className="pt-2">
                                <p className="font-medium">Description:</p>
                                <p className="text-muted-foreground">
                                    {selectedPharmacy.description}
                                </p>
                            </div>

                            {/* Discount Section */}
                            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                                <p className="font-semibold text-green-700 dark:text-green-400">
                                    🎉 Special Offer
                                </p>
                                <p className="text-green-600 dark:text-green-300 text-sm">
                                    {selectedPharmacy.discount}
                                </p>
                            </div>

                            <Button
                                onClick={() => {
                                    toast.success(
                                        "Redirecting to order page...",
                                    );
                                    setSelectedPharmacy(null);
                                }}
                                className="w-full mt-4 bg-primary text-white hover:bg-primary/90"
                            >
                                Order Medicines
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
