import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthenticatedToken } from "../../services/storage/token";

const useLogic = () => {
    const [userData, setUserData] = useState<{ name: string, email: string, city: string, country: string, phone:number } | null>(null);

    const navigate = useNavigate()

    const handleBackDashboard = useCallback(() => {
        navigate('/')
    }, [navigate])

    const userInfo = useCallback(async () => {

        const token = getAuthenticatedToken();
        const response = await fetch('http://localhost:8000/users/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const data = await response.json();
        setUserData(data)
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            await userInfo();
        };
        fetchData();
    }, [userInfo]);

    return {
        userData,
        handleBackDashboard,
        userInfo,
    }
}

export default useLogic