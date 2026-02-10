import { useEffect, useState } from "react";
import { CustomModal } from "../components/CustomModal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <CustomModal />
        </>
    );
};
