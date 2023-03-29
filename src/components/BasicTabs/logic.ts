import {useCallback, useEffect, useState} from 'react';
import {fetchLandingData} from '../../services/api/landing';
import {ProjectResponse} from '../../services/api/project';

export const LandingLogic = () => {
     type LandingResponse = {
          latestProjects: ProjectResponse[];
          topProjects: ProjectResponse[];
     };
     const [landingData, setLandingData] = useState<LandingResponse>({
          latestProjects: [],
          topProjects: [],
     });

     const getLandingData = useCallback(async () => {
          const data = await fetchLandingData();
          if (data) {
               setLandingData(data);
          }
     }, []);

     useEffect(() => {
          getLandingData();
     }, [getLandingData]);

     return {
          landingData,
     };
};
