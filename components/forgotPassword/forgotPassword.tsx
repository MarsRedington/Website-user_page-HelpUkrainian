import React, { useState, ChangeEvent } from "react";
import { emailValidation } from "../../services/validations";

import "./forgotPassword.css";

function ForgotPassword() {
  type InputChangeEvent = ChangeEvent<HTMLInputElement>;

  const [email, setEmail] = useState<string>("");

  const [emailDirty, setEmailDirty] = useState<boolean>(false);

  const [errorEmail, setErrorEmail] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [fetchError, setFetchError] = useState<boolean>(false);

  const [fetchFinished, setFetchFinished] = useState<boolean>(false);

  const isButtonDisabled = !!email && !errorEmail ? true : false;

  const resetState = () => {
    setIsLoading(false);
    setEmail("");
    setFetchFinished(true);
    setEmailDirty(false);
  };

  const blurHandler = (event: InputChangeEvent) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if (!fieldValue.trim()) {
      switch (fieldName) {
        case "email":
          setEmailDirty(true);
          setErrorEmail(true);
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
      default:
        break;
    }
  };

  return (
    <section>
      <div className="forgotPassword">
        <div className="forgotPasswordDescr">
          <h1>Forgot your password?</h1>
          <h6>Please enter your email</h6>
          <form
            className="forgotPasswordForm"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              id="fEmail"
              className="forgotEmail"
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
            <div className="forgothint">
              <button
                id="forgotSubmit"
                className={
                  !isButtonDisabled
                    ? "forgotSubmit disabledButton"
                    : "forgotSubmit"
                }
                type="submit"
                disabled={!isButtonDisabled}
                // onClick={submitForm}
                data-title="All fields are required"
              >
                reset password
              </button>
            </div>
          </form>
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

export default ForgotPassword;
