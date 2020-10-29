import React from 'react'
import { Route, Link } from 'react-router-dom';

function HomeHeader() {
    return (
        <nav>
            <ul>
                <Link to="/logIn">
                    <li>Zaloguj</li>
                </Link>
                <Link to="/createAccount">
                    <li>Załóz konto</li>
                </Link>  
            </ul>
            <ul>
                <li>Start</li>
                <li>O co chodzi?</li>
                <li>O nas</li>
                <li>Fundacja i organizacje</li>
                <li>Kontakt</li>
            </ul>
        </nav>
    )
}

export default HomeHeader
