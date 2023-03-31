import {useCallback, useEffect, useState} from 'react';
import {getProjectsUser} from '../../services/api/empDashboard';
import {ProjectResponse, removeProject} from '../../services/api/project';

export const DashboardEmpLogic = () => {
     const [userdata, setUserData] = useState<ProjectResponse[]>();

     const getProjectUser = useCallback(async () => {
          const data = await getProjectsUser();
          if (data) {
               setUserData(data);
          }
     }, []);

     const deleteProjectUser = useCallback(async (id: string) => {
          if (id) {
               await removeProject(id);
               getProjectUser();
          }
     }, [getProjectUser]);

     useEffect(() => {
          getProjectUser();
     }, [getProjectUser]);

     return {
          userdata,
          deleteProjectUser,
     };
};
