import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import isHomeReducer from './slices/isHomeSlice'
import indexSice from './slices/indexSice';
import scrollVal from './slices/scrollSlice'

const store = configureStore({
  reducer: {
    presntion: contentReducer,
    isHome: isHomeReducer,
    indexSlice: indexSice,
    scrollVal: scrollVal
  },
});

export default store;
