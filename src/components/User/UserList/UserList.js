import UserItem from '../UserItem/UserItem';
const UserList = (props) => {
    return (
        <>
            {props.userList.map((item) => {
                return (
                    <UserItem
                        key={item.id}
                        userName={item.userName}
                        userAge={item.userAge}
                        userId={item.id}
                        onDeleteUserHandler={props.onDeleteUserHandler}
                    />
                );
            })}
        </>
    );
};

export default UserList;
