import React from 'react';

const UserItem = (props) => {
    //console.log(props);
    const deleteUserHandler = (event) => {
        event.preventDefault();
        props.onDeleteUserHandler(props.userId);
    };
    return (
        <div onClick={deleteUserHandler}>
            <input type="text" value={props.userName} readOnly />
            <input type="number" value={props.userAge} readOnly />
        </div>
    );
};

export default UserItem;
