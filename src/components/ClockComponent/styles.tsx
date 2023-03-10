import styled from '@emotion/styled';

export const ClockContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  height: 100vh;
  padding-top: 70px;
  & .clockContainer__container {
    box-shadow: 1px 2px 2px 4px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
  }
`;

export const TimePeriodsContainer = styled.div`
  display: flex;
  justify-content: center;
  & button {
    margin-left: 8px;
    border: none;
    background-color: unset;
    font-size: 15px;
    color: white;
    &:focus {
      background: #f6f1f13d;
    }
  }
`;

export const FormattedTime = styled.span`
  color: #fff;
  font-size: 7rem;
  padding: 1rem 6rem;
`;

export const MainButtonContainer = styled.div`
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
`;

export const ProgressContainer = styled.progress`
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 30px;
`;
