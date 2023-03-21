// import styled from "styled-components";

// const SIDEBAR_WIDTH = '200px';

// export const Container = styled.div`
// background-color: ${({ theme }) => theme.colors.lighterGrey};
// `

// export const MainContainer = styled.div`
// `

// export const LilDivContainer = styled.div`
// margin-left: ${SIDEBAR_WIDTH};
// display:grid;
// grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
// /* border:1px solid black; */
// height:100px;
// `;

// export const BigDivsContainer = styled.div`
// display:flex;
// margin:20px 0 20px ${SIDEBAR_WIDTH};

// `

// export const BigDiv = styled.div`

// `

// export const MediumDiv = styled.div`

// `

// export const MixDivsContainer = styled.div`
// display:flex;
// margin:20px 0 20px ${SIDEBAR_WIDTH};

// `

import styled from 'styled-components';

export const Container = styled.div`
     background-color: ${({theme}) => theme.colors.lighterGrey};
     max-width: 100%;`;

export const MainContainer = styled.div`
     /* No se necesita ningún cambio aquí */
     @media (max-width: 768px) {
          height: 100vh;
     }
`;

export const LilDivContainer = styled.div`
     margin: 1.5rem 5%;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
     height: 6.25rem;

     @media (max-width: 768px) {
          /* Cambia a dos columnas en pantallas más pequeñas */
          /* grid-template-columns: 1fr  */
          margin: auto;
          width: 22rem;
          height: 10rem;
          grid-template-columns: 1fr;
     }
`;

export const BigDivsContainer = styled.div`
     display: flex;
     margin: 1.5rem 12%;

     @media (max-width: 768px) {
          /* Cambia el margen en pantallas más pequeñas */
          /* margin: 35rem auto; */
          /* Cambia a columnas en pantallas más pequeñas */
          margin:35rem 0;
          display: block;
          width: 22rem;
          height: 20rem;
     }
`;

export const BigDiv = styled.div`
     /* No se necesita ningún cambio aquí */
`;

export const MediumDiv = styled.div`
     /* No se necesita ningún cambio aquí */
`;

export const MixDivsContainer = styled.div`
     display: flex;
     margin: 1.5rem 12%;

     @media (max-width: 768px) {
          /* Cambia el margen en pantallas más pequeñas */
          margin: 10px 0;
          /* Cambia a columnas en pantallas más pequeñas */
          flex-direction: column;
     }
`;
