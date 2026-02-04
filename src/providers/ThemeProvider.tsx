// import { createContext, useEffect, useState } from "react";

// type Theme = "dark" | "light" | "system";

// export type ThemeProviderProps = {
//     children: React.ReactNode;
//     defaultTheme?: Theme;
//     storageKey?: string;
// };

// export type ThemeProviderState = {
//     theme: Theme;
//     setTheme: (theme: Theme) => void;
// };

// const initialState: ThemeProviderState = {
//     theme: "system",
//     setTheme: () => null,
// };

// export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

// export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme", ...props }: ThemeProviderProps) {
//     const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

//     useEffect(() => {
//         const root = window.document.documentElement;

//         root.classList.remove("light", "dark");

//         if (theme === "system") {
//             const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

//             root.classList.add(systemTheme);
//             return;
//         }

//         root.classList.add(theme);
//     }, [theme]);

//     const value = {
//         theme,
//         setTheme: (theme: Theme) => {
//             localStorage.setItem(storageKey, theme);
//             setTheme(theme);
//         },
//     };

//     return (
//         <ThemeProviderContext.Provider {...props} value={value}>
//             {children}
//         </ThemeProviderContext.Provider>
//     );
// }

// // export const useTheme = () => {
// //     const context = useContext(ThemeProviderContext);

// //     if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

// //     return context;
// // };

import { useEffect, useState, type ReactNode } from "react";
import { ThemeProviderContext, type Theme, type ThemeProviderState } from "../context/ThemeContext";

export type ThemeProviderProps = {
    children: ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme" }: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

    // Apply theme class to <html>
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");

        const appliedTheme = theme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : theme;

        root.classList.add(appliedTheme);
    }, [theme]);

    const value: ThemeProviderState = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(storageKey, theme);
            setThemeState(theme);
        },
    };

    return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}
