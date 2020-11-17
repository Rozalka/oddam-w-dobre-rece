import React from 'react'
import Header from '../Header/Header';
import MainDecor from '../MainDecor/MainDecor';
import LogInForm from '../LogInForm/LogInForm';
import '../Header/header.scss';
import '../MainDecor/mainDecor.scss';
import '../LogInForm/logInForm.scss';

function LogIn() {
    
    return (
        <>
        <Header/>
        <div className="form-box">
            <MainDecor title={"Zaloguj się"}/>
            <LogInForm/>
        </div>
        </>
    )
}

export default LogIn;
