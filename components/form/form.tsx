import React, { useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import FillOutForm from '../fillOutForm/fillOutForm';
import './form.css';

function Form() {
  const location = useLocation();
  const partnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === '#partner' && partnerRef.current) {
      partnerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="mainPagesForm" id="partner" ref={partnerRef as React.RefObject<HTMLDivElement>}>
    <div className="formContainer">
      <div className="firsBlock">
        <div className="textContainer first">
          <h3>Partner with us</h3>
          <p>
            Looking for ways to support Ukrainian newcomers to Canada? We would
            love to explore how we could help more people together. Contact us
            through the form below, and we will reach out to you shortly.
          </p>
        </div>
      </div>
      <div className="secondBlock">
        <div className="textContainer second">
          <h3>Get in touch</h3>
          <p>
            Have you recently arrived in Canada from Ukraine? Are you looking
            for professional support in developing your career? Fill in the
            contact form, and we will get back to you as soon as we can.
          </p>
        </div>
      </div>
      <FillOutForm />
    </div>
    </div>
  );
}

export default Form;
