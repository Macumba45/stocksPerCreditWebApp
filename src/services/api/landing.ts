import { getAuthenticatedToken } from '../../services/storage/token';
import { normalizeProject } from '../../models/project';
import { ProjectResponse } from './project'

export type LandingResponse = {
    latestProjects: ProjectResponse[]
    topProjects: ProjectResponse[]
    ratioSuccess: number;
    totalAmount: number
    totalProjects: number
};



const BASE_API_URL = 'http://localhost:8000/landing';


export const fetchLandingData = async () => {
    try {
        const token = getAuthenticatedToken();
        const response = await fetch(BASE_API_URL, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data: LandingResponse = await response.json();

        const values = {
            topProjects: data?.topProjects?.map(normalizeProject),
            latestProjects: data?.latestProjects?.map(normalizeProject),
            totalAmount: data?.totalAmount,
            ratioSuccess: data?.ratioSuccess,
            totalProjects: data?.totalProjects // corregir la clave


        }

        return values
    } catch (error) {
        console.log((error as Error).message);
    }
    return null;
};