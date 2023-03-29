import {getAuthenticatedToken} from '../../services/storage/token';
import {useCallback, useEffect, useState} from 'react';
import {getProjects} from '../../services/api/investDashboard';
import {InvestDashboardResponse} from '../../services/api/investDashboard';
import {togglePostFav} from '../../services/api/user';

export const DashboardInvLogic = () => {
     const [filters, setFilters] = useState({selectedTags: []});
     const [selectedDate, setSelectedDate] = useState({finishDate: ''});
     const [projectData, setprojectData] = useState<InvestDashboardResponse>();
     const [selectedRange, setSelectedRange] = useState<{
          min: number;
          max: number;
     }>({min: 0, max: 0});

     const toggleFavorite = useCallback(async (id: string) => {
          await togglePostFav(id);
     }, []);

     const handleDateChange = (newDates: any) => {
          setSelectedDate((prevDates) => ({
               ...prevDates,
               ...newDates,
          }));
     };
     const handleFiltersChange = (newFilters: any) => {
          setFilters((prevFilters) => ({
               ...prevFilters,
               ...newFilters,
          }));
     };
     const handleRangeChange = (range: {min: number; max: number}) => {
          setSelectedRange(range);
     };
     const handleFilter2 = () => {
          // console.log({
          //      selectedRange,
          //      selectedDate,
          //      selectedTags: filters.selectedTags,
          // });
          handleRangeChange(selectedRange);
          handleFiltersChange(filters);
          handleDateChange(selectedDate);
     };

     const getProjectData = useCallback(async () => {
          getAuthenticatedToken();
          const data = await getProjects();
          if (data) {
               setprojectData(data);
          }
     }, []);

     useEffect(() => {
          getProjectData();
     }, [getProjectData]);

     return {
          projectData,
          handleFilter2,
          handleRangeChange,
          handleFiltersChange,
          handleDateChange,
          toggleFavorite,
     };
};
