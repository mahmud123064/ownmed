import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "../src/Router/routes";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "./components/Dashboard/User/Header";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GoogleOAuthProvider clientId="458086924422-c2a5iirhgdtd4qqvr8n1p9d448gp4vee.apps.googleusercontent.com">
            <Provider store={store}>
                <ThemeProvider>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </Provider>
        </GoogleOAuthProvider>
    </StrictMode>,
);
