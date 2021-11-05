import React, { Component } from 'react';
import {Map, List} from 'immutable';

class User extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.users !== this.props.users;
    }

    render(){
        const { user } = this.props;
        const username = user.get('username');
        console.log('%s가 렌더링 되고있어요', username);

        return (
            <div>
                {username}
            </div>
        )
    }
}

export default User;