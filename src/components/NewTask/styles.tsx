import styled from '@emotion/styled';

export const StyledTask = styled.div`
  width: 350px;
  padding: 50px;
  background-color: white;
  border-radius: 8px;
  text-align: left;
  margin-top: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;
  animation: 0.1s ease-in-out 0s 1 normal none running expand;
`;

export const StyledNewTaskArea = styled.input`
  height: 70px;
  width: 100%;
  background-color: #fff;
`;

export const StyledStimatedTimeButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: antiquewhite;
`;

export const StyledStimatedTime = styled.div`
  display: flex;
  & .counter {
    width: 150px;
    background-color: lightgrey;
  }
`;

export const StyledButton = styled.button`
  height: 36px;
  width: 70px;
  color: #222222;
`;

