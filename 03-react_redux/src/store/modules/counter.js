//Ducks 구조 (액션 + 리듀서 한 파일에 관리)
// 각 액션마다 액션 생선함수를 작성
/*
// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 모듈의 초기 상태 정의
const initialState = {
  number: 0
};

// 리듀서 생성 및 내보내기
export default function reducer(state = initialState, action) {
  // state = initialState 기본 값 정의
  switch(action.type){
    case INCREMENT :
      return { number : state.number + 1 };
    case DECREMENT :
      return { number : state.number - 1 };
    default :
      return state;
  }
}
*/

// 위에는 각 액션마다 액션 생성 함수를 작성하였는데, redux-action의 createAction 함수로 코드를 줄일수 있다.

import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈의 초기 상태 정의
const initialState = {
  number: 0
};

export default handleActions({
  [INCREMENT]: (state, action) => {
    return { number: state.number + 1 };
  },
  [DECREMENT]: ({number}) => ({ number: number -1 })
}, initialState);
