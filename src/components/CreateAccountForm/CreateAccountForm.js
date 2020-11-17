import React, {useState} from 'react';
import '../CreateAccountForm/createAccountForm.scss';
import '../LogInForm/logInForm.scss';

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
                    <button className="log-in-btn">Zaloguj się</button>
                    <button className="create-account-btn active-btn">Załóż konto</button>
                </div>
            </form>
        </div>
    )
}

export default CreateAccountForm
