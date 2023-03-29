import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     background-color: ${({theme}) => theme.colors.light};
     border-radius: 10px;
     margin-left: 1rem;
     margin-right: 1rem;

     @media (min-width: 600px) {
          margin-left: 15rem;
     }
`;

export const FiltersDiv = styled.div`
     border-radius: 10px;
     margin: 4rem 1.2rem;
     width: auto;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     /* @media (min-width: 600px) {
          display:block;
     } */
`;

export const MinMaxContainer = styled.div`
     display: flex;
     margin-right: 2rem;
     margin-left: 2rem;
`;
export const ButtonContainer = styled.div`
     display: flex;
     justify-content: center;
     margin-bottom: 5rem;
`;

export const ButtonSeeMore = styled.div`
     display: flex;
     justify-content: center;
     margin-bottom: 5rem;
`;

export const DateContainer = styled.div`
     display: flex;
     margin-right: 2rem;
     margin-left: 2rem;
`;

export const TagDiv = styled.div`
     display: flex;
     margin-right: 2rem;
     margin-left: 2rem;
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

export const NewContainer = styled.div`
     display: flex;
     flex-wrap: wrap;
`;

export const FinalContainer = styled.div`
     display: flex;
     flex-wrap: wrap;
`;

export const TopCards = styled.div`
     display: flex;
     flex-wrap: wrap;
     margin-bottom: 5rem;
`;

export const NewCards = styled.div`
     display: flex;
     flex-wrap: wrap;
     /* justify-content: center; */
     margin-bottom: 5rem;
`;

export const FinalCards = styled.div`
     display: flex;
     flex-wrap: wrap;
     margin-bottom: 5rem;
`;

export const SearchDiv = styled.div``;

export const DiscretDiv = styled.div``;

export const SectionTitle = styled.div`
     margin: 5rem;
`;

export const HR = styled.hr`
     background-color: white;
     padding: 0 55rem;
     margin: 3rem;
`;

export const H3 = styled.h3`
     font-weight: ${({theme}) => theme.fontWeights.bold};
     font-size: ${({theme}) => theme.fontSizes.small};
`;
