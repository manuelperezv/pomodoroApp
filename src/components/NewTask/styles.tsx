import styled from '@emotion/styled';


export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 12px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 3px 6px;
  & input,
  div,
  button {
    border-radius: 8px;
    border: none;
  }

  & input:focus {
    border: 'none';
  }

  & .styled-text-area {
    display: flex;
    flex: 1;
    min-height: 6rem;
  }
  & .controls-panel {
    flex: 1;
    & span {
      font-weight: bold;
      padding: 5px 0 15px 5px;
    }
    & .complete-fields {
      color: red;
    }
  }
`;

export const StyledNewTaskArea = styled.input`
  height: 70px;
  width: 100%;
  background-color: #fff;
`;

export const StyledStimatedTimeButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: antiquewhite;
  font-size: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const StyledStimatedTime = styled.div`
  display: flex;
  & .counter {
    width: 55px;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
  }
`;

export const StyledButton = styled.div`
  height: 3rem;
  background-color: #efefef;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 5px;
  & button {
    height: 36px;
    width: 70px;
    background-color: #222222;
    color: white;
    justify-content: end;
    margin-right: 15px;
}
  }
`;



