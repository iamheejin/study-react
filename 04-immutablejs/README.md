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
* redux 의 규칙
	* 하나의 애플리케이션 안에는 하나의 스토어가 존재
	* 상태는 읽기전용. 불변성 유지. ( state는 setState로, array는 push (X) concat(O) )
	불변성을 유지해야하는 이유는 데이터 변경 감지시 shallow equality 검사를 하기 때문.
	직역하면 얕게 검사를 한다는것..
	관련 라이브러리로 Immutable.js 라이브러리가 있다.
		* Immutable.js 라이브러리는 react의 데이터 불편과 관련하여 간편하게 사용하고자 탄생한 라이브러리이다. Map, List, set, update, findIndex updateIn, deleteIn .. 등을 제공한다.
	* 변화를 일으키는 함수 리듀서는 순수한 함수여야한다.
	동일한 input에는 동일한 output이 나와야한다.
	New date(), Math.random() 과같이 실행할 때마다 다른 결과가 나올수 있는 로직은 사용하면 안된다.
(이런 로직은 리듀서 함수 바깥에서 처리 , 리덕스 미들웨어를 사용)

* 긴 소스를 간결하게 작성하는 방법이 있다. 스토어에서 createAction, handleAction 사용하고 Component에서 bindActionCreate 하여 action을 바로 불러오는 방법.


## 궁금한 점
* 새로 알게된 immutable.js 는 일반적인 react 프로젝트에서 자주 쓰는 라이브러리인가? 편하긴 한데 많이 쓰지 않는다고 하면 plain javscript immutable 더 공부해야한다.   
    -> 생활코딩에서도 immutable.js에 대한 내용은 없고, 블로그를 봐도 redux, immutable은 필수 라이브러리라고 하지는 않는다. plain javascript 에서 immutable을 유지할 수 있는 문법을 연습해야겠다..
* 예제를 통해 Map, List 데이터 형만 다뤄봤다. 다른 데이터 형은 없는지 궁금하다.   
    -> List, Map, Set, Stack, Record, Seq, Collection이 있다. 참고 ? https://immutable-js.com/docs/v4.0.0
* 생각보다 번거롭다.. 한 화면을 위해 필요한 파일들이 많다.. 1) store module 2) module combiner 3) configure(create store) 4) Privider 선언 5) Container Component 처음 생성시 생성되는 부분, 물론 추가적으로는 module과 container component 두 파일만 생성되겠지만 너무 번거롭잖아. 간단하게 작성할 방법은 없나?   
    -> 없는것같다.. 그나마 bindAction 같은걸로 줄이는듯하다.

## 느낀 점
* Counter 기능에 redux를 붙여보았는데 아직 어렵다. 생소한 단어와 개념들 때문인가.
* 리듀서를 선언하는 부분과 Component에서 스토어의 데이터를 호출하는 부분은 대강 이해가 되었지만, 그 과정까지 설정을 해야하는 부분이 꽤 있다. 좀 더 소스에 대한 이해가 필요하다. reducer 를 combine, store configure, Root에서 Provider 선언.. 등
* 생각보다 번거롭고, 생성할 파일도 많다. 그나마 createAction, handleAction, bindActionCreators 로 소스가 줄긴 했다. 나중에 화면이 많아질경우 소스가 복잡하겠다. 라는 생각도 든다. 
* 각 기능들을 component 별로 나누어 작성할 수 있다는 점은 장점이나, 소스가 너무 많아지진 않을까 걱정이 든다.    
    -> naver d2 문서를 보니 이 샘플은 action, component, reducer, store 로 나눠져있는 구조다.. 더 복잡한건가.. 참고 : https://d2.naver.com/helloworld/1848131

## 다음에는
* immutable.js 에 대해 예제 중심으로만 다뤄봤다. 따로 공부가 필요하다.
* plain javascript immutable 유지 문법을 다시 공부하자
* 리덕스 미들웨어라는 용어에 대해 알아보자
* 훅 함수에 대해 알아보자
