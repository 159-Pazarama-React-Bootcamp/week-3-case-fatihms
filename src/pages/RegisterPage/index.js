import React from "react";
import "./styles.css";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

import Register from "../../containers/Register";
import ImageMaskStlye from "../../components/ImageMaskStyle";

function RegisterPage() {
  return (
    <div className="register-page-container">
      <div className="register-area-container">
        <div className="ra-left">
          <Register />
        </div>
        <div className="ra-middle">
          <div className="middle-image">
            <ImageMaskStlye
              src="https://i.hizliresim.com/gio6x6n.png"
              alt="the-grand-budapest-hotel"
            />
          </div>
          <div className="middle-left"></div>
          <div className="middle-right">
            <img
              src="https://i.hizliresim.com/9dlvat9.png"
              height={200}
              className="mr-image"
              alt=""
            />
            <h3>Hoş geldiniz...</h3>
          </div>
        </div>
        <div className="ra-right">
          <div className="la-r-icon">
            <AiFillFacebook size={48} color="#592B56" className="social-icon" />
            <AiFillTwitterSquare
              size={48}
              color="#592B56"
              className="social-icon"
            />
            <AiFillInstagram
              size={48}
              color="#592B56"
              className="social-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
