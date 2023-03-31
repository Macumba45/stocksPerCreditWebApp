import { FC, memo } from 'react';
import { DetailsLogic } from '../../views/ProjectDetails/logic';
import { ContainerCampagin, MainContainer, MainContainerLabel, SpanCampaign } from './styles';

const CampaignTab: FC = () => {
     const { dataDetails } = DetailsLogic();
     return (
          <MainContainer>
               <ContainerCampagin><MainContainerLabel><SpanCampaign>History</SpanCampaign></MainContainerLabel>{dataDetails?.history}{<br />}{<br />}<MainContainerLabel><SpanCampaign>Proposals</SpanCampaign></MainContainerLabel>{dataDetails?.proposal}{<br />}{<br />}<MainContainerLabel><SpanCampaign>Campaing</SpanCampaign></MainContainerLabel>{dataDetails?.commerce}</ContainerCampagin>
          </MainContainer>
     );
};

export default memo(CampaignTab);
