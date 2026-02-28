import { Pill, Clock, CalendarDays, Info } from "lucide-react";

function MedicineReminderList() {
    // Temporary static data (later replace with backend data)
    const medicines = [
        {
            id: 1,
            medicineName: "Paracetamol",
            dosage: "500mg",
            frequency: "Once Daily",
            startDate: "2026-03-01",
            endDate: "2026-03-10",
            purpose: "Fever & Headache",
            reminderTime: "09:00 AM",
            reminderDays: ["Monday", "Wednesday", "Friday"],
        },
        {
            id: 2,
            medicineName: "Vitamin D",
            dosage: "1000 IU",
            frequency: "Weekly",
            startDate: "2026-03-01",
            endDate: "2026-06-01",
            purpose: "Bone Strength",
            reminderTime: "08:00 AM",
            reminderDays: ["Sunday"],
        },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                    My Medicine Reminders
                </h2>
                <p className="text-muted-foreground">
                    View all your scheduled medicines
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {medicines.map((medicine) => (
                    <div
                        key={medicine.id}
                        className="bg-card border border-border rounded-xl p-6 space-y-4 shadow-sm hover:shadow-md transition"
                    >
                        {/* Medicine Header */}
                        <div className="flex items-center gap-3">
                            <div className="bg-primary/10 p-2 rounded-lg">
                                <Pill className="text-primary" size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">
                                    {medicine.medicineName}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {medicine.dosage}
                                </p>
                            </div>
                        </div>

                        {/* Frequency */}
                        <div className="flex items-center gap-2 text-sm">
                            <Clock size={16} />
                            <span>{medicine.frequency}</span>
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-2 text-sm">
                            <CalendarDays size={16} />
                            <span>
                                {medicine.startDate} → {medicine.endDate}
                            </span>
                        </div>

                        {/* Reminder Time */}
                        <div className="text-sm">
                            ⏰ Reminder Time:{" "}
                            <span className="font-medium">
                                {medicine.reminderTime}
                            </span>
                        </div>

                        {/* Reminder Days */}
                        <div className="flex flex-wrap gap-2">
                            {medicine.reminderDays.map((day) => (
                                <span
                                    key={day}
                                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                                >
                                    {day}
                                </span>
                            ))}
                        </div>

                        {/* Purpose */}
                        <div className="flex items-start gap-2 text-sm">
                            <Info size={16} className="mt-0.5" />
                            <span>{medicine.purpose}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MedicineReminderList;