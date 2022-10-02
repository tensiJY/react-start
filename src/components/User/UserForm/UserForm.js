import { useState } from 'react';
import Button from '../../../UI/Button/Button';
import Modal from '../../../UI/Modal/Modal';

const UserForm = (props) => {
    const [user, setUser] = useState({
        userName: '',
        userAge: '',
    });

    const [validModal, setValidModal] = useState({
        isShow: false,
        text: '',
    });

    const validModalInitHandler = (args) => {
        console.log('validModalClearHandler');

        setValidModal({
            isShow: false,
            text: '',
        });
    };

    const inputChangeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        // console.log(`name : ${name} , value : ${value}`);
        setUser((props) => {
            return {
                ...props,
                [name]: value,
            };
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (Number(user.userAge) < 0 || user.userAge.toString().trim() === '') {
            setValidModal((prev) => {
                return {
                    isShow: true,
                    text: `userAge ${user.userAge} ....`,
                };
            });
            return;
        }

        if (user.userName.toString().trim() === '') {
            setValidModal((prev) => {
                return {
                    isShow: true,
                    text: `userName blank ....`,
                };
            });
            return;
        }

        props.onCreateUserHandler(user);
        setUser((prev) => {
            return { userName: '', userAge: '' };
        });
    };

    return (
        <>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label>사용자 이름</label>
                    <input
                        type="text"
                        placeholder="사용자 이름"
                        name="userName"
                        value={user.userName}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div>
                    <label>사용자 나이</label>
                    <input
                        type="number"
                        placeholder="나이"
                        value={user.userAge}
                        name="userAge"
                        onChange={inputChangeHandler}
                    />
                </div>
                <div>
                    <Button type="submit">전송</Button>
                </div>
            </form>
            {validModal.isShow === true && (
                <Modal
                    value={validModal.isShow}
                    text={validModal.text}
                    onValidModalInit={validModalInitHandler}
                />
            )}
        </>
    );
};

export default UserForm;
