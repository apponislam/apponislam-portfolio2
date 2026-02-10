import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { RootLayout } from "../providers/RootLayout";
import NotFoundPage from "../components/NotFoundPage";
import SkillsPage from "../components/root/SkillPage";
import ProjectsPage from "../components/root/ProjectPage";

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
            {
                path: "/projects",
                element: <ProjectsPage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
