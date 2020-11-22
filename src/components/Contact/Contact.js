import React, { useState } from "react";
import "../Contact/contact.scss";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactName, setContactName] = useState(false);
  const [contactLog, setContactLog] = useState(false);
  const [contactMessage, setContactMessage] = useState(false);
  const [success, setSuccess] = useState(false);

  const nameChange = (e) => {
    setContactData({
      ...contactData,
      name: e.target.value,
    });
  };
  const emailChange = (e) => {
    setContactData({
      ...contactData,
      email: e.target.value,
    });
  };
  const messageChange = (e) => {
    setContactData({
      ...contactData,
      message: e.target.value,
    });
  };

  const validationCheck = (e) => {
    e.preventDefault();
    let name = contactData.name;
    let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email);

    if (name.length > 0 && name.split(" ").length === 1) {
      setContactName(false);
    } else {
      setContactName(true);
    }
    if (emailCheck) {
      setContactLog(false);
    } else {
      setContactLog(true);
    }
    if (contactData.message.length < 120) {
      setContactMessage(true);
    } else {
      setContactMessage(false);
    }

    const newMessage = {
      name: `${contactData.name}`,
      email: `${contactData.email}`,
      message: `${contactData.message}`,
    };

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === "success") {
          setSuccess(true);
        }
      })
      .then(() => {
        setContactData({
          ...contactData,
          email: "",
          message: "",
          name: "",
        });
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-photo"> </div>
      <div className="contact-form">
        <div className="contact-form-title"> Skontaktuj się z nami </div>
        <div className="decor"> </div>
        {success && (
          <div className="contact-form-send">
            <h2>Wiadomość została wysłana! </h2>
            <h2>Wkrótce się skontaktujemy.</h2>
          </div>
        )}
        <form className="contact-form-details" onSubmit={validationCheck}>
          <div className="contact-form-info">
            <div className="contact-form-name contact-form-input">
              <label htmlFor=""> Wpisz swoje imię </label>
              <input
                value={contactData.name}
                type="text"
                placeholder="Krzysztof"
                onChange={nameChange}
              />
              {contactName === true ? (
                <p className="error"> Podane imię jest nieprawidłowe! </p>
              ) : (
                ""
              )}
            </div>
            <div className="contact-form-email contact-form-input">
              <label htmlFor=""> Wpisz swój email </label>
              <input
                value={contactData.email}
                type="text"
                placeholder="abc@xyz.pl"
                onChange={emailChange}
              />
              {contactLog === true ? (
                <p className="error"> Podany email jest nieprawidłowy! </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="contact-form-message contact-form-input">
            <label htmlFor=""> Wpisz swoją wiadomość </label>
            <textarea
              value={contactData.message}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              onChange={messageChange}
            />
            {contactMessage === true ? (
              <p className="error">
                Wiadomość musi mieć co najmniej 120 znaków!
              </p>
            ) : (
              " "
            )}
          </div>
          <button className="contact-form-btn"> Wyślij </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
