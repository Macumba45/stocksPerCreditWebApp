import {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getProjectById, ProjectResponse} from '../../services/api/project';

export const DetailsLogic = () => {
  
     const [dataDetails, setDataDetails] = useState<ProjectResponse>();
     const {id} = useParams<{id: string}>(); 

     const getDataDetails = useCallback(async (id: string | undefined) => {
          if (id) {
               const data = await getProjectById(id);
               if (data) {
                    setDataDetails(data);
               }
          }
     }, []);

     const daysLeft = (date: string) => {
          const oneDay = 24 * 60 * 60 * 1000; 
          const today = new Date();
          const difference = new Date(date).getTime() - today.getTime();
          return Math.round(Math.abs(difference / oneDay));
     };

     useEffect(() => {
          getDataDetails(id!); 
     }, [getDataDetails, id]);

     return {
          dataDetails,
          daysLeft,
     };
};
