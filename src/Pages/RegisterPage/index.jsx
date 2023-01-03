import React, {useEffect} from 'react';
import './RegisterPage.css'
import {useNavigate} from "react-router-dom";
import {setErrorVisible, setUser} from "../../redux/Slices/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import {firebaseAuth} from "../../firebase";

const RegisterPage = () => {
    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)

    const [userLogin, setUserLogin] = React.useState('')
    const [userPassword, setUserPassword] = React.useState('')

    let navigate = useNavigate();

    let sendUserDataHandler = async () => {
        if (userLogin.trim().length > 0 && userPassword.trim().length > 0) {
            dispatch(setErrorVisible(false))
            createUserWithEmailAndPassword(firebaseAuth, userLogin, userPassword)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch(setErrorVisible(false))
                    navigate('/login')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage, errorCode)
                    dispatch(setErrorVisible(true))
                })
        } else {
            dispatch(setErrorVisible(true))
        }
    }
    React.useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) =>
            dispatch(setUser({}, {user}))
        )
    }, [])

    React.useEffect(() => {
        console.log(authState.user)
    }, [authState.user])

    return (
        <div className={'RegisterPage'}>
            <p onClick={() => navigate('/')} className={'arrowBack'}>
                &larr;
            </p>
            <h1>регистрироваться здесь</h1>
            <div className="authInputs">
                <div className="authInput">
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
                        onClick={() => sendUserDataHandler()}
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

export default RegisterPage;
