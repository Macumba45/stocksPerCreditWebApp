import styled from 'styled-components';

const SIDEBAR_WIDTH = '15rem';

export const Container = styled.div`
     background-color: ${({ theme }) => theme.colors.light};
     width: 100%;
     height:130vh;
     @media (max-width: 768px) {
          height:330vh;

     }
`;

export const MainContainer = styled.div``;

export const LilDivContainer = styled.div`
     margin-left: ${SIDEBAR_WIDTH};
     display: flex;
     flex-wrap:wrap;
     justify-content: center;
     margin-bottom: 4rem;
     @media (max-width: 768px) {
          margin-left: 0;

     }


`


export const ContainerMediumCards = styled.div`

     display: flex;
     justify-content:center;
     flex-wrap: wrap;
     margin-left: ${SIDEBAR_WIDTH};
     @media (max-width: 768px) {
          margin-left: 0;

     }


`
export const ContainerBigCards = styled.div`
     display: flex;
     justify-content:center;
     flex-wrap: wrap;
     margin-left: ${SIDEBAR_WIDTH};
     margin-bottom: 4rem;
     @media (max-width: 768px) {
          margin-left: 0;

     }


     `





export const BigDivsContainer = styled.div`
     display: flex;
     margin: 20px 0 20px ${SIDEBAR_WIDTH};
     & > * {
          width: 96%;
     }
     @media (max-width: 768px) {
          flex-direction: column;
          margin-left: 2px;
          margin-right: 20px;
     }
`;

export const BigDiv = styled.div;

export const MediumDiv = styled.div``;

export const MixDivsContainer = styled.div`
     display: grid;
     grid-template-columns: 1fr 0.5fr 0.5fr;
     margin: 20px 0 20px ${SIDEBAR_WIDTH};
     margin-right: 20px;
     & > * {
          width: 96%;
     }
     @media (max-width: 768px) {
          display: block;
          margin: 20px;
          margin-right: 20px;
          margin-left: 5px;
     }
`;
