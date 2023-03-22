import { FC, memo } from 'react';
import Card from '../CardProjects';
import { ContainerProjects, MainContainer, TitlePopular } from './styles';

const PopularProjects: FC = () => {

    return (
        <>
            <TitlePopular>Popular Projects</TitlePopular>
            <MainContainer>
                <ContainerProjects>
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