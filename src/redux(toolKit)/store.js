import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice'

const store = configureStore({
  reducer: {
    presntion: contentReducer
  },
});

export default store;
