import { setToken } from "../storage";

const BASE_API_URL = "http://localhost:8000/auth";

export const login = async (values: { email: string; password: string }) => {
    let error = "";
    try {
        const response = await fetch(`${BASE_API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({ email: values.email, password: values.password }),
        });

        if (response.ok) {
            const token = await response.json();
            setToken(token);
        } else {
            const errorData = await response.json();
            error = errorData.error;
        }
    } catch (error) {
        // eslint-disable-next-line no-ex-assign
        error = (error as Error).message;
        console.log((error as Error).message);
    }

    return error;
};

export const signup = async (values: { email: string; password: string }) => {
    let error = "";
    try {
        const response = await fetch(`${BASE_API_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: values.email, password: values.password }),
        });
        if (response.ok) {
            const token = await response.json();
            setToken(token);
        } else {
            const errorData = await response.json();
            error = errorData.error;
        }
    } catch (error) {
        // eslint-disable-next-line no-ex-assign
        error = (error as Error).message;
        console.log((error as Error).message);
    }

    return error;
};  