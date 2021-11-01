//리듀서 합치기
import { combineReducers } from 'redux';
import counter from './counter';

export default combineReducers({
  counter
});