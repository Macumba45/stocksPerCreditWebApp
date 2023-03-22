import { FC, memo } from 'react';
import Card from '../CardProjects';
import { Container, ContainerProjects, MainContainer, TitlePopular } from './styles';
import BasicTabs from '../FilterProjects/index'


const PopularProjects: FC = () => {

    return (
        <>

            <Container>
                <TitlePopular>Popular Projects</TitlePopular>
                <BasicTabs />
            </Container>


            <MainContainer>
                <ContainerProjects>
                    <Card
                        image='Hola'
                        showHeartButton={true}
                        title='title'
                        description='test'
                        categories='Medicina'
                        locations='Madrid'
                        onClick={() => console.log('prueba')}
                    />
                    <Card
                        image='Hola'
                        showHeartButton={true}
                        title='title'
                        description='test'
                        onClick={() => console.log('prueba')}
                    />
                    <Card
                        image='Hola'
                        showHeartButton={true}
                        title='title'
                        description='test'
                        onClick={() => console.log('prueba')}
                    />
                </ContainerProjects>
            </MainContainer>
        </>

    );
};

export default memo(PopularProjects);