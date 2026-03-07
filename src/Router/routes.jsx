// import DashboardLayout from "@/Layout/UserDashboardLayout";
// import AdminDashboardLayout from "@/Layout/AdminDashboardLayout";
import RootLayout from "@/Layout/RootLayout";
import DashboardLayout from "@/Layout/DashboardLayout";
import AboutUs from "@/Pages/AboutUs/AboutUs";
import ForgotPassword from "@/Pages/Authentication/ForgotPassword/ForgotPassword";
import ResetPassword from "@/Pages/Authentication/ResetPassword/ResetPassword";
import SignIn from "@/Pages/Authentication/SignIn/SignIn";
import SignUp from "@/Pages/Authentication/Signup/SignUp";
import VerifyEmail from "@/Pages/Authentication/VerifyEmail/VerifyEmail";
import Overview from "@/Pages/DashboardPages/AdminPages/OverviewAdmin";
// import Overview from "@/Pages/DashboardPages/UserPages/Overview";
// import OverviewAdmin from "@/Pages/DashboardPages/UserPages/Overview";
import HealthTips from "@/Pages/HealthTips/HealthTips";
import Home from "@/Pages/Home/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import RoleProtectedRoute from "./RoleProtectedRoute";
import Profile from "@/Pages/DashboardPages/UserPages/Profile";
import AddMedicine from "@/Pages/DashboardPages/UserPages/AddMedicine";
import MedicineDetails from "@/Pages/DashboardPages/UserPages/MedicineDetails";
import MedicineRemainder from "@/Pages/DashboardPages/UserPages/MedicineRemainder";
import UploadPrescription from "@/Pages/DashboardPages/UserPages/UploadPrescription";
import UploadReport from "@/Pages/DashboardPages/UserPages/UploadReport";
import FindDoctor from "@/Pages/DashboardPages/UserPages/FindDoctor";
import MyAppointments from "@/Pages/DashboardPages/UserPages/MyAppointments";
import FindPharmacy from "@/Pages/DashboardPages/UserPages/FindPharmacy";
import AddFamilyMember from "@/Pages/DashboardPages/UserPages/AddFamilyMember";
import FamilyMemberHealthStatus from "@/Pages/DashboardPages/UserPages/FamilyMemberHealthStatus";

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
                path: "/verify-email/:token",
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
                <DashboardLayout />
            </RoleProtectedRoute>
        ),
         children: [
    {
      index: true,   // Default route: /dashboard
      element: <Overview />,
    },
    {
      path: "profile",  // becomes /dashboard/profile
      element: <Profile />,
    },
    {
      path: "add-medicine",  // becomes /dashboard/add-medicine
      element: <AddMedicine />,
    },
    {
      path: "medicine-details",  // becomes /dashboard/medicine-details
      element: <MedicineDetails />,
    },
    {
      path: "medicine-reminders",  // becomes /dashboard/medicine-reminders
      element: <MedicineRemainder />,
    },
    {
      path: "upload-prescription",  // becomes /dashboard/upload-prescription
      element: <UploadPrescription />,
    },
    {
      path: "upload-report",  // becomes /dashboard/upload-report
      element: <UploadReport />,
    },
    {
      path: "find-doctor",  // becomes /dashboard/find-doctor
      element: <FindDoctor />,
    },
    {
      path: "my-appointments",  // becomes /dashboard/my-appointments
      element: <MyAppointments />,
    },
    {
      path: "find-pharmacy",  // becomes /dashboard/find-pharmacy
      element: <FindPharmacy />,
    },
    {
      path: "add-family-member",  // becomes /dashboard/add-family-member
      element: <AddFamilyMember />,
    },
    {
      path: "add-family-member",  // becomes /dashboard/add-family-member
      element: <AddFamilyMember />,
    },
    {
      path: "family-health-status",  // becomes /dashboard/family-health-status
      element: <FamilyMemberHealthStatus />,
    },
  ],
    },
]);

export default routes;
