import {useCallback, useEffect, useState} from 'react';
// import { useParams } from 'react-router-dom';
// import { getProjectById } from '../../services/api/project';
// import { getAuthenticatedToken } from '../../services/storage/token';

// export const PaymentLogic = () => {
//     //  interface LandingData {
//     //       ratioSuccess: number;
//     //       totalAmount: number;
//     //       totalProjects: number;
//     //       // ... otras propiedades que necesites
//     //  }
//     const [dataDetails, setDataDetails] = useState({});
//     const { id } = useParams()

//     const getDataDetails = useCallback(async () => {
//         getAuthenticatedToken(); // Obtener el token de localStorage
//         const data = await getProjectById(id!);
//         console.log(data);
//         if (data) {
//             setDataDetails(data);
//         }
//     }, []);

//     useEffect(() => {
//         getDataDetails();
//     }, [getDataDetails]);

//     return {
//         dataDetails,
//     };
// };
