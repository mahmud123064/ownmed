import RootLayout from "@/Layout/RootLayout";
import AboutUs from "@/Pages/AboutUs/AboutUs";
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
      }

    ]
  },
]);

export default routes;