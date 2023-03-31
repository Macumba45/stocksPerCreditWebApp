import {useCallback, useEffect, useState} from 'react';
import {ProjectResponse} from '../../services/api/project';
import {getUserInfo} from '../../services/api/user';
import {getAuthenticatedToken} from '../../services/storage/token';

export const InvestmentViewLogic = () => {
     const [investmentData, setinvestmentData] = useState<ProjectResponse>();

     const getInvestment = useCallback(async () => {
          getAuthenticatedToken();
          const data = await getUserInfo();
          if (data) {
               setinvestmentData(data);
          }
     }, []);

     useEffect(() => {
          getInvestment();
     }, [getInvestment]);

     return {
          getInvestment,
          investmentData,
     };
};
