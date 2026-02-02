import { useState } from "react";
import { Eye, EyeOff, Upload, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import signUpIllustration from "../../../assets/signup-illustration.jpg";


export default function SignUp() {
 
    const [imagePreview, setImagePreview] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Allow only numeric input for phone
        if (name === "phone" && value && !/^\d*$/.test(value)) {
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validate file is an image
            if (!file.type.startsWith("image/")) {
                setErrors((prev) => ({
                    ...prev,
                    image: "Please upload a valid image file",
                }));
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                setImagePreview(event.target?.result);
                setErrors((prev) => ({
                    ...prev,
                    image: "",
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setImagePreview(null);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (formData.phone.length < 9) {
            newErrors.phone = "Phone number must be at least 9 digits";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log("Form submitted:", formData, "Image:", imagePreview);
            setIsLoading(false);
            // Handle successful submission here
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4 py-12">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Side - Illustration */}
                <div className="hidden md:flex flex-col justify-center items-center">
                    <div className="relative w-full max-w-md">
                        <div className="absolute -inset-4 bg-gradient-to-r from-teal-200/30 to-blue-200/30 rounded-2xl blur-xl"></div>
                        <img
                            src={signUpIllustration}
                            alt="Healthcare professional consulting with patient"
                            className="relative w-full h-auto rounded-2xl shadow-2xl shadow-teal-200/40 object-cover"
                        />
                    </div>
                    <div className="mt-8 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Your Health, Our Priority
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Join thousands of users who trust us with their
                            health journey. Professional care, personalized
                            experience.
                        </p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full max-w-md mx-auto md:mx-0">
                    {/* Card */}
                    <div className="bg-white rounded-2xl shadow-lg shadow-blue-100/50 p-8 md:p-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                Create Account
                            </h1>
                            <p className="text-gray-600">
                                Join us and take control of your health journey
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-gray-800 mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    className={`w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-200 focus:outline-none font-medium ${
                                        errors.name
                                            ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-primary"
                                            : "border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary"
                                    }`}
                                    aria-invalid={!!errors.name}
                                    aria-describedby={
                                        errors.name ? "name-error" : undefined
                                    }
                                />
                                {errors.name && (
                                    <p
                                        id="name-error"
                                        className="text-red-600 text-sm mt-1.5 font-medium"
                                    >
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-800 mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="you@example.com"
                                    className={`w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-200 focus:outline-none font-medium ${
                                        errors.email
                                            ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-primary"
                                            : "border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary"
                                    }`}
                                    aria-invalid={!!errors.email}
                                    aria-describedby={
                                        errors.email ? "email-error" : undefined
                                    }
                                />
                                {errors.email && (
                                    <p
                                        id="email-error"
                                        className="text-red-600 text-sm mt-1.5 font-medium"
                                    >
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-gray-800 mb-2"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="••••••••"
                                        className={`w-full px-4 py-2.5 pr-12 rounded-lg border-2 transition-all duration-200 focus:outline-none font-medium ${
                                            errors.password
                                                ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-200"
                                                : "border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary"
                                        }`}
                                        aria-invalid={!!errors.password}
                                        aria-describedby={
                                            errors.password
                                                ? "password-error"
                                                : undefined
                                        }
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p
                                        id="password-error"
                                        className="text-red-600 text-sm mt-1.5 font-medium"
                                    >
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-semibold text-gray-800 mb-2"
                                >
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="confirmPassword"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="••••••••"
                                        className={`w-full px-4 py-2.5 pr-12 rounded-lg border-2 transition-all duration-200 focus:outline-none font-medium ${
                                            errors.confirmPassword
                                                ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-200"
                                                : "border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary"
                                        }`}
                                        aria-invalid={!!errors.confirmPassword}
                                        aria-describedby={
                                            errors.confirmPassword
                                                ? "confirmPassword-error"
                                                : undefined
                                        }
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword,
                                            )
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                                        aria-label={
                                            showConfirmPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p
                                        id="confirmPassword-error"
                                        className="text-red-600 text-sm mt-1.5 font-medium"
                                    >
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            {/* Profile Image Upload */}
                            <div>
                                <label
                                    htmlFor="profileImage"
                                    className="block text-sm font-semibold text-gray-800 mb-2"
                                >
                                    Profile Picture
                                </label>
                                {!imagePreview ? (
                                    <label
                                        htmlFor="profileImage"
                                        className="flex flex-col items-center justify-center w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-[#68d6ce]/50 hover:text-white transition-all duration-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
                                    >
                                        <Upload
                                            size={24}
                                            className="text-gray-400 mb-2"
                                        />
                                        <span className="text-sm font-medium text-gray-600">
                                            Click to upload or drag and drop
                                        </span>
                                        <span className="text-xs text-gray-500 mt-1">
                                            PNG, JPG or GIF (max 5MB)
                                        </span>
                                        <input
                                            id="profileImage"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                            aria-label="Upload profile picture"
                                        />
                                    </label>
                                ) : (
                                    <div className="relative">
                                        <img
                                            src={
                                                imagePreview ||
                                                "/placeholder.svg"
                                            }
                                            alt="Profile preview"
                                            className="w-full h-48 object-cover rounded-lg border-2 border-primary"
                                        />
                                        <button
                                            type="button"
                                            onClick={removeImage}
                                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                            aria-label="Remove image"
                                        >
                                            <X size={18} />
                                        </button>
                                        <label
                                            htmlFor="profileImage"
                                            className="mt-3 flex justify-center px-4 py-2 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-teal-50/50 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"
                                        >
                                            <span className="text-sm font-medium text-gray-600">
                                                Change image
                                            </span>
                                            <input
                                                id="profileImage"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                className="hidden"
                                                aria-label="Change profile picture"
                                            />
                                        </label>
                                    </div>
                                )}
                                {errors.image && (
                                    <p className="text-red-600 text-sm mt-1.5 font-medium">
                                        {errors.image}
                                    </p>
                                )}
                            </div>

                            {/* Phone Number Field  */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Phone Number
                                </label>
                                <div className="flex gap-3">
                                   
                                    {/* Phone Input */}
                                    <div className="flex-1">
                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number With Country code"
                                            className={`w-full px-4 py-2.5 rounded-lg border-2 transition-all duration-200 focus:outline-none font-medium ${
                                                errors.phone
                                                    ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-200"
                                                    : "border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary"
                                            }`}
                                            aria-invalid={!!errors.phone}
                                            aria-describedby={
                                                errors.phone
                                                    ? "phone-error"
                                                    : undefined
                                            }
                                        />
                                    </div>
                                </div>
                                {errors.phone && (
                                    <p
                                        id="phone-error"
                                        className="text-red-600 text-sm mt-1.5 font-medium"
                                    >
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-primary transition hover:bg-primary/70 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 mt-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 active:scale-95"
                            >
                                {isLoading
                                    ? "Creating Account..."
                                    : "Create Account"}
                            </button>
                        </form>

                        {/* Sign In Link */}
                        <div className="text-center mt-6">
                            <p className="text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    href="/signin"
                                    className="font-semibold text-primary hover:text-primary/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded px-1"
                                >
                                    Sign In
                                </Link>

                            </p>
                        </div>
                    </div>
                    {/* Card */}
                </div>
            </div>
        </div>
    );
}
