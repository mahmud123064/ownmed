import RootLayout from "@/Layout/RootLayout";
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
      }

    ]
  },
]);

export default routes;