import React from 'react';
import '../LogInForm/logInForm.scss';

function LogInForm() {
    return (
        <div>
            <form className="form-to-log">
                <div className="form-details">
                    <label>Email</label>
                    <input type="email"></input>
                    <label>Password</label>
                    <input type="password"></input>
                </div>
                <div className="form-btns">
                    <button>Załóz konto</button>
                    <button>Zaloguj się</button>
                </div>
            </form>
        </div>
    )
}

export default LogInForm
