import { normalizeTag } from "../../models/tag";
import { getAuthenticatedToken } from "../storage/token";

export type TagResponse = {
    id:string,
    name:string
}

const BASE_API_URL = 'http://localhost:8000/tags';

export const getTags = async () => {
    try {
         const token = getAuthenticatedToken();
         const response = await fetch(BASE_API_URL, {
              headers: {
                   Authorization: `Bearer ${token}`,
              },
         });
         const data: TagResponse[] = await response.json();
         return data.map(normalizeTag);
    } catch (error) {
         console.log((error as Error).message);
    }
    return [];
};