import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ViewMode = 'list' | 'grid';

interface AppState {
  viewMode: ViewMode;
}

const initialState: AppState = {
  viewMode: 'list',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setViewMode(state, action: PayloadAction<ViewMode>) {
      localStorage.setItem('viewMode', action.payload);
      state.viewMode = action.payload;
    }
  },
});

export const {
	setViewMode,
} = appSlice.actions;
export default appSlice.reducer;