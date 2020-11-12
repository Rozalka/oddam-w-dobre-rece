import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {Link as Scroll} from 'react-scroll';

function Header() {
    return (
        <section>
            <Router>
                <nav className="top-menu">
                    <ul className="navigation nav-top-row">
                        <Link to={"/logIn"}>
                            <li>Zaloguj</li>
                        </Link>
                        <Link to={"/createAccount"}>
                                <li>Załóż konto</li>
                        </Link>  
                    </ul>
                    <ul className="navigation nav-second-row">
                        <li>
                            <Scroll to="start" spy={true} smooth={true}>Start</Scroll>
                        </li>
                        <li> 
                            <Scroll to="about" spy={true} smooth={true}>O co chodzi?</Scroll>
                        </li>
                        <li>
                            <Scroll to="team" spy={true} smooth={true}>O nas</Scroll>
                        </li>
                        <li>
                            <Scroll to="foundation" spy={true} smooth={true}>Fundacja i organizacje</Scroll>
                        </li>
                        <li>
                            <Scroll to ="contact" spy={true} smooth={true}>Kontakt</Scroll>
                        </li>                       
                    </ul>
                </nav>
            </Router>
        </section>
    )
}

export default Header
