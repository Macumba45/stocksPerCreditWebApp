import {useCallback, useEffect, useState} from 'react';
import {getProjects} from '../../services/api/investDashboard';
import {InvestDashboardResponse} from '../../services/api/investDashboard';
import {togglePostFav} from '../../services/api/user';
import format from 'date-fns/format';
import type {ProjectFilters} from '../../models/project';
import type {Tag} from '../../models/tag';
import { getTags } from '../../services/api/tag';
import { getTagsGroup } from '../../services/api/tagGroup';

export const DashboardInvLogic = () => {
     const [tagsByFilter, setTagsByFilter] = useState<{selectedTags: Tag[]}>({
          selectedTags: [],
     });
     const [selectedDate, setSelectedDate] = useState({
          finishDate: '2023-03-24',
     });
     const [projectData, setprojectData] = useState<InvestDashboardResponse>();
     const [selectedRange, setSelectedRange] = useState<{
          min: number;
          max: number;
     }>({min: 1000, max: 5000});
     const [isLoading, setIsLoading] = useState(false);
     const [tags, setTags] = useState<Tag[]>([]);

     const getProjectsData = useCallback(
          async (filters?: ProjectFilters) => {
               setIsLoading(true);
               const data = await getProjects(filters);
               if (data) {
                    setprojectData(data);
               }
               setIsLoading(false);
          },
          [setprojectData]
     );

     const getTagsData = useCallback(async () => {
          setIsLoading(true);
          const data = await getTagsGroup();
          console.log(data)
          if (data) {
               setTags(data);
          }
          setIsLoading(false);
     }, [setprojectData]);

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
          (range: {min: number; max: number}) => {
               setSelectedRange(range);
          },
          []
     );

     const handleApplyFilters = useCallback(async () => {
          console.log({
               selectedRange,
               selectedDate,
               selectedTags: tagsByFilter.selectedTags,
          });
          const filters: ProjectFilters = {
               date: format(new Date(selectedDate?.finishDate), 'dd-MM-yyyy'),
               investmentAmount: {
                    min: selectedRange.min,
                    max: selectedRange.max,
               },
               tags: tagsByFilter.selectedTags.map((tag) => tag.id),
          };

          await getProjectsData(filters);
     }, [getProjectsData, selectedRange, selectedDate, tagsByFilter]);

     useEffect(() => {
          getProjectsData();
          getTagsData();
     }, [getProjectsData, getTagsData]);

     return {
          projectData,
          handleApplyFilters,
          handleRangeChange,
          handleFiltersTagsChange,
          handleDateChange,
          toggleFavorite,
          isLoading,
          tags
     };
};
