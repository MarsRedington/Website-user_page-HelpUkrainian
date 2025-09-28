import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="mainfooter">
      <div className="footerText">
        <p>© 2023 Help Ukrainian. All rights reserved</p>
      </div>
      <div className="footerSocial">
        <a className="footerButton" href="https://t.me/+lOYGL_jfJ3tmYzZh">
          <img src="/assets/footerSocial/Telegram.png" alt="Telegram" />
        </a>
        <a
          className="footerButton"
          href="https://instagram.com/helpukrainian.ca?"
        >
          <img src="/assets/footerSocial/Instagram.png" alt="Instagram" />
        </a>
        <a
          className="footerButton"
          href="https://www.facebook.com/helpukrainiancanada?mibextid=LQQJ4d"
        >
          <img src="/assets/footerSocial/Facebook.png" alt="Facebook" />
        </a>
        <a
          className="footerButton"
          href="https://www.linkedin.com/company/helpukrainian/"
        >
          <img src="/assets/footerSocial/LinkedIn.png" alt="LinkedIn" />
        </a>
        <a
          className="footerButton"
          href="https://www.youtube.com/@helpukrainian/featured"
        >
          <img src="/assets/footerSocial/YouTube.png" alt="YouTube" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
