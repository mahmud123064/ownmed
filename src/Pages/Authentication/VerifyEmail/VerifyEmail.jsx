import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Mail } from "lucide-react";

export default function VerifyEmail() {
  const { token } = useParams();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await axios.get(
          // `${import.meta.env.VITE_SERVER_URL}/api/auth/verify-email/${token}`
          `http://localhost:3000/api/auth/verify-email/${token}`
        );
        setStatus("success");
      } catch (error) {
        setStatus("error");
      }
    };

    verifyUser();
  }, [token]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center space-y-6">
        <Mail className="mx-auto h-12 w-12 text-primary" />

        {status === "loading" && <h1>Verifying your email...</h1>}

        {status === "success" && (
          <>
            <h1 className="text-2xl font-bold">
              Email Verified Successfully!
            </h1>
            <Link
              to="/login"
              className="inline-block mt-4 w-full bg-primary text-white py-2.5 rounded-lg font-semibold"
            >
              Go to Login
            </Link>
          </>
        )}

        {status === "error" && (
          <h1 className="text-red-500">
            Invalid or Expired Verification Link
          </h1>
        )}
      </div>
    </div>
  );
}