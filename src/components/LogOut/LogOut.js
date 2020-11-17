import React from 'react';
import MainDecor from '../MainDecor/MainDecor';
import Header from '../Header/Header';
import '../Header/header.scss';
import '../MainDecor/mainDecor.scss';

function LogOut() {
    return (
        <>
        <Header/>
        <div className="log-out-box">
            <MainDecor title={"Wylogowanie nastąpiło pomyślnie"}/>
            <button>Strona główna</button>
        </div>
            
        </>
    )
}

export default LogOut
