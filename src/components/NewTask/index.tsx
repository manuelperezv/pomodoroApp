import React, { useState } from 'react';
import {
  StyledButton,
  StyledNewTaskArea,
  StyledStimatedTime,
  StyledStimatedTimeButton,
  StyledTask,
} from './styles';
const NewTask = () => {
  const [pomodoroCounter, setPomodoroCounter] = useState(0);

  const handleClick = (item: number, add: string) => {
    if (add === 'add') {
      setPomodoroCounter(pomodoroCounter + item);
    }
    if (add === 'decrease' && pomodoroCounter > 0) {
      setPomodoroCounter(pomodoroCounter - item);
    }
  };
  return (
    <StyledTask>
      <div className="content-container">
        <StyledNewTaskArea>type here the new task</StyledNewTaskArea>
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
        <StyledButton>Save</StyledButton>
      </div>
    </StyledTask>
  );
};

export default NewTask;

