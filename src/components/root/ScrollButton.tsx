"use client";
import { Icons } from "../../icons/Icons";

const ScrollButton = () => {
    const handleScrollAndAsyncTasks = async () => {
        const skillsSection = document.getElementById("skills");
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: "smooth" });
        }

        await new Promise((resolve) => setTimeout(resolve, 500));
        await additionalAsyncTasks();
    };

    async function additionalAsyncTasks() {
        console.log("Running additional async tasks...");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Async tasks completed!");
    }

    return (
        <button onClick={handleScrollAndAsyncTasks}>
            <Icons.chevronDown className="h-6 w-6 mt-10 downarrow" />
        </button>
    );
};

export default ScrollButton;
