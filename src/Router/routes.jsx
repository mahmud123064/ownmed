// import DashboardLayout from "@/Layout/UserDashboardLayout";
import AdminDashboardLayout from "@/Layout/AdminDashboardLayout";
import RootLayout from "@/Layout/RootLayout";
import UserDashboardLayout from "@/Layout/UserDashboardLayout";
import AboutUs from "@/Pages/AboutUs/AboutUs";
import ForgotPassword from "@/Pages/Authentication/ForgotPassword/ForgotPassword";
import ResetPassword from "@/Pages/Authentication/ResetPassword/ResetPassword";
import SignIn from "@/Pages/Authentication/SignIn/SignIn";
import SignUp from "@/Pages/Authentication/Signup/SignUp";
import VerifyEmail from "@/Pages/Authentication/VerifyEmail/VerifyEmail";
import Overview from "@/Pages/DashboardPages/AdminPages/OverviewAdmin";
// import Overview from "@/Pages/DashboardPages/UserPages/Overview";
import OverviewAdmin from "@/Pages/DashboardPages/UserPages/Overview";
import HealthTips from "@/Pages/HealthTips/HealthTips";
import Home from "@/Pages/Home/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import RoleProtectedRoute from "./RoleProtectedRoute";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/about-us",
                Component: AboutUs,
            },
            {
                path: "/health-tips",
                Component: HealthTips,
            },
            {
                path: "/signup",
                Component: SignUp,
            },
            {
                path: "/login",
                Component: SignIn,
            },
            {
                path: "/reset-password/:token",
                Component: ResetPassword,
            },
            {
                path: "/forgot-password",
                Component: ForgotPassword,
            },
            {
                path: "/verify-email",
                Component: VerifyEmail,
            },
        ],
    },
    // User DashboardLayout
    // {
    //     path:"/dashboard",
    //     Component:UserDashboardLayout,
    //     children:[
    //         {
    //             path:"/dashboard",
    //             Component:Overview
    //         }
    //     ]
    // },

    // // Admin DashboardLayout (if needed in the future)
    // {
    //     path:"/admin-dashboard",
    //     Component:AdminDashboardLayout,
    //     children:[
    //         {
    //             path:"/admin-dashboard",
    //             Component:OverviewAdmin
    //         }
    //     ]
    // }

    {
        path: "/dashboard",
        element: (
            <RoleProtectedRoute
                allowedRoles={[
                    "user",
                    "doctor",
                    "pharmacy_owner",
                    "hospital_owner",
                    "admin",
                ]}
            >
                <UserDashboardLayout />
            </RoleProtectedRoute>
        ),
        children: [
            {
                path:"/dashboard",
                element: <Overview />,
            },
        ],
    },
]);

export default routes;
