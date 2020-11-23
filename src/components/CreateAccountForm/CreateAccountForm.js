import React from "react";
import { Link } from "react-router-dom";
import "../CreateAccountForm/createAccountForm.scss";
import "../LogInForm/logInForm.scss";

function CreateAccountForm() {
  return (
    <div>
      <form className="form-to-log">
        <div className="form-details new-account">
          <label>Email</label>
          <input type="email"></input>
          <label>Hasło</label>
          <input type="password"></input>
          <label>Powtórz hasło</label>
          <input type="password"></input>
        </div>
        <div className="form-btns">
          <Link to="/logIn">
            <button className="log-in-btn">Zaloguj się</button>
          </Link>
          <button className="create-account-btn active-btn">Załóż konto</button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccountForm;
