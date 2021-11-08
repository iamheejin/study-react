# 리액트 스터디 5

middleware 학습

참고 : https://velopert.com/3401

## 진행 일정

### 11월 1주차 : 블로그 강의 학습 및 실습 따라하기
* middleware의 개념
* middleware 사용해보기
### 11월 2주차 : 블로그 강의 학습 및 실습 따라하기
* axios, redux로 일반적인 웹 요청

## 알게된 점
* middleware : action이 dispatch 되어 reducer에서 처리하기전에 사전에 작업할 내용을 설정. 액션과 리듀서 중간자.
* next : next(action)을 호출해 바로 reducer로 넘기거나, 다른 middleware가 있으면 처리되도록 진행.
* createStore 선언시 middleware를 설정할 수 있음.
* middleware를 통해 redux-devtool-extension, redux-logger 라이브러리, 직접 작성한 logger-middleware 3가지 로그를 남기는 방법
* axios, redux 로 비동기 웹 요청 처리

## 궁금한 점
* action -> reducer 때 로그를 보는 수준에서 middleware를 사용하였다. 별도 다른 기능으로 사용하는 방법이 있는지 알고싶다.

## 느낀 점
* middleware라는 개념은 이해가되었다.

## 다음에는
* plain javascript immutable 유지 문법을 다시 공부하자
* 훅 함수에 대해 알아보자
