import React, { useState } from "react";
import ModalPrivTerms from "../modalPrivTerms/modalPrivTerms";
import { emailValidation, nameValidation } from "../../services/validations";
import { sendFormRequest } from "../../services/api/formRequest";
import { IFormRequest, IFormDirty, InputChangeEvent} from "../../types/types";
import "./fillOutForm.css";

function FillOutForm() {

  const initialForm: IFormRequest = {
    firstName: "",
    lastName: "",
    email: "",
    requestType: "",
    message: "",
  };

  const initialFormDirty: IFormDirty = {
    firstName: false,
    lastName: false,
    email: false,
    requestType: false,
    message: false,
  };

  const initialFetchForm = {
    finished: false,
    error: false
  }

  const [formFields, setFormFields] = useState<IFormRequest>(initialForm);
  const [formDirty, setFormDirty] = useState<IFormDirty>(initialFormDirty);

  const [checked, setChecked] = useState<boolean>(false);

  const [errorEmail, setErrorEmail] = useState<boolean>(false);

  const [modalActive, setModalActive] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [fetchForm, setFetchForm] = useState(initialFetchForm)

  const isButtonDisabled =
    !!formFields.firstName &&
    !!formFields.lastName &&
    !!formFields.email &&
    !!formFields.requestType &&
    !!formFields.message &&
    !errorEmail &&
    checked
      ? true
      : false;

  const resetState = () => {
    setIsLoading(false);
    setFormFields(initialForm);
    setFetchForm({...fetchForm, finished: true})
    setChecked(false);
    setFormDirty(initialFormDirty);
  };

  const blurHandler = (event: InputChangeEvent) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if (!fieldValue.trim()) {
      setFormDirty({ ...formDirty, [fieldName]: true });
      if (fieldName === "email") {
        setErrorEmail(true);
      }
    }
  };

  const changeFormHandler = (event: InputChangeEvent) => {
    switch (event.target.name) {
      case "firstName":
        if (nameValidation(event.target.value)) {
          setFormFields({
            ...formFields,
            [event.target.name]: event.target.value,
          });
        }
        break;
      case "lastName":
        if (nameValidation(event.target.value)) {
          setFormFields({
            ...formFields,
            [event.target.name]: event.target.value,
          });
        }
        break;
      case "email":
        setFormFields({
          ...formFields,
          [event.target.name]: event.target.value,
        });
        if (!emailValidation(event.target.value)) {
          setErrorEmail(true);
        } else {
          setErrorEmail(false);
        }
        break;
      case "requestType":
        setFormFields({
          ...formFields,
          [event.target.name]: event.target.value,
        });
        break;
      case "message":
        setFormFields({
          ...formFields,
          [event.target.name]: event.target.value,
        });
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

  const closeModal = () => {
    setModalActive(false);
  };

  const submitForm = async () => {
    setIsLoading(true);
    try {
      const result = await sendFormRequest(formFields);
      resetState();
    } catch (error) {
      setIsLoading(false);
      setFetchForm({error: true, finished: true})
    }
  };

  return (
    <div className="fillOutForm">
      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <h3>Contact Form</h3>
        <div className="inputContainer">
          <input
            id="form_firstName"
            className="inputName"
            type="text"
            name="firstName"
            maxLength={100}
            placeholder="First Name"
            value={formFields.firstName}
            onBlur={(event) => blurHandler(event)}
            onChange={(event) => changeFormHandler(event)}
            style={{
              border:
                formDirty.firstName && formFields.firstName === ""
                  ? "1px solid red"
                  : "",
            }}
          />
          <input
            id="form_lastName"
            className="inputName"
            type="text"
            name="lastName"
            maxLength={100}
            placeholder="Last Name"
            value={formFields.lastName}
            onBlur={(event) => blurHandler(event)}
            onChange={(event) => changeFormHandler(event)}
            style={{
              border:
                formDirty.lastName && formFields.lastName === ""
                  ? "1px solid red"
                  : "",
            }}
          />
          <input
            id="form_email"
            className="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formFields.email}
            onBlur={(event) => blurHandler(event)}
            onChange={(event) => changeFormHandler(event)}
            style={{
              border: errorEmail ? "1px solid red" : "",
            }}
          />
          <select
            className="requestType"
            name="requestType"
            value={formFields.requestType}
            onChange={(event) => changeFormHandler(event)}
            onBlur={(event) => blurHandler(event)}
            style={{
              border:
                formDirty.requestType && formFields.requestType === ""
                  ? "1px solid red"
                  : "",
            }}
          >
            <option value="">Type Of Request</option>
            <option value="I need help">I need help</option>
            <option value="I want to volunteer">I want to volunteer</option>
            <option value="I want to partner">I want to partner</option>
          </select>
          <textarea
            id="form_message"
            className="areaMessage"
            cols={80}
            name="message"
            maxLength={350}
            placeholder="Your Message"
            value={formFields.message}
            onChange={(event) => changeFormHandler(event)}
            onBlur={(event) => blurHandler(event)}
            style={{
              border:
                formDirty.message && formFields.message === ""
                  ? "1px solid red"
                  : "",
            }}
          />
          <div className="privTerms">
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
                the Privacy Terms
              </span>
            </span>
          </div>
          <div className="hint">
            <button
              id="form_buttonSubmit"
              className={
                !isButtonDisabled
                  ? "formButton disabledFormButton"
                  : "formButton"
              }
              type="submit"
              disabled={!isButtonDisabled}
              onClick={submitForm}
              data-title="All fields are required"
            >
              Send
            </button>
          </div>
        </div>
      </form>
      <ModalPrivTerms active={modalActive} onClose={closeModal} />
      {isLoading ? (
        <div className="loader">
          <img src="/assets/loader/spiner.gif" alt="loader"></img>
        </div>
      ) : null}
      {fetchForm.finished && fetchForm.error ? (
        <div className="errorMsgWrap">
          <img className="imgMsg" src="/assets/icons/e.png" alt="error" />
          <span className="errorMessage alert">
            Sorry, something went wrong
          </span>
        </div>
      ) : null}
      {fetchForm.finished && !fetchForm.error ? (
        <div className="errorMsgWrap">
          <img className="imgMsg" src="/assets/icons/s.png" alt="success" />
          <span className="errorMessage success">
            Thank you for contacting us
          </span>
        </div>
      ) : null}
      <div className=""></div>
    </div>
  );
}

export default FillOutForm;
