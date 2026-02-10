import { Link } from "react-router-dom";
import { Icons } from "../icons/Icons";
import { cn } from "../lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { pagesConfig } from "../config/pages";
import ScrollButton from "./root/ScrollButton";
import SkillsCard from "./root/SkillsCard";
import { skillsData } from "../data/skills";
import { FeaturedProjects } from "./root/FeaturedProject";
import { useSEO } from "@/hooks/useSEO";

const HomePage = () => {
    useSEO({
        title: "Md. Appon Islam (apponislam) | Portfolio",
        description: "Welcome to my portfolio website. Explore my projects, skills, and work experience.",
        ogTitle: "Md. Appon Islam (apponislam) | Portfolio",
        ogDescription: "Welcome to my portfolio website. Explore my projects, skills, and work experience.",
        ogImage: "https://4ppon.com/apponislam.png",
    });

    return (
        <>
            <div className="container mx-auto">
                <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center justify-center">
                    <div className="container flex max-w-5xl flex-col items-center gap-4 text-center -mt-20 mx-auto">
                        <img src="/apponislam.png" height={100} width={100} sizes="100vw" className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary dark:border-white dark:bg-white" alt="appon-islam-img" />
                        {/* </div> */}
                        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">Appon Islam</h1>
                        <h3 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl font-semibold">Full Stack Developer</h3>

                        <div className="grid grid-cols-2 mt-10 items-center justify-center sm:flex-row  gap-3">
                            <Link to={"https://github.com/apponislam"} target="_blank" className={cn(buttonVariants({ size: "lg" }), "px-4 md:px-8")}>
                                <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
                            </Link>
                            <Link
                                to={"https://www.linkedin.com/in/apponislam/"}
                                target="_blank"
                                className={cn(
                                    buttonVariants({
                                        variant: "outline",
                                        size: "lg",
                                    }),
                                    "px-4 md:px-8",
                                )}
                            >
                                <Icons.linkedin className="w-4 h-4 mr-2" /> LinkedIn
                            </Link>

                            <Link
                                // to={`${process.env.MY_SITE_URL}/apponislam-Resume.pdf`}
                                to={`https://drive.google.com/file/d/11XUE4bLkoSE1M_58iTbxvnuqJMZ4GNal/view?usp=sharing`}
                                target="_blank"
                                className={cn(
                                    buttonVariants({
                                        variant: "outline",
                                        size: "lg",
                                    }),
                                    "px-4 md:px-8",
                                )}
                            >
                                <Icons.download className="w-4 h-4 mr-2" /> Resume
                            </Link>
                            <Link to={"/contact"} rel="noreferrer" className={cn(buttonVariants({ size: "lg" }), "px-4 md:px-8")}>
                                <Icons.contact className="w-4 h-4 mr-2" /> Contact
                            </Link>
                        </div>

                        <ScrollButton></ScrollButton>
                    </div>
                </section>
                <section id="skills" className="md:container space-y-6 bg-slate-50 dark:bg-transparent py-10">
                    <div className="mx-auto flex max-w-232 flex-col items-center space-y-4 text-center">
                        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">{pagesConfig.skills.title}</h2>
                        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">{pagesConfig.skills.description}</p>
                    </div>
                    {/* <SkillsCard skills={featuredSkills} /> */}
                    <SkillsCard skills={skillsData.slice(0, 6)} />
                    {/* <HomeSkills></HomeSkills> */}
                    <Link to="/skills" className="flex justify-center">
                        <Button variant={"outline"} className="rounded-xl cursor-pointer">
                            <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                        </Button>
                    </Link>
                </section>

                <FeaturedProjects />
            </div>
        </>
    );
};

export default HomePage;
