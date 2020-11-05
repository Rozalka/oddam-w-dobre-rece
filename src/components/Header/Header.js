import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <section>
            <nav className="top-menu">
                <ul className="navigation nav-top-row">
                    <Link to="/logIn">
                        <li>Zaloguj</li>
                    </Link>
                    <Link to="/createAccount">
                        <li>Załóż konto</li>
                    </Link>  
                </ul>
                <ul className="navigation nav-second-row">
                    <li>Start</li>
                    <li>O co chodzi?</li>
                    <li>O nas</li>
                    <li>Fundacja i organizacje</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </section>
    )
}

export default Header
