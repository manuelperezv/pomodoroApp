import React from 'react';
import { useSelector } from 'react-redux';
import { NewTaskValueState, SelectClockState } from '../../store/ClockComponentStore';
import { PhaseDescriptionStyled, StyledCreatedTasks } from './styles';
const CompletedTask = () => {
  const phasesCompleted = useSelector(NewTaskValueState);
  const SelectClockS = useSelector(SelectClockState);
  console.log('🚀 ~ file: index.tsx:7 ~ CompletedTask ~ SelectClockS:', SelectClockS);
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


