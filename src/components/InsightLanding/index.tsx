import { FC, memo } from 'react';
import { Container, DataContainer, MainContainer, TitleInsight } from './styles';

const InsightLanding: FC = () => {
    return (
        <MainContainer>
            <Container>
                <TitleInsight>Financial projects</TitleInsight>
                <DataContainer>40.505</DataContainer>
            </Container>
            <Container>
                <TitleInsight>Project success ratio</TitleInsight>
                <DataContainer>90%</DataContainer>
            </Container>
            <Container>
                <TitleInsight>Contributions</TitleInsight>
                <DataContainer>473.859.485€</DataContainer>
            </Container>
        </MainContainer>
    );
};

export default memo(InsightLanding);
