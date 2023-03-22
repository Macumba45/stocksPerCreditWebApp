import styled from 'styled-components';

const SIDEBAR_WIDTH = '15rem';

export const Container = styled.div`
     background-color: ${({theme}) => theme.colors.lighterGrey};
`;

export const MainContainer = styled.div``;

export const LilDivContainer = styled.div`
     margin-left: ${SIDEBAR_WIDTH};
     margin-bottom: 10rem;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     height: 6.25rem;
     @media (max-width: 768px) {
          margin-left: 0;
          grid-template-columns: 1fr;
          height: auto;
     }
`;

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
