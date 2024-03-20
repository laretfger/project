import './Auth.css';
import {useRef, useState, useEffect} from 'react';

function Auth({ setShowModal }){
    const [loggedIn, setLoggedIn] = useState(false);
    const [isRegistr, setIsRegistr] = useState(true);
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const emailHandler = (e) => setEmail(e.target.value);
    const loginHandler = (e) => setLogin(e.target.value);
    const passwordHandler = (e) => setPassword(e.target.value);
    const registrHandle = () => {
        setIsRegistr(true)
        setLogin("")
        setPassword("")
        setEmail("")
    }
    const loginHandle = () => {
        setIsRegistr(false)
        setLogin("")
        setPassword("")
        setEmail("")
    }
    return(
        <>
            {!isRegistr ? (<>
            <div className='modalAuthLogin'>
                <div className='authDiv'>
                    <span className='auth' onClick={registrHandle}>Регистрация</span>
                    <svg className='krest' viewPort="0 0 12 12" onClick={() => setShowModal(false)}>
                        <line x1="1" y1="11"
                        x2="11" y2="1"
                        stroke-width="2"/>
                        <line x1="1" y1="1"
                        x2="11" y2="11"
                        stroke-width="2"/>
                    </svg>
                </div>
                <h1 className='authH1'>Вход</h1>
                <form className='form'>
                    <input type='text' placeholder='Email' value={email} onChange={emailHandler}/>
                    <input type='password' placeholder='Пароль' value={password} onChange={passwordHandler}/>
                    <button>Войти</button>
                </form>
            </div>
            <div className='back' onClick={() => setShowModal(false)}></div>
            </>):
            (<>
            <div className='modalAuthRegistr'>
                <div className='authDiv'>
                    <span className='auth' onClick={loginHandle}>Вход</span>
                    <svg className='krest' viewPort="0 0 12 12" onClick={() => setShowModal(false)}>
                        <line x1="1" y1="11"
                        x2="11" y2="1"
                        stroke-width="2"/>
                        <line x1="1" y1="1"
                        x2="11" y2="11"
                        stroke-width="2"/>
                    </svg>
                </div>
                <h1 className='authH1'>Регистрация</h1>
                <form className='form'>
                    <input type='text' placeholder='Логин' value={login} onChange={loginHandler}/>
                    <input type='text' placeholder='Email' value={email} onChange={emailHandler}/>
                    <input type='password' placeholder='Пароль' value={password} onChange={passwordHandler}/>
                    <button>Зарегистрироваться</button>
                </form>
            </div>
            <div className='back' onClick={() => setShowModal(false)}></div>
            </>) }
        </>
    );
}
    

export default Auth;