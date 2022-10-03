import React from 'react';

import Card from '../UI/Card';
import classes from './UserList.module.css';

const UserList = (props) => {
    const deleteUserHandler = (event) => {
        console.log(event);
    };

    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li
                        key={user.id}
                        onClick={() => {
                            deleteUserHandler(user.id);
                        }}
                    >
                        {user.name}({user.age}) years olad
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;
