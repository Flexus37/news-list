import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ViewMode = 'list' | 'grid';
export type Filter = 'Все' | 'Lenta.ru' | 'Mos.ru'

interface AppState {
  viewMode: ViewMode;
  filter: Filter;
  searchTerm: string;
}

const initialState: AppState = {
  viewMode: 'list',
  filter: 'Все',
  searchTerm: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setViewMode(state, action: PayloadAction<ViewMode>) {
      localStorage.setItem('viewMode', action.payload);
      state.viewMode = action.payload;
    },
    setFilter(state, action: PayloadAction<Filter>) {
      state.filter = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const {
	setViewMode,
	setFilter,
	setSearchTerm
} = appSlice.actions;
export default appSlice.reducer;