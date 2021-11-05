# 리액트 스터디 4

immutable.js 학습

참고 : https://velopert.com/3486

## 진행 일정

### 11월 1주차 : 블로그 강의 학습 및 실습 따라하기
* immutable.js 에서 사용하는 데이터 형, 함수 학습
* state를 Map, List로 구성
* 하위 Component에 props를 전달할 때 immutable.js 함수를 이용

## 알게된 점
* facebook 팀이 만든 라이브러리가 immutable.js이다.
* plain JS immutable 구현이 번거롭고 복잡하기 때문에 개발된 라이브러리
* immutable.js 클래스
	* Map : key, value 형태의 객체
	* List : 배열
	* Stack : Stack 형태로 동작하지만 배열 동작 대부분 사용 가능
	* Set : value, value 형태
	* Range : 시작과 종료값을 받아 무한 배열을 제공
	* Repeat : 값을 받아 무한 배열을 제공
	* Record : plain JS 의 객체와 유사, 특정 문자열 키 집합을 적용
* 함수
  * get, getIn   
    key 값을 받아 접근한다.
    * map.get('key')
    * map.getIn(['key1', 'key2')
    * arr.get(0)
    * arr.getIn([0, 'key'])
  * set, setIn, update, updateIn   
    값을 변경한다. 값이 같지 않으면 항상 새로운 Class를 반환한다. set은 값을, update는 함수를 받아 변경할 수 있다.
    * const newMap = map.set('key', 5)
    * const newMap = map.setIn(['key1', 'key2'], '2') key1 > key2 하위의 데이터를 변경한다.
    * map.update('key', value => value + 1)
    * map.updateIn(['key1', 'key2'], value => value + 1)
  * List 함수
    * arr.push(Map({key:5})
    * arr.filter(item => item.get('key') === 1)
  * delete   
    삭제
    * map.delete('key')
    * arr.delete(0)
  * merge, mergeDeep, mergeDeepWith   
    class 합치기. merge는 자식 class는 합치지 않음, mergeDeep은 자식 class도 합침. mergeWith, mergeDeepWith 은 key 충돌시 반영할 값 지정.
    * map1.merge(map2);
    * map1.mergeDeep(map2)
    * map1.mergeWith((prev, next) => prev / next, map2) 충돌나는 key 의 value는 나누기를 한다.
참고 : https://immutable-js.com/docs/v4.0.0/Map/
https://runebook.dev/ko/docs/immutable/-index-

## 궁금한 점
* immutable.js를 사용하면 간단하게 불변성을 지키며 react 개발을 할수있다. 하지만 얼마나 실제 프로젝트에서 사용되는지 궁금하다. plain JS immutable 구현 방식도 연습이 필요하다.

## 느낀 점
* 생각보다 편리하고 간단하다. 기존에 개발하던 plain JS 기준으로 불변성을 유지하면서 object를 컨트롤하기쉽다.
* 하지만, plain JS로의 방법도 숙지가 필요하다.

## 다음에는
* plain javascript immutable 유지 문법을 다시 공부하자
* 리덕스 미들웨어라는 용어에 대해 알아보자
* 훅 함수에 대해 알아보자
