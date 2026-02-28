// import { AlertCircle, Pill, SquarePen } from "lucide-react";
// import React from "react";

// export default function MedicineDetails() {
//     const medicineList = [
//         {
//             id: 1,
//             name: "Aspirin",
//             dosage: "500mg",
//             frequency: "Twice daily",
//             status: "Active",
//         },
//         {
//             id: 2,
//             name: "Vitamin D",
//             dosage: "1000IU",
//             frequency: "Once daily",
//             status: "Active",
//         },
//         {
//             id: 3,
//             name: "Lisinopril",
//             dosage: "10mg",
//             frequency: "Once daily",
//             status: "Active",
//         },
//     ];

//     return (
//         <div className="space-y-6">
//             <div>
//                 <h2 className="text-3xl font-bold text-foreground mb-2">
//                     Medicine Details
//                 </h2>
//                 <p className="text-muted-foreground">
//                     View Your medicine details
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6 space-y-4">
//                     <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
//                         <AlertCircle
//                             className="text-blue-600 dark:text-blue-400"
//                             size={20}
//                         />
//                         <p className="text-sm text-blue-900 dark:text-blue-100">
//                             Your current medicines and their details are listed below. You can edit or update them as needed to keep your health on track.
//                         </p>
//                     </div>

//                     <div className="bg-card border border-border rounded-lg p-6">
//                         <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
//                             <Pill size={20} className="text-primary" />
//                             Current Medicines
//                         </h3>
//                         <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                             {medicineList.map((medicine) => (
//                                 <div
//                                     key={medicine.id}
//                                     className="p-3 border border-border rounded-lg hover:bg-muted transition-colors"
//                                 >
//                                     <p>day</p>
//                                     <div className="flex justify-between gap-2 mb-2 ">
//                                         <div>
//                                             <p className="font-medium text-foreground text-sm">
//                                                 {medicine.name}
//                                             </p>
//                                             <p className="text-xs text-muted-foreground mt-1">
//                                                 {medicine.dosage}
//                                             </p>
//                                             <p className="text-xs text-muted-foreground">
//                                                 {medicine.frequency}
//                                             </p>

//                                             <SquarePen className="text-muted-foreground hover:text-foreground cursor-pointer mt-2" size={16}  />
//                                         </div>
//                                         <span className="flex justify-center items-center mt-0 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full font-medium">
//                                             {medicine.status}
//                                         </span>

//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import {
    Pill,
    Clock,
    CalendarDays,
    Info,
    Pencil,
    Trash2,
    AlertCircle,
} from "lucide-react";

function MedicineDetails() {
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
        {
            id: 3,
            medicineName: "Napa",
            dosage: "500mg",
            frequency: "Weekly",
            startDate: "2026-03-01",
            endDate: "2026-06-01",
            purpose: "Bone Strength",
            reminderTime: "08:00 AM",
            reminderDays: ["Sunday"],
        },
    ];

    const handleEdit = (id) => {
        console.log("Edit medicine:", id);
    };

    const handleDelete = (id) => {
        console.log("Delete medicine:", id);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                    Medicine Details
                </h2>
                <p className="text-muted-foreground">
                    Medicine details and reminder information to help you stay
                    on track with your health goals. You can edit or delete any
                    medicine as needed.
                </p>
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <AlertCircle
                    className="text-blue-600 dark:text-blue-400 mt-1"
                    size={20}
                />
                <p className="text-sm text-blue-900 dark:text-blue-100">
                    View your current medicines, their dosages, frequencies, and reminder schedules. Keep your health on track by managing your medicines effectively.
                </p>
            
               
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {medicines.map((medicine) => (
                    <div
                        key={medicine.id}
                        className="relative bg-card border border-border rounded-xl p-6 space-y-4 shadow-sm hover:shadow-md transition"
                    >
                        {/* Edit & Delete Icons */}
                        <div className="absolute top-4 right-4 flex gap-3">
                            <button
                                onClick={() => handleEdit(medicine.id)}
                                className="text-muted-foreground hover:text-primary transition"
                            >
                                <Pencil size={18} />
                            </button>

                            <button
                                onClick={() => handleDelete(medicine.id)}
                                className="text-muted-foreground hover:text-red-500 transition"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>

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

export default MedicineDetails;
