import { createSlice } from '@reduxjs/toolkit';

const cropSlice = createSlice({
  name: 'crop',
  initialState: {
    image: null,
    cropData: {
        height: 0,
        unit: "px",
        width: 0,
        x: 0,
        y: 0,
    },
  },
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setCropData: (state, action) => {
      state.cropData = action.payload;
    },
  },
});

export const { setImage, setCropData } = cropSlice.actions;

export default cropSlice.reducer;