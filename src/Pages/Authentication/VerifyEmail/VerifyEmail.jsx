
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function VerifyEmail() {

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center space-y-6">
        <Mail className="mx-auto h-12 w-12 text-primary" />
        <h1 className="text-2xl font-bold"> Your Email Verified Successfully!</h1>
        <p className="text-gray-600">
          We have sent a verification link to your email. Please check your inbox 
          (and spam folder) to verify your account before logging in.
        </p>
        <Link
          to="/login"
          className="inline-block mt-4 w-full bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200"
        >
          Go to Login
        </Link>
        {/* <p className="text-sm text-gray-500">
          Didn't receive the email?{" "}
          <Link to="/resend-verification" className="text-primary hover:underline">
            Resend
          </Link>
        </p> */}
      </div>
    </div>
  );
}


