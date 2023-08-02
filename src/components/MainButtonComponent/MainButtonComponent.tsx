import React from 'react';
import { MainButtonContainer } from '../ClockComponent/styles';
import { ButtonComponentProps } from '../../interfaces';
import type { NextPage } from 'next';
import { addTask } from '../../store/ClockComponentStore';
import { useDispatch, useSelector } from 'react-redux';

const MainButtonComponent = ({
  handleReset,
  timerOn,
  styles,
  handleClock,
}: ButtonComponentProps) => {
  const clockState = useSelector(addTask);
  const dispatch = useDispatch();
  return (
    <>
      <MainButtonContainer>
        <button className={styles} onClick={handleClock}>
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

