// 스토어를 생성하는 함수를 만들어서 내보냄
import {createStore } from 'redux';
import modules from './modules';

const configure = () => {
  // const store = createStore(modules);
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // redux-devtools 크롬 익스텐션
  const store = createStore(modules, devTools);
  
  return store;
}

export default configure;