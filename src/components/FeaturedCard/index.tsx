import { FC, memo } from 'react';
import { FeaturedImg, MainContainer, ContainerText, ContainerImg, Title, SubTitle, SpanFeatured, ButtonContainer, ButtonSimulation } from './styles';

const FeaturedCard: FC = () => {
     return (
          <MainContainer>
               <ContainerText>
                    <Title><SpanFeatured>Inversores y emprendedores {<br />} conectados</SpanFeatured> para un {<br />} futuro mejor</Title>
                    <SubTitle>Encuentra la startup en la que quieres {<br />}invertir con el respaldo de nuestro test</SubTitle>
                    <ButtonContainer>
                         <ButtonSimulation>Start</ButtonSimulation>
                    </ButtonContainer>
               </ContainerText>
               <ContainerImg></ContainerImg>
          </MainContainer>
     );
};

export default memo(FeaturedCard);
