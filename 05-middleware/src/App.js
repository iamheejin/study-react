import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post';
//import axios from 'axios';

class App extends Component {
    componentDidMount(){
        //axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => console.log(response.data));
        const { number, PostActions } = this.props;
        PostActions.getPost(number);
    }

    componentWillReceiveProps(nextProps) {
        const { number } = this.props;
        
        if(number !== nextProps.number){
            this.getPost(nextProps.number);
        }
    }

    /*
    getPost = async (postId) => {
        const { PostActions } = this.props;
        try{
            PostActions.getPost(postId);
            console.log('요청 완료후 실행');
        }catch(e){
            console.log(e);
            console.log('에러');
        }
    }
    */

    getPost = (postId) => {
        const { PostActions } = this.props;

        PostActions.getPost(postId).then(
            () => {
                console.log('요청 완료후 실행');
            }
        ).catch((e) => {
            console.log(e);
            console.log('에러');
        })
    }
    
    printLater = (number) => {
        return new Promise(
            resolve => {
            setTimeout( () => {console.log(number); resolve();}, 1000 );
            }
        )
    }  

    render() {
        const { CounterActions, number, post, loading, error } = this.props;

        
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
                { loading && <h2>로딩중...</h2>}
                { error ? <h1>에러발생</h1>
                        : (
                            <div>
                                <h1>{post.title}</h1>
                                <p>{post.data}</p>
                            </div>
                        )
                }
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.post.pending,
        error: state.post.error
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);