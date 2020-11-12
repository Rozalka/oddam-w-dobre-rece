import React from 'react'
import '../Contact/contact.scss'

function Contact() {
    return (
        <section className="contact" id="contact">
        <div className="contact-photo"></div>
        <div className="contact-form">
            <div className="contact-form-title">Skontaktuj się z nami</div>
            <div className="decor"></div>
            <form className="contact-form-details">
                <div className="contact-form-info">
                    <div className="contact-form-name contact-form-input">
                        <label htmlFor="">Wpisz swoje imię</label>
                        <input type="text" placeholder="Krzysztof"/>
                    </div>
                    <div className="contact-form-email contact-form-input">
                        <label htmlFor="">Wpisz swój email</label>
                        <input type="email" placeholder="abc@xyz.pl"/>
                    </div>
                </div>    
                <div className="contact-form-message contact-form-input">
                    <label htmlFor="">Wpisz swoją wiadomość</label>
                    <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
                </div>
                <button className="contact-form-btn">Wyślij</button>
            </form>
        </div>
    </section>
    )
}

export default Contact
