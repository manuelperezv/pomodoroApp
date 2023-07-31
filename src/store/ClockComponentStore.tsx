import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './store';

export interface ClockComponent {
  personTasks: any;
  hour: number;
}

export enum StatePhases {
  creating = 'creating',
  editing = 'editing',
  done = 'done',
}

interface NewTaskValues {
  description: string;
  qty: number;
}

interface ClockState {
  clockData: ClockComponent[];
  phaseCounter: string;
  newTaskValues: NewTaskValues[];
}

const initialState: ClockState = {
  clockData: [],
  phaseCounter: 'creating',
  newTaskValues: [],
};

export const ClockComponentSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction) => {
      state.clockData.push({ personTasks: action.payload, hour: 3023 });
    },
    changeStep: (state: any, action: PayloadAction) => {
      state.phaseCounter = action.payload;
    },
    saveNewTaskValues: (state: any, action: PayloadAction) => {
      state.newTaskValues.push({ description: action.payload });
    },
  },
});

export const { addTask } = ClockComponentSlice.actions;
export const { changeStep } = ClockComponentSlice.actions;
export const { saveNewTaskValues } = ClockComponentSlice.actions;

export const SelectClockState = (state: AppState) => state.clock.clockData;
export const PhaseCounterState = (state: AppState) => state.clock.phaseCounter;
export const NewTaskValueState = (state: AppState) => state.clock.newTaskValues;

export default ClockComponentSlice.reducer;

