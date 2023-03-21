import { FC, memo } from 'react';
import Slider from 'react-slick';
import Card from '../CardProjects';
import { ContainerProjects, MainContainer, TitlePopular } from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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