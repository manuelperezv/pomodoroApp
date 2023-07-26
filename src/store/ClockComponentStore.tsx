import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './store';

export interface ClockComponent {
  personTasks: string | void;
  hour: number;
}

interface ClockState {
  clockData: ClockComponent[];
}

const initialState: ClockState = {
  clockData: [],
};

export const ClockComponentSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction) => {
      state.clockData.push({ personTasks: action.payload, hour: 3023 });
    },
  },
});

export const { addTask } = ClockComponentSlice.actions;

export const SelectClockState = (state: AppState) => state.clock.clockData;

export default ClockComponentSlice.reducer;

