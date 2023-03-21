import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  margin :1rem;
  width: 270px ;
  height: 560px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

export const Image = styled.img`
  width: 270px;
  height: 300px;
  border: 1px solid black;
`;

export const Title = styled.h2`
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
`;

export const HeartButton = styled.button`
  background-color: transparent;
  margin-left: 160px;
  border: none;
  cursor: pointer;
  font-size: 32px;
  margin-top: 16px;

  &:focus {
    outline: none;
  }
`;
export const HeartIcon = styled.i`
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: 5px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #ffffff;
  transform: rotate(45deg);
`;