
// import { useForm } from 'react-hook-form';
// import { Button } from '../../../components/ui/button';
// import toast from 'react-hot-toast';
// import { Pill, Clock, AlertCircle } from 'lucide-react';

// export default function AddMedicine() {
//   const { register, handleSubmit, watch } = useForm({
//     defaultValues: {
//       medicineName: '',
//       dosage: '',
//       frequency: 'once-daily',
//       startDate: '',
//       endDate: '',
//       purpose: '',
//       reminderTime: '09:00',
//       reminderDays: ['Monday', 'Wednesday', 'Friday']
//     }
//   });

//   const frequencyValue = watch('frequency');

//   const onSubmit = (data) => {
//     console.log('Medicine added:', data);
//     toast.success('Medicine added successfully!');
//   };

//   const medicineList = [
//     { id: 1, name: 'Aspirin', dosage: '500mg', frequency: 'Twice daily', status: 'Active' },
//     { id: 2, name: 'Vitamin D', dosage: '1000IU', frequency: 'Once daily', status: 'Active' },
//     { id: 3, name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', status: 'Active' }
//   ];

//   return (
//     <div className="space-y-6">
//       <div>
//         <h2 className="text-3xl font-bold text-foreground mb-2">Add Medicine</h2>
//         <p className="text-muted-foreground">Add medicine details and set reminders</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Form */}
//         <div className="lg:col-span-2">
//           <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border rounded-lg p-6 space-y-4">
//             <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
//               <AlertCircle className="text-blue-600 dark:text-blue-400" size={20} />
//               <p className="text-sm text-blue-900 dark:text-blue-100">Add your medicines and set reminders to never miss a dose</p>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-foreground mb-2">Medicine Name</label>
//               <input
//                 {...register('medicineName', { required: true })}
//                 type="text"
//                 placeholder="e.g., Aspirin, Vitamin D"
//                 className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
//               />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Dosage</label>
//                 <input
//                   {...register('dosage', { required: true })}
//                   type="text"
//                   placeholder="e.g., 500mg, 1000IU"
//                   className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Frequency</label>
//                 <select
//                   {...register('frequency')}
//                   className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
//                 >
//                   <option value="once-daily">Once Daily</option>
//                   <option value="twice-daily">Twice Daily</option>
//                   <option value="thrice-daily">Three Times Daily</option>
//                   <option value="as-needed">As Needed</option>
//                 </select>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Start Date</label>
//                 <input
//                   {...register('startDate', { required: true })}
//                   type="date"
//                   className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">End Date</label>
//                 <input
//                   {...register('endDate')}
//                   type="date"
//                   className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-foreground mb-2">Purpose</label>
//               <textarea
//                 {...register('purpose')}
//                 placeholder="Why are you taking this medicine?"
//                 rows="3"
//                 className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input resize-none"
//               />
//             </div>

