import React, { useRef, useState } from 'react';
import {
  ContentContainer,
  StyledButton,
  StyledNewTaskArea,
  StyledStimatedTime,
  StyledStimatedTimeButton,
} from './styles';
import { useDispatch } from 'react-redux';
import { changeStep, saveNewTaskValues } from '../../store/ClockComponentStore';
const NewTask = () => {
  const [pomodoroCounter, setPomodoroCounter] = useState(0);
  const [taskMessagge, setTaskMessage] = useState('');
  const [emptyFiedls, setEmptyFiedls] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (item: number, add: string) => {
    if (add === 'add') {
      setPomodoroCounter(pomodoroCounter + item);
    }
    if (add === 'decrease' && pomodoroCounter > 0) {
      setPomodoroCounter(pomodoroCounter - item);
    }
  };

  const handleSave = () => {
    if (taskMessagge !== '' && pomodoroCounter !== 0) {
      dispatch(changeStep('done' as any));
      dispatch(saveNewTaskValues(taskMessagge as any));
    } else {
      setEmptyFiedls(true);
    }
  };

  const handleChange = (e) => {};
  return (
    <ContentContainer style={{ border: emptyFiedls && '5px solid red' }}>
      <div className="styled-text-area">
        <StyledNewTaskArea onChange={(e) => setTaskMessage(e.target.value)}></StyledNewTaskArea>
      </div>
      <div className="controls-panel">
        {emptyFiedls ? (
          <span className={emptyFiedls && 'complete-fields'}>Please complete all fields</span>
        ) : (
          <span>Est Pomodoros</span>
        )}
        <StyledStimatedTime>
          <div className="counter">{pomodoroCounter}</div>
          <StyledStimatedTimeButton onClick={() => handleClick(1, 'add')}>
            +
          </StyledStimatedTimeButton>
          <StyledStimatedTimeButton onClick={() => handleClick(1, 'decrease')}>
            -
          </StyledStimatedTimeButton>
        </StyledStimatedTime>
      </div>
      <StyledButton>
        <button onClick={() => handleSave()}>Save</button>
      </StyledButton>
    </ContentContainer>
  );
};

export default NewTask;
