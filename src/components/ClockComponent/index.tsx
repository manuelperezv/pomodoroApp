import React, { MouseEventHandler, useEffect, useState } from 'react';
import { ClockContainer, FormattedTime, TimePeriodsContainer, MainButtonContainer } from './styles';

export interface ClockComponentProps {
  displayTime: number;
}
const ClockComponent = () => {
  const [displayTime, setDisplayTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

  const formatHours = (time: any) => {
    let minutes: number = Math.floor(time / 60);
    let seconds: number = time % 60;
    return (
      (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
    );
  };

  const handleClock = (e: MouseEventHandler<HTMLButtonElement>) => {
    let second = 1000;
    let date = new Date().getTime();
    let nexDate = new Date().getTime() + second;
    let onBreakVariable = onBreak;

    if (!timerOn) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nexDate) {
          setDisplayTime((prev) => {
            return prev - 1;
          });
          nexDate += second;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem('interval-id', interval as any);
    }
    if (timerOn) {
      clearInterval(localStorage.getItem('interval-id') as any);
    }
    setTimerOn(!timerOn);
  };

  const setBackgroundColor = () => {
    if (displayTime <= 300) {
      return '#2C7476';
    } else if (displayTime >= 300 && displayTime <= 900) {
      return '#2D5D84';
    } else if (displayTime >= 900 && displayTime <= 1500) {
      return '#c72437';
    }
  };

  return (
    <ClockContainer
      style={{
        backgroundColor: setBackgroundColor(),
      }}
    >
      <div
        className='clockContainer__container'
        style={{
          backgroundColor: setBackgroundColor(),
        }}
      >
        <TimePeriodsContainer>
          <button onClick={() => setDisplayTime(25 * 60)}>Pomodoro</button>
          <button className='timePeriodsContainer__buttons' onClick={() => setDisplayTime(15 * 60)}>
            Short Break
          </button>
          <button className='timePeriodsContainer__buttons' onClick={() => setDisplayTime(5 * 60)}>
            Long Break
          </button>
        </TimePeriodsContainer>
        <FormattedTime>{formatHours(displayTime)}</FormattedTime>
        <MainButtonContainer>
          <button onClick={handleClock} className='MainButtonContainer__button'>
            {!timerOn ? 'Play' : 'Pause'}
          </button>
        </MainButtonContainer>
      </div>
    </ClockContainer>
  );
};

export default ClockComponent;
