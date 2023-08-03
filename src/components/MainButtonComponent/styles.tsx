import styled from '@emotion/styled';

export const MainButtonContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & button {
    cursor: pointer;
    border: medium none;
    border-radius: 4px;
    margin: 10px;
    box-shadow: rgb(235, 235, 235) 0px 6px 0px;
    font-size: 22px;
    height: 55px;
    color: rgb(186, 73, 73);
    font-weight: bold;
    width: 200px;
    background-color: white;
    transition: color 0.5s ease-in-out 0s;
  }
  & :hover {
    font-size: 20px;
  }
`;

