import { useState } from "react";
import { useForm } from "react-hook-form";
import { Users, Plus, X, Heart, Droplet, Activity } from "lucide-react";
import { Button } from "../../../components/ui/button";
import toast, { Toaster } from "react-hot-toast";

export default function FamilyMembers() {
    // const [members, setMembers] = useState([
    //     {
    //         id: 1,
    //         name: "Sarah Doe",
    //         relation: "Spouse",
    //         age: 32,
    //         bloodType: "A+",
    //         health: "Good",
    //         lastCheckup: "2024-01-15",
    //         conditions: "None",
    //         image: "👩",
    //     },
    //     {
    //         id: 2,
    //         name: "Alex Doe",
    //         relation: "Child",
    //         age: 8,
    //         bloodType: "O+",
    //         health: "Excellent",
    //         lastCheckup: "2024-02-01",
    //         conditions: "None",
    //         image: "👦",
    //     },
    // ]);

    // const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, reset } = useForm({
  defaultValues: {
    name: "",
    relation: "",
    age: "",
    bloodType: "",
    conditions: "",
    lastCheckupDate: "",
    healthStatus: "",
    heartBeat: "",
    pressure: "",
    pulse: "",
    phoneNumber: "",
  },
});

const onSubmit = (data) => {
  console.log("New Family Member Data:", data);

  // Example object if you want to save it
  // const newMember = {
  //   id: Date.now(),
  //   ...data,
  //   image: data.relation === "Spouse" ? "👩" : "👦",
  // };

  // setMembers([...members, newMember]);

  reset();

  toast.success("Family member added successfully!");
};

    // const handleRemove = (id) => {
    //     setMembers(members.filter((m) => m.id !== id));
    //     toast.success("Family member removed");
    // };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                    Family Member Status
                </h2>
                <p className="text-muted-foreground">
                    Manage family health records and view health status
                </p>
            </div>

            {/* Add Member Form */}

            <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">
                        Add Family Member
                    </h3>
                    {/* <button
                            onClick={() => setShowForm(false)}
                            className="p-2 hover:bg-muted rounded transition-colors"
                        >
                            <X size={20} />
                        </button> */}
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Name
                            </label>
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                            />
                        </div>

                        {/* Relation */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Relation
                            </label>
                            <select
                                {...register("relation")}
                                defaultValue=""
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                            >
                                <option value="" disabled>
                                    Please select relation
                                </option>
                                <option value="Spouse">Spouse</option>
                                <option value="Child">Child</option>
                                <option value="Parent">Parent</option>
                                <option value="Sibling">Sibling</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Age */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Age
                            </label>
                            <input
                                {...register("age", { required: true })}
                                type="number"
                                placeholder="Age"
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                            />
                        </div>

                        {/* Blood Type */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Blood Type
                            </label>
                            <select
                                {...register("bloodType")}
                                defaultValue=""
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                            >
                                <option value="" disabled>
                                    Please select blood group
                                </option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>

                        {/* Last Checkup Date */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Last Checkup Date
                            </label>
                            <input
                                {...register("lastCheckupDate")}
                                type="date"
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                            />
                        </div>

                        {/* Health Status */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Health Status
                            </label>
                            <select
                                {...register("healthStatus")}
                                defaultValue=""
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                            >
                                <option value="" disabled>
                                    Please select health status
                                </option>
                                <option value="Bad">Bad</option>
                                <option value="Average">Average</option>
                                <option value="Good">Good</option>
                                <option value="Excellent">Excellent</option>
                            </select>
                        </div>

                        {/* Heart Beat */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Heart Beat
                            </label>
                            <input
                                {...register("heartBeat")}
                                type="number"
                                placeholder="e.g., 72 bpm"
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                            />
                        </div>

                        {/* Blood Pressure */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Blood Pressure
                            </label>
                            <input
                                {...register("pressure")}
                                type="text"
                                placeholder="Example: 120/60"
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                            />
                        </div>

                        {/* Pulse */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Pulse
                            </label>
                            <input
                                {...register("pulse")}
                                type="number"
                                placeholder="e.g., 70"
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Phone Number
                            </label>
                            <input
                                {...register("phoneNumber")}
                                type="number"
                                placeholder="e.g., +8801XXXXXXXXX"
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                            />
                        </div>

                        {/* Health Comments */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-foreground mb-2">
                                Comments about present Health
                            </label>
                            <input
                                {...register("conditions")}
                                type="text"
                                placeholder="e.g., None, Diabetes, Hypertension"
                                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-primary text-white hover:bg-primary/90"
                    >
                        Add Member
                    </Button>
                    <Toaster position="top-center" reverseOrder={false} />
                </form>
            </div>

            {/* Add Button */}
            {/* {!showForm && (
                <button
                    onClick={() => setShowForm(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                    <Plus size={20} />
                    Add Family Member
                </button>
            )} */}
        </div>
    );
}
