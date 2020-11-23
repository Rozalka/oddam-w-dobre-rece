import React from "react";
import Header from "../Header/Header";
import MainDecor from "../MainDecor/MainDecor";
import CreateAccountForm from "../CreateAccountForm/CreateAccountForm";
import "../LogInForm/logInForm.scss";

function CreateAccount() {
  return (
    <>
      <Header />
      <div className="form-box form-box-create-account">
        <MainDecor title={"Załóż konto"} />
        <CreateAccountForm />
      </div>
    </>
  );
}

export default CreateAccount;
