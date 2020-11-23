import React from "react";
import MainDecor from "../MainDecor/MainDecor";
import Header from "../Header/Header";
import "../Header/header.scss";
import "../MainDecor/mainDecor.scss";
import "../LogOut/logOut.scss";
import { Link } from "react-router-dom";

function LogOut() {
  return (
    <>
      <Header />
      <div className="log-out-box">
        <MainDecor title={"Wylogowanie nastąpiło pomyślnie"} />
        <Link to="/">
          <button className="log-out-btn">Strona główna</button>
        </Link>
      </div>
    </>
  );
}

export default LogOut;
