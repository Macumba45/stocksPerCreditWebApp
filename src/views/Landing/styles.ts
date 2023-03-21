import styled from "styled-components"

export const MainContainer = styled.div`

     margin: 0 auto;
     margin-top: 2rem;
     margin-bottom: 3rem;
     display: flex;
    

`

export const ContainerProjects = styled.div`

     margin: 0 auto;
     margin-top: 2rem;
     margin-bottom: 3rem;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;


`

export const ContainerTitle = styled.div`

`

export const TitlePopular = styled.h1`

font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
     font-weight: ${({ theme }) => theme.fontWeights.semiLight};
     margin-top: 6rem;
     margin-left: 3rem;
`