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
                        title='title'
                        description='test'
                        liked={true}
                        onClick={() => console.log('prueba')}
                    />
                    <Card
                        image='Hola'
                        title='title'
                        description='test'
                        liked={true}
                        onClick={() => console.log('prueba')}
                    />
                    <Card
                        image='Hola'
                        title='title'
                        description='test'
                        liked={true}
                        onClick={() => console.log('prueba')}
                    />
                </ContainerProjects>
            </MainContainer>
        </>

    );
};

export default memo(PopularProjects);