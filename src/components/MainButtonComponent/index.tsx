import React from 'react';
import { MainButtonContainerWrapper } from './styles';
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
      <MainButtonContainerWrapper>
        <button className={styles} onClick={handleClock}>
          {!timerOn ? 'Play' : 'Pause'}
        </button>
        <button onClick={handleReset} className={styles}>
          Reset
        </button>
      </MainButtonContainerWrapper>
    </>
  );
};

export default MainButtonComponent;
