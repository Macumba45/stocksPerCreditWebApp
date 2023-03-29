import { FC, memo } from 'react';
import { DetailsLogic } from '../../views/ProjectDetails/logic';
import { ContainerCampagin, MainContainer } from './styles';

const CampaignTab: FC = () => {

     const { dataDetails } = DetailsLogic()
     return (
          <MainContainer>
               <ContainerCampagin>
                    {dataDetails?.history}
               </ContainerCampagin>
          </MainContainer>
     );
};

export default memo(CampaignTab);
