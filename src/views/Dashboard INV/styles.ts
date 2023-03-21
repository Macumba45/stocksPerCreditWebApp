import styled from "styled-components";

const SIDEBAR_WIDTH = '200px';

export const Container = styled.div`
background-color: ${({ theme }) => theme.colors.lighterGrey};
`

export const MainContainer = styled.div`
`

export const LilDivContainer = styled.div`
margin-left: ${SIDEBAR_WIDTH};
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
/* border:1px solid black; */
height:100px;
`;


export const BigDivsContainer = styled.div`
display:flex;
margin:20px 0 20px ${SIDEBAR_WIDTH};

`

export const BigDiv = styled.div`

`

export const MediumDiv = styled.div`


`

export const MixDivsContainer = styled.div`
display:flex;
margin:20px 0 20px ${SIDEBAR_WIDTH};

`

