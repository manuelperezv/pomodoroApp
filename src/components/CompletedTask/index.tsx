import React from 'react';
import { useSelector } from 'react-redux';
import { NewTaskValueState, SelectClockState } from '../../store/ClockComponentStore';
import { PhaseDescriptionStyled, StyledCreatedTasks } from './styles';
const CompletedTask = () => {
  const phasesCompleted = useSelector(NewTaskValueState);
  const SelectClockS = useSelector(SelectClockState);
  return (
    <div>
      {phasesCompleted.map((phase, index) => (
        <StyledCreatedTasks key={index}>
          <PhaseDescriptionStyled>{phase?.description}</PhaseDescriptionStyled>
          <div>{phase?.qty}</div>
        </StyledCreatedTasks>
      ))}
    </div>
  );
};

export default CompletedTask;


