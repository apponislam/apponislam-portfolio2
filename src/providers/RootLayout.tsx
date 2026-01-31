import { Outlet, NavLink } from "react-router-dom";

export const RootLayout = () => {
    return (
        <div>
            <header>
                <NavLink to="/">Home</NavLink> <NavLink to="/users">Users</NavLink>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
};
