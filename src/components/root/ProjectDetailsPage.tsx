import { useParams, Link, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { projectsData } from "../../data/projects";
import { Icons } from "../../icons/Icons";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/button";
import CustomTooltip from "./CustomTooltips";
import ChipContainer from "./ChipContainer";
import ProjectsDescription from "./ProjectsDescription";
import { useSEO } from "@/hooks/useSEO";

const githubUsername = "apponislam";

export default function ProjectDetailPage() {
    const { expId } = useParams<{ expId: string }>();

    // Find project directly without useEffect
    const exp = useMemo(() => {
        if (!expId) return null;
        return projectsData.find((project) => project.id === expId);
    }, [expId]);

    useSEO({
        title: exp ? `${exp.companyName} | Appon Islam Portfolio` : "Project | Md. Appon Islam (aponislam) Portfolio",
        description: exp ? exp.descriptionDetails.paragraphs[0] : "Project by Appon Islam",
        ogTitle: exp ? `${exp.companyName} | Appon Islam Portfolio` : "Project | Md. Appon Islam (aponislam) Portfolio",
        ogDescription: exp ? exp.descriptionDetails.paragraphs[0] : "Project by Appon Islam",
        ogImage: exp ? exp.companyLogoImg : "https://4ppon.com/apponislam.png",
    });

    // If project not found, redirect immediately
    if (!exp) {
        return <Navigate to="/projects" replace />;
    }

    // Format date function
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <article className="container relative max-w-3xl py-6 lg:py-10 mx-auto">
            <Link to="/projects" className={cn(buttonVariants({ variant: "ghost" }), "absolute -left-50 top-14 hidden xl:inline-flex")}>
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                All Projects
            </Link>

            <div>
                <time dateTime={exp.startDate} className="block text-sm text-muted-foreground">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </time>
                <h1 className="flex items-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
                    {exp.companyName}
                    <div className="flex items-center">
                        {exp.githubLink && (
                            <CustomTooltip text="Link to the source code.">
                                <a href={exp.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                                    <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                                </a>
                            </CustomTooltip>
                        )}
                        {exp.websiteLink && (
                            <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                                <a href={exp.websiteLink} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                                    <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                                </a>
                            </CustomTooltip>
                        )}
                    </div>
                </h1>
                <ChipContainer textArr={exp.category} />
                <div className="mt-4 flex space-x-4">
                    <a href={`https://github.com/${githubUsername}`} className="flex items-center space-x-2 text-sm" target="_blank" rel="noopener noreferrer">
                        <img src="/apponislam.png" alt="Appon Islam" width={42} height={42} className="rounded-full bg-white" />
                        <div className="flex-1 text-left leading-tight">
                            <p className="font-medium">Appon Islam</p>
                            <p className="text-[12px] text-muted-foreground">@{githubUsername}</p>
                        </div>
                    </a>
                </div>
            </div>

            <img src={exp.companyLogoImg} alt={exp.companyName} width={720} height={405} className="my-8 rounded-md border bg-muted transition-colors" />

            <div className="mb-7">
                <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">Tech Stack</h2>
                <ChipContainer textArr={exp.techStack} />
            </div>

            <div className="mb-7">
                <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">Description</h2>
                <ProjectsDescription paragraphs={exp.descriptionDetails.paragraphs} bullets={exp.descriptionDetails.bullets} />
            </div>

            <div className="mb-7">
                <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-5">Page Info</h2>
                {exp.pagesInfoArr.map((page, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="flex items-center font-heading text-xl leading-tight lg:text-xl mt-3 mb-2">
                            <Icons.star className="h-5 w-5 mr-2 text-yellow-500" />
                            {page.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">{page.description}</p>
                        <div className="space-y-4">
                            {page.imgArr.map((img, imgIndex) => (
                                <img key={imgIndex} src={img} alt={`${page.title} screenshot ${imgIndex + 1}`} width={720} height={405} className="rounded-md border bg-muted transition-colors w-full" loading="lazy" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <hr className="mt-12 border-border" />
            <div className="flex justify-center py-6 lg:py-10">
                <Link to="/projects" className={cn(buttonVariants({ variant: "ghost" }))}>
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    All Projects
                </Link>
            </div>
        </article>
    );
}
