import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppProvider } from "./providers/AppProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { ModalProvider } from "./providers/ModalProvider.tsx";
import { ReduxProvider } from "./providers/ReduxProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ReduxProvider>
            <ThemeProvider>
                <AppProvider>
                    <ModalProvider />
                    <RouterProvider router={router} />
                </AppProvider>
            </ThemeProvider>
        </ReduxProvider>
    </StrictMode>,
);
