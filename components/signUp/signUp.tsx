import React, { useState, ChangeEvent } from "react";
import { emailValidation, nameValidation } from "../../services/validations";
import ModalPrivTerms from "../modalPrivTerms/modalPrivTerms";

import "./signUp.css";

function SignUp() {
  type InputChangeEvent =
    | ChangeEvent<HTMLInputElement>
    | ChangeEvent<HTMLTextAreaElement>
    | ChangeEvent<HTMLSelectElement>;

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  const [firstNameDirty, setFirstNameDirty] = useState<boolean>(false);
  const [lastNameDirty, setLastNameDirty] = useState<boolean>(false);
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [confirmPassDirty, setConfirmPassDirty] = useState<boolean>(false);
  const [phoneDirty, setPhoneDirty] = useState<boolean>(false);

  const [errorEmail, setErrorEmail] = useState<boolean>(false);

  const [modalActive, setModalActive] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [fetchError, setFetchError] = useState<boolean>(false);

  const [fetchFinished, setFetchFinished] = useState<boolean>(false);

  const closeModal = () => {
    setModalActive(false);
  };

  const isButtonDisabled =
    !!firstName &&
    !!lastName &&
    !!email &&
    !!phone &&
    !!password &&
    !!confirmPass &&
    !errorEmail &&
    checked
      ? true
      : false;

  const resetState = () => {
    setIsLoading(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setConfirmPass("");
    setFetchFinished(true);
    setChecked(false);
    setFirstNameDirty(false);
    setLastNameDirty(false);
    setEmailDirty(false);
    setPasswordDirty(false);
    setConfirmPassDirty(false);
    setPhoneDirty(false);
  };

  const blurHandler = (event: InputChangeEvent) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if (!fieldValue.trim()) {
      switch (fieldName) {
        case "firstName":
          setFirstNameDirty(true);
          break;
        case "lastName":
          setLastNameDirty(true);
          break;
        case "email":
          setEmailDirty(true);
          setErrorEmail(true);
          break;
        case "phone":
          setPhoneDirty(true);
          break;
        case "password":
          setPasswordDirty(true);
          break;
        case "confirmPass":
          setConfirmPassDirty(true);
          break;
        default:
          break;
      }
    }
  };

  const changeFormHandler = (event: InputChangeEvent) => {
    switch (event.target.name) {
      case "firstName":
        if (nameValidation(event.target.value)) {
          setFirstName(event.target.value);
        }
        break;
      case "lastName":
        if (nameValidation(event.target.value)) {
          setLastName(event.target.value);
        }
        break;
      case "email":
        setEmail(event.target.value);
        if (!emailValidation(event.target.value)) {
          setErrorEmail(true);
        } else {
          setErrorEmail(false);
        }
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "confirmPass":
        setConfirmPass(event.target.value);
        break;
      case "formCheckbox":
        if (
          event.target instanceof HTMLInputElement &&
          event.target.type === "checkbox"
        ) {
          setChecked(event.target.checked);
        }
        break;
      default:
        break;
    }
  };

  return (
    <section>
      <div className="signUp">
        <div className="signUpDescr">
          <h1>create your account</h1>
          <h6>Create an account to have access to all our materials</h6>
          <form
            className="signUpForm"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              id="signFirstName"
              className="signFirstName"
              type="text"
              name="firstName"
              maxLength={100}
              placeholder="First Name"
              value={firstName}
              onBlur={(event) => blurHandler(event)}
              onChange={(event) => changeFormHandler(event)}
              style={{
                border:
                  firstNameDirty && firstName === "" ? "1px solid red" : "",
              }}
            />
            <input
              id="signLastName"
              className="signLastName"
              type="text"
              name="lastName"
              maxLength={100}
              placeholder="Last Name"
              value={lastName}
              onBlur={(event) => blurHandler(event)}
              onChange={(event) => changeFormHandler(event)}
              style={{
                border: lastNameDirty && lastName === "" ? "1px solid red" : "",
              }}
            />
            <input
              id="sEmail"
              className="signEmail"
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
              id="sPhone"
              className="signPhone"
              type="tel"
              name="phone"
              placeholder="Phone"
              value={phone}
              onBlur={(event) => blurHandler(event)}
              onChange={(event) => changeFormHandler(event)}
              style={{
                border: phoneDirty && phone === "" ? "1px solid red" : "",
              }}
            />
            <input
              id="sPassword"
              className="signPassword"
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
            <input
              id="sConfirmPassword"
              className="signConfirm"
              type="password"
              name="confirmPass"
              placeholder="Confirm Your Password"
              value={confirmPass}
              onBlur={(event) => blurHandler(event)}
              onChange={(event) => changeFormHandler(event)}
              style={{
                border:
                  confirmPassDirty && confirmPass === "" ? "1px solid red" : "",
              }}
            />
            <div className="signPolicy">
              <input
                className="formCheckbox"
                type="checkbox"
                name="formCheckbox"
                checked={checked}
                onChange={(event) => changeFormHandler(event)}
              />
              <span className="agreeCheck">
                I agree to {""}
                <span className="privacy" onClick={() => setModalActive(true)}>
                  the Privacy Policy
                </span>
              </span>
            </div>
            <div className="signUphint">
              <button
                id="signUpSubmit"
                className={
                  !isButtonDisabled
                    ? "signUpSubmit disabledButton"
                    : "signUpSubmit"
                }
                type="submit"
                disabled={!isButtonDisabled}
                // onClick={submitForm}
                data-title="All fields are required"
              >
                sign up
              </button>
            </div>
          </form>
          <ModalPrivTerms active={modalActive} onClose={closeModal} />
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

export default SignUp;
