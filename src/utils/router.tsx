import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { RootLayout } from "../providers/RootLayout";
import NotFoundPage from "../components/NotFoundPage";

// Lazy pages

const HomePage = lazy(() => import("../components/HomePage"));

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
