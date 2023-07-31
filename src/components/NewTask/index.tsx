import React, { useRef, useState } from 'react';
import {
  StyledButton,
  StyledNewTaskArea,
  StyledStimatedTime,
  StyledStimatedTimeButton,
  StyledTask,
} from './styles';
import { useDispatch } from 'react-redux';
import { changeStep, saveNewTaskValues } from '../../store/ClockComponentStore';
const NewTask = () => {
  const [pomodoroCounter, setPomodoroCounter] = useState(0);
  const [taskMessagge, setTaskMessage] = useState('');
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
    dispatch(changeStep('done' as any));
    dispatch(saveNewTaskValues(taskMessagge as any));
  };

  const handleChange = (e) => {};
  console.log(taskMessagge, 'taskMessagge');
  return (
    <StyledTask>
      <div className="content-container">
        <StyledNewTaskArea onChange={(e) => setTaskMessage(e.target.value)}></StyledNewTaskArea>
        <div>
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
        <StyledButton onClick={() => handleSave()}>Save</StyledButton>
      </div>
    </StyledTask>
  );
};

export default NewTask;
