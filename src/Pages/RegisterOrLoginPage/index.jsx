import React from 'react';
import './RegisterOrLoginPage.css'
import {useNavigate} from "react-router-dom";

const RegisterOrLoginPage = () => {
    let navigate = useNavigate();
    return (
        <div className={'RegisterOrLoginPageWrapper'}>
            <header>
                <h1>Привет, добро пожаловать в автоматизированную систему учета материально-технической базы предприятия!</h1>
            </header>
            <main>
                <button className={'defaultBtn'} onClick={() => navigate('/login')}>не первый раз?</button>
                <button className={'defaultBtn'} onClick={() => navigate('/registration')}>зарегиструйся</button>
            </main>
        </div>
    );
};

export default RegisterOrLoginPage;
