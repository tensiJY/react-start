import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //  의존성 변경이 없기 때문에 최초 1회만 실행
    //  의존성이 없음
    useEffect(() => {
        //console.log(`useEffect`);
        const isLogin = localStorage.getItem('isLoggedIn');

        if (isLogin === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn', '0');
        setIsLoggedIn(false);
    };

    return (
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </React.Fragment>
    );
}

export default App;
