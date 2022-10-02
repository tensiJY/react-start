import UserForm from './components/User/UserForm/UserForm';
import UserList from './components/User/UserList/UserList';
import { useState } from 'react';

const users = [
    {
        id: 1,
        userName: 'park',
        userAge: 20,
    },
    {
        id: 2,
        userName: 'jypark',
        userAge: 30,
    },
];

function App() {
    const [userList, setUserList] = useState(users);

    const createUserHandler = (args) => {
        console.log(args);
        setUserList((prev) => {
            return [
                ...prev,
                {
                    ...args,
                    id: Math.random(),
                },
            ];
        });
    };

    const deleteUserHandler = (args) => {
        console.log(`deleteUserHandler : ${args}`);
        setUserList((prev) => prev.filter((item) => item.id !== args));
    };

    return (
        <div>
            <UserForm onCreateUserHandler={createUserHandler} />
            <UserList
                userList={userList}
                onDeleteUserHandler={deleteUserHandler}
            />
        </div>
    );
}

export default App;
