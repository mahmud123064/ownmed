import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function ResetPassword() {
    const { token } = useParams();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                `http://localhost:3000/api/auth/reset-password/${token}`,
                {
                    password,
                },
            );
            toast.success("Password reset successful!");
            navigate("/signin");
        } catch (error) {
            console.error(error);
            toast.error(
                error.response?.data?.message || "Something went wrong",
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 w-96">
                <h2 className="text-2xl font-bold">Reset Password</h2>

                <input
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-2 rounded"
                />

                <button className="w-full bg-primary text-white py-2 rounded">
                    Reset Password
                </button>
            </form>
        </div>
    );
}
