import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import {
  ClockContainer,
  FormattedTime,
  TimePeriodsContainer,
  MainButtonContainer,
  ProgressContainer,
} from './styles';

export interface ClockComponentProps {
  displayTime: number;
}
const ClockComponent = () => {
  const [displayTime, setDisplayTime] = useState(25 * 60);
  const [sessionDuration, setSessionDuration] = useState({
    short: 5 * 60,
    medium: 15 * 60,
    large: 25 * 60,
  });
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const getRef = useRef(null);

  const formatHours = (time: any) => {
    let minutes: number = Math.floor(time / 60);
    let seconds: number = time % 60;
    return (
      (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
    );
  };

  useEffect(() => {
    //
  }, [displayTime]);

  const handleClock = (event: MouseEventHandler<HTMLButtonElement>) => {
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
  console.log(getRef, 'get reference ');

  const handleReset = () => {
    if (sessionDuration.short) {
      //   setTimerOn(!timerOn);
      setDisplayTime(sessionDuration.short);
      //   getRef.current.load();
    }
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

  const handleTimePeriodsClick = (timePeriod: any) => {
    setDisplayTime(timePeriod);
  };

  const progressBarValue = displayTime <= 300 ? 5 : displayTime === 900 ? 15 : 25;

  console.log(displayTime);
  return (
    <ClockContainer
      style={{
        backgroundColor: setBackgroundColor(),
      }}
    >
      <div
        className='clockContainer__container'
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <ProgressContainer value={displayTime / 60} max={progressBarValue}>
          {displayTime}
        </ProgressContainer>

        <TimePeriodsContainer>
          <button onClick={() => setDisplayTime(sessionDuration.large)}>Pomodoro</button>
          <button
            className='timePeriodsContainer__buttons'
            onClick={() => setDisplayTime(sessionDuration.short)}
          >
            Short Break
          </button>
          <button
            className='timePeriodsContainer__buttons'
            onClick={() => setDisplayTime(sessionDuration.medium)}
          >
            Long Break
          </button>
        </TimePeriodsContainer>
        <FormattedTime ref={getRef}>{formatHours(displayTime)}</FormattedTime>
        <MainButtonContainer>
          <button onClick={handleClock} className='MainButtonContainer__button'>
            {!timerOn ? 'Play' : 'Pause'}
          </button>
          <button onClick={handleReset} className='MainButtonContainer__button'>
            Reset
          </button>
        </MainButtonContainer>
      </div>
    </ClockContainer>
  );
};

export default ClockComponent;
