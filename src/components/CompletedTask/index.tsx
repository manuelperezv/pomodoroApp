import React from 'react';
import { useSelector } from 'react-redux';
import { NewTaskValueState } from '../../store/ClockComponentStore';
import { StyledCreatedTasks } from './styles';
const CompletedTask = () => {
  const phasesCompleted = useSelector(NewTaskValueState);
  console.log('🚀 ~ file: CompletedTask.tsx:6 ~ CompletedTask ~ phasesCompleted:', phasesCompleted);
  return (
    <div>
      {phasesCompleted.map((phase) => (
        <StyledCreatedTasks>
          <div>{phase?.description}</div>
          <div>{phase?.qty}</div>
        </StyledCreatedTasks>
      ))}
    </div>
  );
};

export default CompletedTask;

