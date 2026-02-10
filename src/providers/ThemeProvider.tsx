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
