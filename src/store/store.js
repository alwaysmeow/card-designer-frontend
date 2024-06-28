import { configureStore } from '@reduxjs/toolkit';
import cropReducer from './cropSlice';
import templateReducer from './templateSlice';

const store = configureStore({
  reducer: {
    crop: cropReducer,
    template: templateReducer,
  },
});

export default store;