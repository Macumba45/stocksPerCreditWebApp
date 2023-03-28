import { useCallback, useEffect, useState } from "react";
import { fetchLandingData, LandingResponse } from "../../services/api/landing";
import { getAuthenticatedToken } from "../../services/storage/token";

export const LandingLogic = () => {

    interface LandingData {
        ratioSuccess: number;
        totalAmount: number;
        totalProjects: number;
        // ... otras propiedades que necesites
    }
const [landingData, setLandingData] = useState<LandingData>({ ratioSuccess: 0, totalAmount: 0, totalProjects: 0 });

    const getLandingData = useCallback(async () => {
        getAuthenticatedToken(); // Obtener el token de localStorage
        const data = await fetchLandingData();
        if (data) {
            setLandingData(data);
        }
    }, []);

    useEffect(() => {
        getLandingData()
    }, [getLandingData])



    return {

        landingData,

    };
};
