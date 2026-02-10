"use client";

import { useState } from "react";
import { projectsData, type Project } from "../../data/projects";
import PageHeader from "./PageHeader";
import { pagesConfig } from "../../config/pages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProjectCard from "./ProjectCard";
import { cn } from "../../lib/utils";
import { useSEO } from "@/hooks/useSEO";

function ProjectContainer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("flex items-center justify-center mb-4 md:mb-0 [&>div]:w-full ", className)} {...props} />;
}

const ProjectsPage = () => {
    useSEO({
        title: "Projects | Md. Appon Islam (aponislam) Portfolio",
        description: "Explore my portfolio projects, web applications, and front-end development work built with modern technologies.",
        ogTitle: "Projects | Md. Appon Islam (aponislam) Portfolio",
        ogDescription: "Explore my portfolio projects, web applications, and front-end development work built with modern technologies.",
        ogImage: "https://4ppon.com/apponislam.png",
    });

    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);

    const handleTabChange = (value: string) => {
        if (value === "all") {
            setFilteredProjects(projectsData);
        } else if (value === "personal") {
            setFilteredProjects(projectsData.filter((project) => project.type === "Personal Project"));
        } else if (value === "professional") {
            setFilteredProjects(projectsData.filter((project) => project.type === "Professional"));
        }
    };

    return (
        <>
            <PageHeader title={pagesConfig.projects.title} description={pagesConfig.projects.description} />
            <Tabs defaultValue="all" className="w-full" onValueChange={handleTabChange}>
                <TabsList className="conatiner grid max-w-120 grid-cols-3">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="personal">Personal</TabsTrigger>
                    <TabsTrigger value="professional">Professional</TabsTrigger>
                </TabsList>
                <div className="2xl:w-334 mx-auto">
                    <TabsContent value="all" className="w-full">
                        <div className="container items-start justify-center gap-6 rounded-lg pt-8 p-0 md:p-8 sm:grid md:grid-cols-2 lg:grid-cols-3">
                            {filteredProjects.map((project) => (
                                <ProjectContainer key={project.id}>
                                    <ProjectCard project={project} />
                                </ProjectContainer>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="professional">
                        <div className="container items-start justify-center gap-6 rounded-lg pt-8 p-0 md:p-8 sm:grid md:grid-cols-2 lg:grid-cols-3">
                            {filteredProjects.map((project) => (
                                <ProjectContainer key={project.id}>
                                    <ProjectCard project={project} />
                                </ProjectContainer>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="personal">
                        <div className="container items-start justify-center gap-6 rounded-lg pt-8 p-0 md:p-8 sm:grid md:grid-cols-2 lg:grid-cols-3">
                            {filteredProjects.map((project) => (
                                <ProjectContainer key={project.id}>
                                    <ProjectCard project={project} />
                                </ProjectContainer>
                            ))}
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </>
    );
};

export default ProjectsPage;
