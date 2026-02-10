import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { RootLayout } from "../providers/RootLayout";
import NotFoundPage from "../components/NotFoundPage";
import SkillsPage from "../components/root/SkillPage";
import ProjectsPage from "../components/root/ProjectPage";
import ProjectDetailPage from "../components/root/ProjectDetailsPage";
import ContactPage from "../components/root/ContactPage";

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
            {
                path: "/projects/:expId",
                element: <ProjectDetailPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
