import React from 'react';
import { MainButtonContainer } from '../ClockComponent/styles';
import { ButtonComponentProps } from '../../interfaces';
import type { NextPage } from 'next';
import { addTask } from '../../store/ClockComponentStore';
import { useDispatch, useSelector } from 'react-redux';

const MainButtonComponent = ({ handleReset, timerOn, styles }: ButtonComponentProps) => {
  //   const reduxClockData = useAppSelector((state) => state.clock.clockData);
  //   console.log(reduxClockData);
  const clockState = useSelector(addTask);
  const dispatch = useDispatch();
  return (
    <>
      <MainButtonContainer>
        <button onClick={handleReset} className={styles}>
          {!timerOn ? 'Play' : 'Pause'}
        </button>
        <button onClick={handleReset} className={styles}>
          Reset
        </button>
      </MainButtonContainer>
    </>
  );
};

export default MainButtonComponent;

