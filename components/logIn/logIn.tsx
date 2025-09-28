import React, { useState, ChangeEvent } from "react";
import { emailValidation, nameValidation } from "../../services/validations";
import ModalPrivTerms from "../modalPrivTerms/modalPrivTerms";

import "./logIn.css";
import { NavLink } from "react-router-dom";

function LogIn() {
  type InputChangeEvent = ChangeEvent<HTMLInputElement>


  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);

  const [errorEmail, setErrorEmail] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [fetchError, setFetchError] = useState<boolean>(false);

  const [fetchFinished, setFetchFinished] = useState<boolean>(false);


  const isButtonDisabled =

    !!email &&
    !!password &&
    !errorEmail 
      ? true
      : false;

  const resetState = () => {
    setIsLoading(false);
    setEmail("");
    setPassword("");
    setFetchFinished(true);
    setEmailDirty(false);
    setPasswordDirty(false);
  };

  const blurHandler = (event: any) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if (!fieldValue.trim()) {
      switch (fieldName) {
        case "email":
          setEmailDirty(true);
          setErrorEmail(true);
          break;
        case "password":
          setPasswordDirty(true);
          break;
        default:
          break;
      }
    }
  };

  const changeFormHandler = (event: InputChangeEvent) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        if (!emailValidation(event.target.value)) {
          setErrorEmail(true);
        } else {
          setErrorEmail(false);
        }
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <section>
      <div className="logIn">
        <div className="logInDescr">
          <h1>welcome</h1>
          <h6>Log in to your account to continue</h6>
          <form
            className="logInForm"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              id="lEmail"
              className="logEmail"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onBlur={(event) => blurHandler(event)}
              onChange={(event) => changeFormHandler(event)}
              style={{
                border: errorEmail ? "1px solid red" : "",
              }}
            />
            <input
              id="lPassword"
              className="logPassword"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onBlur={(event) => blurHandler(event)}
              onChange={(event) => changeFormHandler(event)}
              style={{
                border: passwordDirty && password === "" ? "1px solid red" : "",
              }}
            />
            <div className="logInhint">
              <button
                id="logInSubmit"
                className={
                  !isButtonDisabled
                    ? "logInSubmit disabledButton"
                    : "logInSubmit"
                }
                type="submit"
                disabled={!isButtonDisabled}
                // onClick={submitForm}
                data-title="All fields are required"
              >
                log in
              </button>
            </div>
          </form>
          <p className="linkForgot"><NavLink to="/forgotpassword">Forgot password?</NavLink></p>
          {/* {isLoading ? <div className="loader"><img src="/assets/loader/spiner.gif" alt="loader"></img></div> : null}
      {fetchFinished && fetchError ? 
        <div className="errorMsgWrap"><img className="imgMsg" src="/assets/icons/e.png" alt="error"/><span className="errorMessage alert">Sorry, something went wrong</span></div>  
      : null}
      {fetchFinished && !fetchError ? 
        <div className="errorMsgWrap"><img className="imgMsg" src="/assets/icons/s.png" alt="success"/><span className="errorMessage success">Thank you for contacting us</span></div> 
      : null} */}
        </div>
      </div>
    </section>
  );
}

export default LogIn;
