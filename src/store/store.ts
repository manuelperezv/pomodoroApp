import { ClockComponentSlice } from './ClockComponentStore';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

export const store = () =>
  configureStore({
    reducer: {
      clock: ClockComponentSlice.reducer
    },
    devTools: true
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
// import { RootState } from './store';

export const wrapper = createWrapper<AppStore>(store);
// export const useAppDispatch: () => typeof store = useDispatch;

// export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

