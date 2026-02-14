import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Toast } from "radix-ui";

export default function ForgotPassword() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(
                "http://localhost:3000/api/auth/forgot-password",
                data,
            );
            console.log(res.data);
            toast.success("Password reset email sent!");
            reset();
        } catch (error) {
            console.error(error);
            toast.error(
                error.response?.data?.message || "Something went wrong",
            );
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-96">
                <h2 className="text-2xl font-bold">Forgot Password</h2>

                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                    className="w-full border p-2 rounded"
                />

                <button className="w-full bg-primary text-white py-2 rounded">
                    Send Reset Link
                </button>
                <Toaster position="top-center" />
            </form>
        </div>
    );
}
