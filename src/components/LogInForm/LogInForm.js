import React, {useState} from 'react';
import '../LogInForm/logInForm.scss';
import {Link} from 'react-router-dom';



const LogInForm = () => {
    const [logData, setLogData] = useState({ email: "", password: "" });
    const [contentLog, setContentLog] = useState(false);
    const [contentPass, setContentPass] = useState(false);
  
    const changeHandlerEmail = (e) => {
      setLogData({ ...logData, email: e.target.value });
    };
    const changeHandlerPass = (e) => {
      setLogData({ ...logData, password: e.target.value });
    };
  
    const validationCheck = (e) => {
      e.preventDefault();
      let passCheck = logData;
      let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(logData.email);
      if (passCheck.password.length < 6) {
        setContentPass(true);
      } else {
        setContentPass(false);
      }
      if (emailCheck) {
        setContentLog(false);
      } else {
        setContentLog(true);
      }
    };
  
    return (
      <>
         <div>
             {console.log('logogogog')}
             <form className="form-to-log" onSubmit={validationCheck}>
                 <div className="form-details">
                     <label>Email</label>
                     <input value={logData.email} onChange={changeHandlerEmail}></input>
                     {contentLog === true ? (<p className="error">Podany email jest nieprawidłowy!</p>) : ("")}
                     <label>Hasło</label>
                     <input type="password" value={logData.password} onChange={changeHandlerPass}></input>
                     {contentPass === true ? (<p className="error">Podane hasło jest za krótkie!</p>) : ("")}
                 </div>
                 <div className="form-btns">
                     <Link to="/createAccount">
                     <button className="create-account-btn">Załóż konto</button>
                     </Link>
                     <button className="log-in-btn active-btn" type="submit">Zaloguj się</button>
               </div>
           </form>
        </div>
    </>
  );
};



export default LogInForm
