import React, { useEffect, useRef, useState } from 'react';
import {
  ClockContainer,
  FormattedTime,
  TimePeriodsContainer,
  ProgressContainer,
  MainComponent,
  StyledAddNewTaskButton,
} from './styles';
// import { useAppDispatch } from '../../store/store';
import MainButtonComponent from '../MainButtonComponent/MainButtonComponent';
import { useDispatch, useSelector } from 'react-redux';
import {
  PhaseCounterState,
  SelectClockState,
  StatePhases,
  addTask,
  changeStep,
} from '../../store/ClockComponentStore';
import NewTask from '../NewTask';
import CompletedTask from '../CompletedTask/index';
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
    large: 25 * 60,
  });
  const [timerOn, setTimerOn] = useState(false);
  const getRef = useRef(null);
  const [intervalTimerId, setIntervalTimerId] = useState<any>();
  const [getCurrentSession, setCurrentSession] = useState('');
  const [currentPhaseState, setCurrentPhaseState] = useState('');
  const formatHours = (time: any) => {
    let minutes: number = Math.floor(time / 60);
    let seconds: number = time % 60;
    return (
      (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)
    );
  };

  /// redux

  //   const clockState = useSelector(SelectClockState);
  const phaseState = useSelector(PhaseCounterState);

  const dispatch = useDispatch();

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
      return '#ba4949';
    }
  };

  const progressBarValue = displayTime <= 300 ? 5 : displayTime <= 900 ? 15 : 25;

  useEffect(() => {
    setCurrentPhaseState(phaseState);
  }, [phaseState]);

  return (
    <ClockContainer
      style={{
        backgroundColor: setBackgroundColor(),
      }}
    >
      <MainComponent>
        <div className="clockContainer__container">
          <ProgressContainer value={displayTime / 60} max={progressBarValue}>
            {displayTime}
          </ProgressContainer>
          <TimePeriodsContainer>
            <button onClick={() => handleSessionDuration(sessionDuration.large)}>Pomodoro</button>
            <button
              className="timePeriodsContainer__buttons"
              onClick={() => handleSessionDuration(sessionDuration.short)}
            >
              Short Break
            </button>
            <button
              className="timePeriodsContainer__buttons"
              onClick={() => handleSessionDuration(sessionDuration.medium)}
            >
              Long Break
            </button>
          </TimePeriodsContainer>
          <FormattedTime ref={getRef}>{formatHours(displayTime)}</FormattedTime>
          <MainButtonComponent
            handleClock={handleClock}
            styles="MainButtonContainer__button"
            timerOn={timerOn}
            handleReset={handleReset}
          />
        </div>
        {phaseState === 'editing' && <NewTask />}
        {phaseState === 'done' && <CompletedTask />}
        <div>
          {currentPhaseState === StatePhases.editing ||
            (StatePhases.done && (
              <StyledAddNewTaskButton
                className="addTaskButton"
                onClick={() => dispatch(changeStep('editing' as any))}
              >
                + <span style={{ fontSize: '17px' }}>agregar tarea</span>
              </StyledAddNewTaskButton>
            ))}
        </div>
      </MainComponent>
    </ClockContainer>
  );
};

export default ClockComponent;
