import styled from '@emotion/styled';

export const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClockContainer = styled.div`
  margin-top: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: 70px;
  & .clockContainer__container {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
    margin-top: 20px;
    @media (min-width: 600px) {
      min-width: 450px;
      height: 450px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
    }
  }
`;

export const TimePeriodsContainer = styled.div`
  display: flex;
  justify-content: center;
  & :hover {
    border: 2px solid lightgray;
  }
  & button {
    margin-left: 8px;
    border: none;
    background-color: unset;
    font-size: 15px;
    color: white;
  }
  & button:focus {
    background: #f6f1f13d;
    font-size: 15px;
  }
`;

export const FormattedTime = styled.span`
  color: #fff;
  font-size: 7rem;
`;

export const ProgressContainer = styled.progress`
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 30px;
`;

export const StyledAddNewTaskButton = styled.button`
  background-color: rgba(0, 0, 0, 0.1);
  margin: 40px 0 0 0;
  height: 4rem;
  font-size: 25px;
  width: 100%;
  color: white;
  transition: background-color 0.5s ease-in-out 0s;
  padding-bottom: 12px;
  box-sizing: border-box;
  border: 2px dashed rgba(255, 255, 255, 0.4);
  &:hover {
    font-size: 20px;
  }
`;
