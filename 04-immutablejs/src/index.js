import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Map, List} from 'immutable';

// 1. 객체는 Map
console.log('1. Map');
const obj = Map({
  foo: 1,
  inner: Map({
    bar: 10
  })
});
console.log(obj.toJS());
console.log(obj.toJS().inner.bar)

// 2. 배열은 List
console.log('2. List');
const arr = List([
  Map({foo: 1}),
  Map({foo: 2})
])
console.log(arr.toJS());

// 3. 설정한 땐 set
console.log('3. set');
let nextObj = obj.set('foo', 5);
console.log(obj.toJS());
console.log(nextObj.toJS());

// 4. 값을 읽을 땐 get
console.log('4. get');
console.log(obj.get('foo'));
console.log(arr.get(0));

// 5. 읽은 다음 설정할 때는 update
console.log('5. update');
nextObj = nextObj.update('foo', value => value + 1);
console.log(nextObj.toJS());

// 6. 내부에 있는걸 설정, 읽을 때는 in
console.log('6. in');
nextObj = obj.setIn(['inner', 'bar'], 20);
console.log(nextObj.toJS());
console.log(nextObj.getIn(['inner', 'bar']));

let nextArr = arr.setIn([0, 'foo'], 10);
console.log(nextArr.toJS());
console.log(nextArr.getIn([0, 'foo']));

// 7. List 내장함수는 배열과 비슷하다.
console.log('arr function');
nextArr = arr.push(Map({foo:40}));
console.log(nextArr.toJS());
nextArr = arr.filter(item => item.get('foo') === 1 );
console.log(nextArr.toJS());

// 8. delete로 key를 지울 수 있다.
console.log('delete');
nextObj = nextObj.delete('foo');
console.log(nextObj.toJS());

nextArr = nextArr.delete(0);
console.log(nextArr.toJS());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
