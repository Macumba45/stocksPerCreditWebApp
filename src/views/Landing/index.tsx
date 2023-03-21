import { FC, memo } from 'react';
import Card from '../../components/CardProjects';
import FeaturedCard from '../../components/FeaturedCard';
import FirsTimeStocks from '../../components/FirsTimeStocks';
import InsightLanding from '../../components/InsightLanding';
import NavBar from '../../components/NavBar';
import { MainContainer, ContainerTitle, TitlePopular, ContainerProjects } from './styles';

const Landing: FC = () => {
    return (
        <>
            <NavBar />
            <FeaturedCard />
            <InsightLanding />
            <FirsTimeStocks />
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

export default memo(Landing);
