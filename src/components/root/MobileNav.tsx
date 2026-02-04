import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { useLockBody } from "../../hooks/use-lock-body";
import { siteConfig } from "../../config/site";

interface MobileNavProps {
    items: any[];
    children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
    useLockBody();

    return (
        <div className={cn("fixed inset-0 top-12 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-10 md:hidden")}>
            <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
                <Link to="/" className="flex items-center space-x-2">
                    <span className={cn("font-norican text-2xl")}>{siteConfig.name}</span>
                </Link>

                <nav className="grid grid-flow-row auto-rows-max text-sm">
                    {items.map((item, index) => (
                        <Link key={index} to={item.disabled ? "#" : item.href} className={cn("flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline", item.disabled && "cursor-not-allowed opacity-60")} onClick={(e) => item.disabled && e.preventDefault()}>
                            {item.title}
                        </Link>
                    ))}
                </nav>

                {children}
            </div>
        </div>
    );
}
