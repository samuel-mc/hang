import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import gameReducer from './gameReducer';
import wordsReducer from './wordsReducer';

export default combineReducers({
  categoriesReducer,
  gameReducer,
  wordsReducer,
});
