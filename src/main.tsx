import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppProviders } from "./providers/AppProviders.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <AppProviders>
                <RouterProvider router={router} />
            </AppProviders>
        </ThemeProvider>
    </StrictMode>,
);
