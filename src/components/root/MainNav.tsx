import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import { MobileNav } from "./MobileNav";
import { cn } from "../../lib/utils";
import { Icons } from "../../icons/Icons";
import { siteConfig } from "../../config/site";

interface MainNavProps {
    items?: any[];
    children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
    const location = useLocation();
    const pathname = location.pathname;
    const segment = pathname.split("/")[1]; // first path segment

    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    React.useEffect(() => {
        setShowMobileMenu(false);
    }, [pathname]);

    return (
        <div className="flex gap-6 md:gap-10">
            <Link to="/" className="hidden items-center space-x-2 md:flex">
                <span className={cn("font-norican text-2xl")}>{siteConfig.name}</span>
            </Link>

            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
                    {items.map((item, index) => {
                        const isActive = item.href.startsWith(`/${segment}`);

                        return (
                            <Link key={index} to={item.disabled ? "#" : item.href} className={cn("flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm", isActive ? "text-foreground" : "text-foreground/60", item.disabled && "cursor-not-allowed opacity-80")} onClick={(e) => item.disabled && e.preventDefault()}>
                                {item.title}
                            </Link>
                        );
                    })}
                </nav>
            ) : null}

            <button className="flex items-center space-x-2 md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <Icons.close /> : <Icons.menu />}
                <span className="font-bold">Menu</span>
            </button>

            {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
        </div>
    );
}
