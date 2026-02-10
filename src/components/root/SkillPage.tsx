import { useSEO } from "@/hooks/useSEO";
import { pagesConfig } from "../../config/pages";
import { skillsData } from "../../data/skills";
import PageHeader from "./PageHeader";
import SkillsCard from "./SkillsCard";

export default function SkillsPage() {
    useSEO({
        title: "Skills | Md. Appon Islam Portfolio",
        description: "Key skills that define my professional identity, including React, TypeScript, Tailwind CSS, and modern web development.",
        ogTitle: "Skills | Md. Appon Islam Portfolio",
        ogDescription: "Key skills that define my professional identity, including React, TypeScript, Tailwind CSS, and modern web development.",
        ogImage: "https://4ppon.com/apponislam.png",
    });

    return (
        <>
            <PageHeader title={pagesConfig.skills.title} description={pagesConfig.skills.description} />
            <div className="mt-8 max-w-4xl mx-auto">
                {skillsData.length > 0 ? (
                    <SkillsCard skills={skillsData} />
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No skills are currently displayed</p>
                    </div>
                )}
            </div>
        </>
    );
}
