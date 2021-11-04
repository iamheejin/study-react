// 편의상, 나중에 액션 생성 함수들을 미리 바인딩해서 내보냄
// 각 container component에서 connect를 할때 액션 함수 바인딩 생략할 수 있음.
/*
import { bindActionCreators } from "redux";
import * as counterActions from './modules/counter';
import * as todoActions from './modules/todo';
import store from './index';

const { dispatch } = store;

export const CounterActions = bindActionCreators(counterActions, dispatch);
export const TodoActions = bindActionCreators(todoActions, dispatch);
*/