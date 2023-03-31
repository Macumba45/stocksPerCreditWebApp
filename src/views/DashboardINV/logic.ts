import { useCallback, useEffect, useState } from 'react';
import {
     getGroupedProjects,
     InvestDashboardResponse,
} from '../../services/api/project';
import { togglePostFav } from '../../services/api/user';
import format from 'date-fns/format';
import type { Project, ProjectFilters } from '../../models/project';
import type { Tag } from '../../models/tag';
import { getTagsGroup } from '../../services/api/tagGroup';
import { getInvestorProjects } from '../../services/api/investDashboard';

export const DashboardInvLogic = () => {
     const [tagsByFilter, setTagsByFilter] = useState<Tag[]>([]);
     const [selectedDate, setSelectedDate] = useState({
          finishDate: '',
     });
     const [groupedProjectsData, setGroupedProjectsData] =
          useState<InvestDashboardResponse>();
     const [projectsData, setProjectsData] = useState<Project[]>([]);
     console.log(projectsData)
     const [selectedRange, setSelectedRange] = useState<{
          min: number;
          max: number;
     }>({ min: 0, max: 5000 });
     const [isLoading, setIsLoading] = useState(false);
     const [tagsGroup, setTagsGroup] = useState<Tag[]>([]);

     const getGroupedProjectsData = useCallback(async () => {
          setIsLoading(true);
          const data = await getGroupedProjects();
          if (data) {
               setGroupedProjectsData(data);
          }
          setIsLoading(false);
     }, []);

     const getProjectsData = useCallback(async (filters?: ProjectFilters) => {
          setIsLoading(true);
          const data = await getInvestorProjects(filters);
          if (data) {
               setProjectsData(data);
          }
          setIsLoading(false);
     }, []);

     const getTagsGroupData = useCallback(async () => {
          setIsLoading(true);
          const data = await getTagsGroup();
          if (data) {
               setTagsGroup(data);
          }
          setIsLoading(false);
     }, []);

     const toggleFavorite = useCallback(async (id: string) => {
          await togglePostFav(id);
     }, []);

     const handleDateChange = useCallback((newDates: any) => {
          setSelectedDate((prevDates) => ({
               ...prevDates,
               ...newDates,
          }));
     }, []);

     const handleFiltersTagsChange = useCallback((newTags: any) => {
          setTagsByFilter((prevTags) => ({
               ...prevTags,
               ...newTags,
          }));
     }, []);

     const handleRangeChange = useCallback(
          (range: { min: number; max: number }) => {
               setSelectedRange(range);
          },
          []
     );

     const handleApplyFilters = useCallback(async () => {
          const filters: ProjectFilters = {
               date: selectedDate?.finishDate
                    ? format(new Date(selectedDate.finishDate), 'MM-dd-yyyy')
                    : '',
               investmentAmount: {
                    min: selectedRange.min,
                    max: selectedRange.max,
               },
               tags: Object.values(tagsByFilter).map((tag) => tag.id),
          };
          await getProjectsData(filters);
     }, [selectedRange, selectedDate, tagsByFilter, getProjectsData]);

     useEffect(() => {
          getGroupedProjectsData();
          getTagsGroupData();
          getProjectsData();
     }, [getGroupedProjectsData, getTagsGroupData, getProjectsData]);

     return {
          projectsData,
          groupedProjectsData,
          handleApplyFilters,
          handleRangeChange,
          handleFiltersTagsChange,
          handleDateChange,
          toggleFavorite,
          isLoading,
          tagsGroup,
     };
};
