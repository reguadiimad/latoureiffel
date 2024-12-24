import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import isHomeReducer from './slices/isHomeSlice'

const store = configureStore({
  reducer: {
    presntion: contentReducer,
    isHome: isHomeReducer,
  },
});

export default store;
