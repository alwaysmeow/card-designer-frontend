import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
  name: 'status',
  initialState: {
    status: "designing",
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setStatus } = statusSlice.actions;

export default statusSlice.reducer;