import styled from 'styled-components';

export const Container = styled.div`
     background-color: ${({theme}) => theme.colors.light};
     width: 100%;
     height: 200vh;
     @media (max-width: 768px) {
          height: 360vh;
     }
`;
