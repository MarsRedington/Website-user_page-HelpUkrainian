import React from 'react';
import './social.css';

function Social() {
  return (
    <div className="social">
      <button className="socialButton">
        <a href="https://t.me/+lOYGL_jfJ3tmYzZh">
          <img src="/assets/social/Telegram.png" alt="Telegram" />
        </a>
      </button>
      <button className="socialButton">
        <a href="https://instagram.com/helpukrainian.ca?">
          <img src="/assets/social/Instagram.png" alt="Instagram" />
        </a>
      </button>
      <button className="socialButton">
        <a href="https://www.facebook.com/helpukrainiancanada?mibextid=LQQJ4d">
          <img src="/assets/social/Facebook.png" alt="Facebook" />
        </a>
      </button>
      <button className="socialButton">
        <a href="https://www.linkedin.com/company/helpukrainian/">
          <img src="/assets/social/LinkedIn.png" alt="LinkedIn" />
        </a>
      </button>
      <button className="socialButton">
        <a href="https://www.youtube.com/@helpukrainian/featured">
          <img src="/assets/social/YouTube.png" alt="YouTube" />
        </a>
      </button>
    </div>
  );
}

export default Social;
