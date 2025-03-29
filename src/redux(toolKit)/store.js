import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import isHomeReducer from './slices/isHomeSlice'
import indexSice from './slices/indexSice';
import scrollVal from './slices/scrollSlice';
import pageIndexSlice from './slices/pageIndexSlice';
import showLangSlice from './slices/showLang';
const store = configureStore({
  reducer: {
    presntion: contentReducer,
    isHome: isHomeReducer,
    indexSlice: indexSice,
    scrollVal: scrollVal,
    pageIndex: pageIndexSlice,
    showLang : showLangSlice,
  },
});

export default store;
