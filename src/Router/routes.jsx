import RootLayout from "@/Layout/RootLayout";
import AboutUs from "@/Pages/AboutUs/AboutUs";
import SignIn from "@/Pages/Authentication/SignIn/SignIn";
import SignUp from "@/Pages/Authentication/Signup/SignUp";
import HealthTips from "@/Pages/HealthTips/HealthTips";
import Home from "@/Pages/Home/Home/Home";

import {
  createBrowserRouter,
} from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
          index:true,
          Component:Home
      },
      {
        path:"/about-us",
        Component:AboutUs
      },
      {
        path:"/health-tips",
        Component:HealthTips
      },
      {
        path:"/signup",
        Component:SignUp
      },
      {
        path:"/login",
        Component:SignIn
      }

    ]
  },
]);

export default routes;