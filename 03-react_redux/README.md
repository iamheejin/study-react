# 리액트 스터디 3

react + redux 학습

참고 : https://velopert.com/3528

$ git clone https://github.com/vlpt-playground/begin-redux.git

리덕스 템플릿 프로젝트를 클론하여 사용.

## 진행 일정

### 11월 1주차 : 블로그 강의 학습 및 실습 따라하기
* counter 기능에 redux 추가하기
    * ./store/modules/counter.js 모듈에서 액션 타입, 액션 생성 함수, reducer 생성
    * ./store/modules/counter.js 모듈에서 createAction, handleAction 사용하여 액션 생수 함수, 리듀서 소스를 간소화 시킴
    * ./store/modules/index.js root reducer 에서 combileReducers 로 counter 모듈 포함시키기
    * ./store/configure.js createStore(module) 함수로 store 생성
    * ./Root.js root component 에서 Provider store 로 redux 사용 선언
    * ./containers/CounterContainer.js redux 데이터 처리를 위한 별도 Component 생성 및 store 데이터 props 화 하여 Counter component에 props 전달

## 알게된 점
1. redux 의 기본 용어
* store : 프로젝트의 상태에 관한 데이터
* subscribe : 컴포넌트에서 스토어에 구독. 특정 함수가 스토어에 전달됨. 스토어 데이터 변경시 전달 받은 특정 함수 실행하여 화면을 렌더링 한다.
* dispatch : 컴포넌트에서 상태 변경을 위해 스토어를 호출. 이때, 액션을 전달. 이 액션은 상태 변화를 일으킬 참조할 수 있는 객체이다.
* reducer : 컴포넌트에서 스토어를 호출할때 액션을 받는 함수. 액션에 따라 데이터를 리턴한다.
2. redux 의 규칙
* 하나의 애플리케이션 안에는 하나의 스토어가 존재
* 상태는 읽기전용. 불변성 유지. ( state는 setState로, array는 push (X) concat(O) )
	불변성을 유지해야하는 이유는 데이터 변경 감지시 shallow equality 검사를 하기 때문.
	직역하면 얕게 검사를 한다는것..
	관련 라이브러리로 Immutable.js 라이브러리가 있다.
* 변화를 일으키는 함수 리듀서는 순수한 함수여야한다.
	동일한 input에는 동일한 output이 나와야한다.
	New date(), Math.random() 과같이 실행할 때마다 다른 결과가 나올수 있는 로직은 사용하면 안된다.
(이런 로직은 리듀서 함수 바깥에서 처리 , 리덕스 미들웨어를 사용)
3. 긴 소스를 간결하게 작성하는 방법이 있다. 스토어에서 createAction, handleAction 사용하고 Component에서 bindActionCreate 하여 action을 바로 불러오는 방법.


## 궁금한 점
1. 새로 알게된 immutable.js 라이브러리, 리덕스 미들웨어 에 대해 알아보자.

## 느낀 점
1. Counter 기능에 redux를 붙여보았는데 아직 어렵다. 생소한 단어와 개념들 때문인가.
2. 리듀서를 선언하는 부분과 Component에서 스토어의 데이터를 호출하는 부분은 대강 이해가 되었지만, 그 과정까지 설정을 해야하는 부분이 꽤 있다. 좀 더 소스에 대한 이해가 필요하다. reducer 를 combine, store configure, Root에서 Provider 선언.. 등

## 다음에는
