// 리덕스와 연동된 컨테이너 컴포넌트 작성

import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import * as counterActions from 'store/modules/counter';
import { bindActionCreators } from 'redux';

class CounterContainer extends Component {
  handleIncrement = () => {
    //this.props.increment();
    const { CounterActions } = this.props;
    CounterActions.increment();
  }
  handleDecrement = () => {
    //this.props.decrement();
    const { CounterActions } = this.props;
    CounterActions.decrement();
  }

  render(){
    const { handleIncrement, handleDecrement} = this;
    const { number } = this.props;

    return (
      <Counter 
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        number={number}
      />
    )
  }
}

// props 값 상태 정의
const mapStateToProps = (state) => ({
  number : state.counter.number
});

// props 값으로 넣어줄 액션 함수 정의
/*
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(counterActions.increment()),
  decrement: () => dispatch(counterActions.decrement())
})
*/
const mapDispatchToProps = (dispatch) => ({ CounterActions : bindActionCreators(counterActions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);