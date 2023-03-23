import styled from 'styled-components';

export const MainContainer = styled.div``;

export const Container = styled.div`
     background-color: ${({theme}) => theme.colors.white};
     min-width: 400px;
     height: 25rem;
     border-radius: 20px;
     margin: 10px 1.25rem;
     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
     margin-bottom: 2rem;
`;
