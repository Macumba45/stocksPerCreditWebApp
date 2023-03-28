import { useCallback, useEffect, useState } from "react";
import { fetchLandingData } from "../../services/api/landing";
import { getAuthenticatedToken } from "../../services/storage/token";

export const LandingLogic = () => {
    const [landingData, setlandingData] = useState<{} | null>(null);

    const getLandingData = useCallback(async () => {
        getAuthenticatedToken(); // Obtener el token de localStorage
        const response = await fetchLandingData()
        const data = await response
        setlandingData(data);
    }, []);

    useEffect(() => {
        getLandingData()
    }, [getLandingData])



    return {

        landingData,

    };
};
