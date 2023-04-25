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

interface TimePeriodDurationProp {
  short: number;
  medium: number;
  large: number;
}
const ClockComponent = () => {
  const [displayTime, setDisplayTime] = useState(0);
  const [sessionDuration, setSessionDuration] = useState<TimePeriodDurationProp>({
    short: 5 * 60,
    medium: 15 * 60,
    large: 25 * 60
  });
  const [timerOn, setTimerOn] = useState(false);
  const getRef = useRef(null);
  const [intervalTimerId, setIntervalTimerId] = useState<any>();
  const [getCurrentSession, setCurrentSession] = useState('');
  const formatHours = (time: any) => {
    let minutes: number = Math.floor(time / 60);
    let seconds: number = time % 60;
    return (
      (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
    );
  };

  const handleSessionDuration = (sessionLength: number) => {
    setDisplayTime(sessionLength);
    clearInterval(intervalTimerId);
    setTimerOn(false);
  };

  useEffect(() => {
    clearInterval(intervalTimerId);
    setDisplayTime(25 * 60);
  }, []);

  useEffect(() => {
    if (displayTime === 300) {
      setCurrentSession('short');
    } else if (displayTime === 900) {
      setCurrentSession('medium');
    } else if (displayTime === 1500) {
      setCurrentSession('large');
    }
    if (displayTime <= 0) {
      clearInterval(intervalTimerId);
    }
  }, [displayTime]);

  const handleClock = () => {
    let second = 1000;
    let date = new Date().getTime();
    let nexDate = new Date().getTime() + second;

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
      setIntervalTimerId(interval);
    }
    if (timerOn) {
      clearInterval(intervalTimerId);
    }
    setTimerOn(!timerOn);
  };

  const handleReset = () => {
    if (getCurrentSession === 'short') {
      setDisplayTime(sessionDuration.short);
    } else if (getCurrentSession === 'medium') {
      setDisplayTime(sessionDuration.medium);
    } else if (getCurrentSession === 'large') {
      setDisplayTime(sessionDuration.large);
    }
    clearInterval(intervalTimerId);
    setTimerOn(false);
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

  const progressBarValue = displayTime <= 300 ? 5 : displayTime <= 900 ? 15 : 25;

  return (
    <ClockContainer
      style={{
        backgroundColor: setBackgroundColor()
      }}
    >
      <div className='clockContainer__container'>
        <ProgressContainer value={displayTime / 60} max={progressBarValue}>
          {displayTime}
        </ProgressContainer>

        <TimePeriodsContainer>
          <button onClick={() => handleSessionDuration(sessionDuration.large)}>Pomodoro</button>
          <button
            className='timePeriodsContainer__buttons'
            onClick={() => handleSessionDuration(sessionDuration.short)}
          >
            Short Break
          </button>
          <button
            className='timePeriodsContainer__buttons'
            onClick={() => handleSessionDuration(sessionDuration.medium)}
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
