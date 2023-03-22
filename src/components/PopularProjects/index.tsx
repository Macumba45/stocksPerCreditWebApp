import {FC, memo} from 'react';
import Slider from 'react-slick';
import Card from '../CardProjects/index';
import {ContainerProjects, MainContainer} from './styles';
import BasicTabs from '../FilterProjects/index';

const PopularProjects: FC = () => {
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                         infinite: true,
                         dots: true,
                    },
               },
               {
                    breakpoint: 768,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                    },
               },
          ],
     };

     return (
          <>
               <MainContainer>
                    <BasicTabs />
               </MainContainer>

               <MainContainer>
                    <ContainerProjects>
                         <Card
                              image="Hola"
                              showHeartButton={true}

                              title="Esto es un proyecto de prueba basado en tu ano"
                              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                              categories="Medicina"
                              country="United States"
                              city="NewYork"
                              onClick={() => console.log('prueba')}
                         />
                         <Card
                              image="Hola"
                              showHeartButton={true}

                              title="Esto es un proyecto de prueba basado en tu ano"
                              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                              categories="Medicina"
                              country="United States"
                              city="NewYork"
                              onClick={() => console.log('prueba')}
                         />
                         <Card
                              image="Hola"
                              showHeartButton={true}

                              title="Esto es un proyecto de prueba basado en tu ano"
                              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                              categories="Medicina"
                              country="United States"
                              city="NewYork"
                              onClick={() => console.log('prueba')}
                         />
                    </ContainerProjects>
               </MainContainer>
          </>
     );
};

export default memo(PopularProjects);
