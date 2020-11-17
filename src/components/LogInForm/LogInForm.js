import React, {useState} from 'react';
import '../LogInForm/logInForm.scss';


function LogInForm() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[errors, setErrors] = useState([]);
    const[success, setSuccess] = useState(false);

    const handleLogIn = (e) => {
        e.preventDefault();
        const _errors =[];
        
        if (email.length < 3 || email.indexOf("@") === -1) {
            _errors.push("Email should shoud have '@' to be valid.");
        }

        if (password.length < 5) {
            _errors.push("password should be at least 5 characters long.");
        } 
        
        setErrors(_errors);
        setSuccess(false);
        if (_errors.length > 0) {
        return false;
        }  
        
        const user = {
            email: `${email}`,
            password: `${password}`
        };

        fetch(`http://localhost:3000/logIn`, {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(user),
            })
            .then(response => {
                if (response.ok) {
                  return response.json();
                } else {
                  throw new Error("Błąd sieci!");
                }
              })
            .then(data => {
                if (data.status === "success") { 
                  setPassword("");
                  setEmail("");
                  setSuccess(true);
                }
            })
            // .catch(err => {
            //     console.log(err);
            // });
        }    
    return (
        <div>
            <form className="form-to-log" onSubmit={handleLogIn}>
                <div className="form-details">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <label>Hasło</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="form-btns">
                    <button className="create-account-btn">Załóż konto</button>
                    <button className="log-in-btn active-btn" type="submit">Zaloguj się</button>
                </div>
            </form>
            {success && <h2 className="log-confirmation">Loged in succesfully!</h2>}
            {errors.map(error => <p className="log-in-error"key={error}>{error}</p>)}
        </div>
    );
}

export default LogInForm
