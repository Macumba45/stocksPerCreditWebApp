import {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ProjectReference} from 'typescript';
import {getProjectById, ProjectResponse} from '../../services/api/project';
import {getTags} from '../../services/api/tag';
import {getAuthenticatedToken} from '../../services/storage/token';

export const DetailsLogic = () => {
     //  interface LandingData {
     //       ratioSuccess: number;
     //       totalAmount: number;
     //       totalProjects: number;
     //       // ... otras propiedades que necesites
     //  }
     const [dataDetails, setDataDetails] = useState<ProjectResponse>();
     const {id} = useParams<{id: string}>(); // Obtener la id desde la ruta
     // console.log(dataDetails)

     const getDataDetails = useCallback(async (id: string | undefined) => {
          if (id) {
               const data = await getProjectById(id);
               if (data) {
                    setDataDetails(data);
               }
          }
     }, []);

     const daysLeft = (date: string) => {
          const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
          const today = new Date();
          const difference = new Date(date).getTime() - today.getTime();
          return Math.round(Math.abs(difference / oneDay));
     };

     useEffect(() => {
          getDataDetails(id!); // Llamar a getDataDetails con la id obtenida desde la ruta
     }, [getDataDetails, id]);

     return {
          dataDetails,
          daysLeft,
     };
};
