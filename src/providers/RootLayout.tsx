import { Outlet } from "react-router-dom";
import { getMainNav } from "../config/routes";
import { MainNav } from "../components/root/MainNav";
import React from "react";
import NavRightMenu from "../components/root/NavRightMenu";
import { SiteFooter } from "../components/root/SiteFooter";

export const RootLayout = () => {
    const [mainNav, setMainNav] = React.useState<{ title: string; href: string }[]>([]);

    React.useEffect(() => {
        getMainNav().then((nav) => setMainNav(nav));
    }, []);

    return (
        <div className="container mx-auto">
            <div className="mx-3 md:mx-0">
                <header className="container z-50 bg-background mx-auto">
                    <div className="flex h-20 items-center justify-between py-6">
                        <MainNav items={mainNav} />
                        {/* <nav className="flex items-center gap-4">
                            <ModeToggle />
                        </nav> */}
                        <NavRightMenu></NavRightMenu>
                    </div>
                </header>
                <Outlet />
                <SiteFooter></SiteFooter>
            </div>
        </div>
    );
};
