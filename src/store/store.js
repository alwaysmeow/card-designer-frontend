import { configureStore } from '@reduxjs/toolkit';
import cropReducer from './cropSlice';
import templateReducer from './templateSlice';
import statusReducer from './statusSlice';

const store = configureStore({
  reducer: {
    crop: cropReducer,
    template: templateReducer,
    status: statusReducer,
  },
});

export default store;