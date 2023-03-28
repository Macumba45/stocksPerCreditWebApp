import { FC, memo } from 'react';
import { MainContainerTabs } from './styles';
import BasicTabs from '../FilterProjects/index';

const PopularProjects: FC = () => {
     return (
          <>
               <MainContainerTabs>
                    <BasicTabs />
               </MainContainerTabs>

          </>
     );
};

export default memo(PopularProjects);
