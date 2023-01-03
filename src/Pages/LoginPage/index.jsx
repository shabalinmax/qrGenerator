import React from 'react';
import './LoginPage.css'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import {firebaseAuth} from "../../firebase";
import {setErrorVisible, setUser} from "../../redux/Slices/authSlice";

const LoginPage = () => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)

    const [userLogin, setUserLogin] = React.useState('')
    const [userPassword, setUserPassword] = React.useState('')
    const sendUserLoginHandler = () => {
        signInWithEmailAndPassword(firebaseAuth, userLogin, userPassword)
            .then((userCredential) => {
                const user = {}
                user.email = userCredential.user.email
                user.uid = userCredential.user.uid
                dispatch(setErrorVisible(false))
                dispatch(setUser({user}))
                navigate('/main')
                console.log(authState.user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                dispatch(setErrorVisible(true))

            })
    }
    let navigate = useNavigate();    return (
        <div className={'LoginPage'}>
            <p onClick={() => navigate('/')} className={'arrowBack'}>
                &larr;
            </p>
            <h1>входить здесь</h1>
            <div className="loginInputs">
                <div className="loginInput">
                    <input
                        type="text"
                        className="defaultInput"
                        placeholder="сюда емаил..."
                        onChange={(event) => setUserLogin(event.target.value)}
                        value={userLogin}
                    />
                    <input
                        type="password"
                        className="defaultInput"
                        placeholder="сюда пароль..."
                        onChange={(event) => setUserPassword(event.target.value)}
                        value={userPassword}
                    />
                    <button
                        className={'defaultBtn'}
                        onClick={() => sendUserLoginHandler()}
                    >
                        отправить
                    </button>
                </div>
            </div>
            <div className="error">
                {authState.errorIsVisible ? <p style={{color: '#ff5d5d', fontSize: '20px'}}>че-то не то ввел</p> : null}
            </div>
        </div>
    );
};

export default LoginPage;
