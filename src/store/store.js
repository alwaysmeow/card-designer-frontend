import { configureStore } from '@reduxjs/toolkit';
import cropReducer from './cropSlice';

const store = configureStore({
  reducer: {
    crop: cropReducer,
  },
});

export default store;