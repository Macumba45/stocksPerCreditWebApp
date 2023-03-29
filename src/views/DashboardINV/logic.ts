import { getAuthenticatedToken } from '../../services/storage/token';
import { useCallback, useEffect, useState } from 'react';
import { getProjects } from '../../services/api/investDashboard';
import { InvestDashboardResponse } from '../../services/api/investDashboard';

export const DashboardInvLogic = () => {
     const [selectedRange, setSelectedRange] = useState<{
          min: number;
          max: number;
     }>({ min: 0, max: 0 });
     const [filters, setFilters] = useState({ selectedTags: [] });
     const [selectedDate, setSelectedDate] = useState({ finishDate: '' });
     const [projectData, setprojectData] = useState<InvestDashboardResponse>();


     const getProjectData = useCallback(async () => {
          getAuthenticatedToken();
          const data = await getProjects();
          if (data) {
               setprojectData(data);
          }
     }, [setprojectData]);

     useEffect(() => {
          getProjectData();
     }, [getProjectData]);

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
     const handleRangeChange = (range: { min: number; max: number }) => {
          setSelectedRange(range);
     };
     const handleFilter2 = () => {
          console.log({
               selectedRange,
               selectedDate,
               selectedTags: filters.selectedTags,
          });
     };

     return {
          projectData,
          handleFilter2,
          handleRangeChange,
          handleFiltersChange,
          handleDateChange,
     };
};
