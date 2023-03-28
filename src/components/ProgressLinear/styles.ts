import styled from "styled-components";

export const SpanCollected = styled.span`

font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.bold};
     

`

export const SpanCollectedMoney = styled.span`

font-family: ${({ theme }) => theme.fonts.primary};
     font-size: ${({ theme }) => theme.fontSizes.smallest};
     font-weight: ${({ theme }) => theme.fontWeights.semiBold};
     color: ${({ theme }) => theme.colors.primary};


`

export const DateContainer = styled.div`

color: ${({ theme }) => theme.colors.primary};




`