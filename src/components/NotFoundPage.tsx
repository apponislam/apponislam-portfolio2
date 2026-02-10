import { Link } from "react-router-dom";
import { Icons } from "../icons/Icons";
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-4 h-min">
                <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl">404 - Page Not Found</h1>
                <h3 className="font-heading sm:text-xl md:text-xl">Sorry, the page you are looking for does not exist.</h3>
                <Link to={"/"} rel="noreferrer" className={cn(buttonVariants({ size: "lg" }), "mt-4")}>
                    <Icons.home className="w-4 h-4 mr-2" /> Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
