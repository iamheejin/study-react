import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
    renderUsers = () => {
        const { users } = this.props;
        return users.map( (user) => (<User key={user.id} user={user} />) )
    }

    render(){
        console.log('UserList 렌더링');
        const { renderUsers } = this;
        return (
            <div>
                {renderUsers()}
            </div>
        )
    }
}

export default UserList;