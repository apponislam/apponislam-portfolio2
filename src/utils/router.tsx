import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { RootLayout } from "../providers/RootLayout";
import NotFoundPage from "../components/NotFoundPage";
import SkillsPage from "../components/root/SkillPage";

const HomePage = lazy(() => import("../components/HomePage"));

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/skills",
                element: <SkillsPage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
