import { Chrome, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import signUpIllustration from "../../../assets/signup-illustration.jpg";
import { useForm } from "react-hook-form";
// import bcrypt from "bcryptjs";



export default function SignIn() {



    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        console.log("Form Data:", data);

        // simulate API call
        setTimeout(() => {
            setIsLoading(false);
            reset();
        }, 1000);
    };

    const handleGoogleSignIn = () => {
        console.log("Sign in with Google");
    };

    return (
        <div className="min-h-screen w-full bg-background flex">
            {/* Left Image */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
                <img
                    src={signUpIllustration}
                    alt="Sign in illustration"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="w-full max-w-md space-y-6">
                    {/* Header */}
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold">Sign In</h1>
                        <p className="text-sm text-muted-foreground">
                            Welcome back! Please sign in to your account
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        {/* Email */}
                        <div className="space-y-2">
                            <Label
                                className="block text-sm font-semibold text-gray-800 mb-2"
                                htmlFor="email"
                            >
                                Email
                            </Label>
                            <div className="relative flex items-center">
                                <Mail className="absolute left-3 h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    {...register("email", {
                                        required: "Email address is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message:
                                                "Enter a valid email address",
                                        },
                                    })}
                                     className={`w-full pl-10 py-2.5 rounded-lg border-2 transition-all duration-200 focus:outline-none font-medium ${
                                        errors.email
                                            ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-primary"
                                            : "border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary"
                                    }`}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-600 text-sm">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <Label
                                className="block text-sm font-semibold text-gray-800 mb-2"
                                htmlFor="password"
                            >
                                Password
                            </Label>
                            <div className="relative flex items-center">
                                <Lock className="absolute left-3  h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message:
                                                "Password must be at least 8 characters",
                                        },
                                    })}
                                   className={`w-full pl-10 py-2.5 rounded-lg border-2 transition-all duration-200 focus:outline-none font-medium ${
                                        errors.email
                                            ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-primary"
                                            : "border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary"
                                    }`}
                                />
                            </div>
                            {errors.password && (
                                <p className="text-red-600 text-sm">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <Link
                                to="/forgot-password"
                                className="text-sm text-primary hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full text-white"
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="text-center text-sm text-muted-foreground">
                        Or continue with
                    </div>

                    {/* Google Sign In Button */}
                    <Button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 border border-gray-300"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        Continue with Google
                    </Button>

                    {/* Signup */}
                    <p className="text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-primary font-semibold hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
