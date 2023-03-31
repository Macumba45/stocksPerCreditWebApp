import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../services/api/invest';


export const PaymentLogic = () => {

    const [dataDetails, setDataDetails] = useState({});
    const [idUser, setIdUser] = useState({});

    const { id } = useParams()
    console.log(id)

    const getUserIdPayment = useCallback(async (id: string | undefined) => {
        if (id) {
            console.log('id')
            const data = await getUserById(id);
            console.log(data);
            if (data) {
                setIdUser(data);
            }
        }
    }, []);

    // const handledInvest = useCallback(async () => {
    //     getAuthenticatedToken(); // Obtener el token de localStorage
    //     const data = await getUserInfo();
    //     console.log(data);
    //     if (data!) {
    //         setDataDetails(data);
    //     }
    // }, []);



    // const handledInvest = useCallback(async (projectId: string, amount: number) => {
    //     getAuthenticatedToken(); // Obtener el token de localStorage
    //     const data = await investInProject(userId, projectId, amount);
    //     console.log(data);
    //     if (data!) {
    //         setDataDetails(data);
    //     }
    // }, []);

    useEffect(() => {
        // handledInvest();
        getUserIdPayment(id)
    }, [getUserIdPayment]);

    return {
        dataDetails,
        idUser,
    };
};

