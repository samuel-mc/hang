import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import wordsReducer from './wordsReducer';

export default combineReducers({
  categoriesReducer,
  wordsReducer,
});