//             <div className="border-t border-border pt-4">
//               <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
//                 <Clock size={18} className="text-primary" />
//                 Reminder Scheduling
//               </h3>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-foreground mb-2">Reminder Time</label>
//                   <input
//                     {...register('reminderTime')}
//                     type="time"
//                     className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
//                   />
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <label className="block text-sm font-medium text-foreground mb-3">Days</label>
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                   {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
//                     <label key={day} className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="checkbox"
//                         defaultChecked={['Monday', 'Wednesday', 'Friday'].includes(day)}
//                         className="w-4 h-4 rounded border-border focus:ring-2 focus:ring-primary"
//                       />
//                       <span className="text-sm text-foreground">{day.slice(0, 3)}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
//               Add Medicine
//             </Button>
//           </form>
//         </div>

//         {/* Current Medicines */}
//         <div className="bg-card border border-border rounded-lg p-6">
//           <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
//             <Pill size={20} className="text-primary" />
//             Current Medicines
//           </h3>
//           <div className="space-y-3">
//             {medicineList.map((medicine) => (
//               <div key={medicine.id} className="p-3 border border-border rounded-lg hover:bg-muted transition-colors">
//                 <p className="font-medium text-foreground text-sm">{medicine.name}</p>
//                 <p className="text-xs text-muted-foreground mt-1">{medicine.dosage}</p>
//                 <p className="text-xs text-muted-foreground">{medicine.frequency}</p>
//                 <span className="inline-block mt-2 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full font-medium">
//                   {medicine.status}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { AlertCircle, Pill } from "lucide-react";

function AddMedicine() {
    const [formData, setFormData] = useState({
        medicineName: "",
        dosage: "",
        frequency: "once-daily",
        startDate: "",
        endDate: "",
        purpose: "",
        reminderTime: "09:00",
        reminderDays: ["Monday", "Wednesday", "Friday"],
    });

    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDayToggle = (day) => {
        if (formData.reminderDays.includes(day)) {
            setFormData({
                ...formData,
                reminderDays: formData.reminderDays.filter(
                    (d) => d !== day
                ),
            });
        } else {
            setFormData({
                ...formData,
                reminderDays: [...formData.reminderDays, day],
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Medicine Reminder Data:", formData);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                   Add a New Medicine 
                </h2>
                <p className="text-muted-foreground">
                    Add new medicines to stay on track with your health goals.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="bg-card border border-border rounded-lg p-6 space-y-6">

                    {/* Info Box */}
                    <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                        <AlertCircle
                            className="text-blue-600 dark:text-blue-400 mt-1"
                            size={20}
                        />
                        <p className="text-sm text-blue-900 dark:text-blue-100">
                            Adding your medicines and setting reminders helps you stay consistent and never miss a dose. Keep your health on track!
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        {/* Medicine Name + Dosage */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Medicine Name
                                </label>
                                <input
                                    type="text"
                                    name="medicineName"
                                    value={formData.medicineName}
                                    onChange={handleChange}
                                    className="w-full border border-border rounded-md px-3 py-2 bg-background"
                                    placeholder="Paracetamol"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Dosage
                                </label>
                                <input
                                    type="text"
                                    name="dosage"
                                    value={formData.dosage}
                                    onChange={handleChange}
                                    className="w-full border border-border rounded-md px-3 py-2 bg-background"
                                    placeholder="500mg"
                                />
                            </div>
                        </div>

                        {/* Frequency */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Frequency
                            </label>
                            <select
                                name="frequency"
                                value={formData.frequency}
                                onChange={handleChange}
                                className="w-full border border-border rounded-md px-3 py-2 bg-background"
                            >
                                <option value="once-daily">
                                    Once Daily
                                </option>
                                <option value="twice-daily">
                                    Twice Daily
                                </option>
                                <option value="thrice-daily">
                                    Three Times Daily
                                </option>
                                <option value="weekly">
                                    Weekly
                                </option>
                            </select>
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    className="w-full border border-border rounded-md px-3 py-2 bg-background"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    className="w-full border border-border rounded-md px-3 py-2 bg-background"
                                />
                            </div>
                        </div>

                        {/* Purpose */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Purpose
                            </label>
                            <textarea
                                name="purpose"
                                value={formData.purpose}
                                onChange={handleChange}
                                className="w-full border border-border rounded-md px-3 py-2 bg-background"
                                placeholder="Fever, headache, etc."
                            />
                        </div>

                        {/* Reminder Time */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Reminder Time
                            </label>
                            <input
                                type="time"
                                name="reminderTime"
                                value={formData.reminderTime}
                                onChange={handleChange}
                                className="w-full border border-border rounded-md px-3 py-2 bg-background"
                            />
                        </div>

                        {/* Reminder Days */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Reminder Days
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {daysOfWeek.map((day) => (
                                    <button
                                        type="button"
                                        key={day}
                                        onClick={() =>
                                            handleDayToggle(day)
                                        }
                                        className={`px-3 py-1 rounded-full border text-sm ${
                                            formData.reminderDays.includes(day)
                                                ? "bg-primary text-white border-primary"
                                                : "border-border"
                                        }`}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="bg-primary text-white px-6 py-2 rounded-md hover:opacity-90 transition"
                        >
                            Save Reminder
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddMedicine;
