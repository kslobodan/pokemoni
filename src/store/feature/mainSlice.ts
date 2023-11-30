import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MainState {
  isAuthenticated: boolean;
}

const initialState: MainState = {
  isAuthenticated: false,
};

export const MainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setIsAuthenticated: (
      state,
      action: PayloadAction<{ isAuthenticated: boolean }>,
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export default MainSlice.reducer;

export const { setIsAuthenticated } = MainSlice.actions;
