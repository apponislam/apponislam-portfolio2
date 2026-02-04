// Theme type
export type Theme = "light" | "dark" | "system";

// State type
export type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

// Initial value
const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => {},
};

// ✅ Context only exports context object
import { createContext } from "react";
export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);
