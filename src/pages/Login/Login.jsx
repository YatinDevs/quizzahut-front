import React, { useState } from "react";
import { ImCross } from "react-icons/im";

function Login({ handleLoginModal }) {
  const [selectedLoginMethod, setSelectedLoginMethod] = useState("mobile");

  const handleLoginMethodChange = (method) => {
    setSelectedLoginMethod(method);
  };

  const handleContinue = () => {
    // Add your logic for handling the Continue button click
    console.log("Continue button clicked for:", selectedLoginMethod);
  };

  return (
    <div>
      <div>
        <button onClick={handleLoginModal}>
          <ImCross />
        </button>
      </div>
      <div className="login-container flex">
        <div className="creative-section w-[300px]">
          <img
            src="https://images.ixigo.com/rt-udaan/pc/img/login/banner.png?v=1"
            alt="Login Banner"
          />
        </div>
        <div className="content-section">
          <div className="header-cntr flex-top-elem new-header">
            <div className="header-text-cntr">Log In</div>

            <div className="login-header-text">Welcome to ixigo</div>
            <div className="login-sub-header-text">
              Get started to enjoy a seamless travel planning experience
            </div>
            <div className="form-wrapper ixigo-login">
              <div className="radio-container">
                <label
                  className={`radio-list-item u-ib ${
                    selectedLoginMethod === "mobile" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    value="mobile"
                    checked={selectedLoginMethod === "mobile"}
                    onChange={() => handleLoginMethodChange("mobile")}
                  />
                  <span className="radio-button u-pos-rel u-v-align-top u-ib"></span>
                  <span className="label u-ib u-pos-rel u-v-align-top">
                    Mobile no.
                  </span>
                </label>
                <label
                  className={`radio-list-item u-ib ${
                    selectedLoginMethod === "email" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    value="email"
                    checked={selectedLoginMethod === "email"}
                    onChange={() => handleLoginMethodChange("email")}
                  />
                  <span className="radio-button u-pos-rel u-v-align-top u-ib"></span>
                  <span className="label u-ib u-pos-rel u-v-align-top">
                    Email
                  </span>
                </label>
              </div>
              <div className="c-input-cntr phone-email-input is-phone">
                <div className="c-country-code-wrapper u-v-align-middle u-ib">
                  <div className="c-input-country-code">
                    +91<span className="dd-icon ixi-icon-chevron"></span>
                  </div>
                </div>
                <div className="c-phone-email-input-wrapper u-v-align-middle u-ib">
                  <input
                    className="c-input u-v-align-bottom"
                    type={selectedLoginMethod === "mobile" ? "tel" : "email"}
                    placeholder={
                      selectedLoginMethod === "mobile" ? "Mobile no." : "Email"
                    }
                  />
                </div>
              </div>
              <div className="login-button">
                <button className="c-btn" onClick={handleContinue}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
