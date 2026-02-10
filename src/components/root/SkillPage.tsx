import { pagesConfig } from "../../config/pages";
import { skillsData } from "../../data/skills";
import PageHeader from "./PageHeader";
import SkillsCard from "./SkillsCard";

export default function SkillsPage() {
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
