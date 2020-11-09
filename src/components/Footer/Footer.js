import React from 'react';
import '../Footer/footer.scss';

function Footer() {
    return (
        <section className="footer">
            <p className="footer-rights">Copyright by Coders Lab</p>
            <div className="footer-icons">
                <a href="https://www.facebook.com/" className="footer-icon footer-icon-facebook"/>
                <a href="https://www.instagram.com/" className="footer-icon footer-icon-insta"/>
            </div>
        </section>
    )
}

export default Footer;
