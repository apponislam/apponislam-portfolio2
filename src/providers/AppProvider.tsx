import { type ReactNode } from "react";

type AppProvidersProps = {
    children: ReactNode;
};

export const AppProvider = ({ children }: AppProvidersProps) => {
    return <>{children}</>;
};
