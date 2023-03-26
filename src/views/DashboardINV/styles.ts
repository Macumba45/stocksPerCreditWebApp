import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     flex-wrap: wrap;
     margin-top: 5rem;
     @media (min-width: 600px) {
          background-color: ${({ theme }) => theme.colors.light};
          width: 100%;
          /* height: 200vh; */
     }
`;

export const FiltersDiv = styled.div`
     border-radius: 10px;
     padding: 2rem;
     margin: 4rem 0.2rem;
     width: auto;
     display: flex;
     flex-direction: column;
     align-items: center;
     width:25rem;

`;

export const MinMaxContainer = styled.div`
     display: flex;
     flex-direction: row;
     justify-content:space-between;

`;

export const DateContainer = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: space-between;

`;

export const TagDiv = styled.div`
     display: flex;
     flex-direction: row;
          justify-content: space-between;

`;


export const MaxContainer = styled.div`
     margin-top: 80px;
     display: flex;
    flex-wrap: wrap;
     justify-content: center;
     margin-left:18rem;
     @media (max-width: 600px) {
          margin-left:1rem;
     }
`;

export const SearchDiv = styled.div`
margin-bottom:3rem;
`
export const DiscretDiv = styled.div`
`
