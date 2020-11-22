import React from 'react';
import '../Footer/footer.scss';
import facebook from '../../assets/Facebook.svg';
import insta from '../../assets/Instagram.svg';

function Footer() {
    return (
        <section className="footer">
            <p className="footer-rights">Copyright by Coders Lab</p>
            <div className="footer-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img alt="facebook" className="footer-icon" src={facebook}></img></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img alt="insta"className="footer-icon"src={insta}></img></a>
            </div>
        </section>
    )
}

export default Footer;
