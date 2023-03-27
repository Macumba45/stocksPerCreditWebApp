import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     flex-wrap: wrap;
     margin-top: 5rem;
     @media (min-width: 600px) {
          background-color: ${({theme}) => theme.colors.light};
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
     justify-content: center;
     width: 20rem;
`;

export const MinMaxContainer = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: space-between;
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

export const CardsContainer = styled.div`
     margin-top: 80px;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     margin-left: 18rem;
     @media (max-width: 600px) {
          margin-left: 1rem;
     }
`;

export const TopContainer = styled.div`
     display: flex;
     flex-wrap: wrap;
`;

export const TopCards = styled.div`
     display: flex;
     flex-wrap: wrap;
`;

export const SearchDiv = styled.div``;

export const DiscretDiv = styled.div``;

export const TopTitle = styled.div`
     margin: 1rem;
`;

export const HR = styled.hr`
     background-color: white;
     padding: 0 55rem;
     margin:3rem;
`;
