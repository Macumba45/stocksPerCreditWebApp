import { useCallback } from 'react';
import { normalizeProfile, ProfileInput } from '../../models/user';
import { getAuthenticatedToken } from '../storage/token';

const BASE_API_URL = 'http://localhost:8000/users';

// export const investInProject = async (userId: string, projectId: string, amount: number) => {

//     try {
//         const token = getAuthenticatedToken();
//         await fetch(`${BASE_API_URL}/${userId}`, {
//             method: 'POST',
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 userId,
//                 projectId,
//                 amount
//             }),
//         });
//     } catch (error) {
//         console.log((error as Error).message);
//     }


// }


export const getUserById = async (id: string): Promise<ProfileInput | null> => {
    try {
        const token = getAuthenticatedToken();
        console.log('entramos')
        const response = await fetch(`${BASE_API_URL}/${id}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` },
        });
        const data: ProfileInput = await response.json();
        console.log(response);
        return normalizeProfile(data);
    } catch (error) {
        console.log((error as Error).message);
    }
    return null;
};