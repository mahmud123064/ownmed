import { Chrome, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import signUpIllustration from "../../../assets/signup-illustration.jpg";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { googleLoginUser, loginUser } from "@/redux/auth/authSlice";
import toast, { Toaster } from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";

export default function SignIn() {
    // const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    // const onSubmit = (data) => {
    //     console.log("Form Data:", data);
    //     dispatch(loginUser(data))
    //         .unwrap()
    //         .then(() => {
    //             toast.success("Successfully signed in!", { removeDelay: 2000 });
    //             reset();
    //             navigate("/");
    //         })
    //         .catch(() => {});
    // };
    const onSubmit = (data) => {
  dispatch(loginUser(data))
    .unwrap()
    .then((res) => {
      toast.success("Successfully signed in!", { removeDelay: 2000 });
      reset();

      const role = res.user.role;

      if (role === "admin") {
        navigate("/dashboard");
      } else if (role === "doctor") {
        navigate("/dashboard");
      } else if (role === "pharmacy_owner") {
        navigate("/dashboard");
      } else if (role === "hospital_owner") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard");
      }
    })
    .catch(() => {});
};


    const handleGoogleSuccess = (credentialResponse) => {
        console.log("Credential Response:", credentialResponse);

        if (credentialResponse?.credential) {
            dispatch(googleLoginUser(credentialResponse.credential));
        }
        toast.success("Successfully signed in with Google!", { removeDelay: 2000 });
        navigate("/");
    };

    const handleGoogleError = () => {
        console.log("Google Login Failed");
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
                                <p className="text-red-600 text-sm text-start">
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
                        {error && (
                            <p className="text-red-600 text-sm text-center">
                                {error}
                            </p>
                        )}
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
                        <Toaster />
                    </form>
                    {/* Divider */}
                    <div className="text-center text-sm text-muted-foreground">
                        Or continue with
                    </div>
                    {/* Google Sign In Button */}

                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleError}
                        width="100%"
                        className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 border border-gray-300"
                    />
                    <Toaster />
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
