import { useState } from "react";
// import { useForm } from "react-hook-form";
import { Users, Plus, X, Heart, Droplet, Activity } from "lucide-react";
import { Button } from "../../../components/ui/button";
import toast from "react-hot-toast";

export default function FamilyMemberHealthStatus() {
    const [members, setMembers] = useState([
        {
            id: 1,
            name: "Sarah Doe",
            relation: "Spouse",
            age: 32,
            bloodType: "A+",
            health: "Good",
            lastCheckup: "2024-01-15",
            conditions: "None",
           
        },
        {
            id: 2,
            name: "Alex Doe",
            relation: "Child",
            age: 8,
            bloodType: "O+",
            health: "Excellent",
            lastCheckup: "2024-02-01",
            conditions: "None",
          
        },
    ]);

    // const [showForm, setShowForm] = useState(false);
    // const { register, handleSubmit, reset } = useForm({
    //     defaultValues: {
    //         name: "",
    //         relation: "Spouse",
    //         age: "",
    //         bloodType: "O+",
    //         conditions: "",
    //     },
    // });

    // const onSubmit = (data) => {
    //     const newMember = {
    //         id: Date.now(),
    //         ...data,
    //         health: "Good",
    //         lastCheckup: new Date().toISOString().split("T")[0],
    //         image: data.relation === "Spouse" ? "👩" : "👦",
    //     };
    //     setMembers([...members, newMember]);
    //     reset();
    //     setShowForm(false);
    //     toast.success("Family member added successfully!");
    // };

    const handleRemove = (id) => {
        setMembers(members.filter((m) => m.id !== id));
        toast.success("Family member removed");
    };

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

       

            {/* Family Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {members.map((member) => (
                    <div
                        key={member.id}
                        className="bg-card border border-border rounded-lg p-6"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="text-4xl">{member.image}</div>
                                <div>
                                    <h3 className="font-bold text-foreground">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-primary font-medium">
                                        {member.relation}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemove(member.id)}
                                className="p-2 hover:bg-destructive/10 rounded transition-colors"
                            >
                                <X size={18} className="text-destructive" />
                            </button>
                        </div>

                        {/* Member Details */}
                        <div className="space-y-3 mb-4 p-4 bg-muted rounded-lg">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">
                                    Age:
                                </span>
                                <span className="font-medium text-foreground">
                                    {member.age} years
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">
                                    Blood Type:
                                </span>
                                <span className="font-medium text-foreground">
                                    {member.bloodType}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">
                                    Health Status:
                                </span>
                                <span className="font-medium text-green-600">
                                    {member.health}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">
                                    Last Checkup:
                                </span>
                                <span className="font-medium text-foreground">
                                    {member.lastCheckup}
                                </span>
                            </div>
                            {member.conditions !== "None" && (
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">
                                        Conditions:
                                    </span>
                                    <span className="font-medium text-orange-600">
                                        {member.conditions}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Health Metrics */}
                        <div className="grid grid-cols-3 gap-2">
                            <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 text-center">
                                <Heart
                                    size={16}
                                    className="mx-auto text-blue-600 dark:text-blue-400 mb-1"
                                />
                                <p className="text-xs font-medium text-blue-700 dark:text-blue-400">
                                    72 bpm
                                </p>
                            </div>
                            <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-3 text-center">
                                <Droplet
                                    size={16}
                                    className="mx-auto text-red-600 dark:text-red-400 mb-1"
                                />
                                <p className="text-xs font-medium text-red-700 dark:text-red-400">
                                    120/80
                                </p>
                            </div>
                            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 text-center">
                                <Activity
                                    size={16}
                                    className="mx-auto text-green-600 dark:text-green-400 mb-1"
                                />
                                <p className="text-xs font-medium text-green-700 dark:text-green-400">
                                    98%
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
