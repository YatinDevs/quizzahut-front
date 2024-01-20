import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import "./Login.css"; // Import your custom styles

// Header component for better organization
const LoginHeader = () => (
  <div className="header-cntr flex-top-elem new-header">
    <div className="header-text-cntr">Log In</div>
    <div className="login-header-text">Welcome to ixigo</div>
    <div className="login-sub-header-text">
      Get started to enjoy a seamless travel planning experience
    </div>
  </div>
);

// Login method selection component
const LoginMethodSelection = ({ selectedMethod, onChange }) => (
  <div className="radio-container">
    {["mobile", "email"].map((method) => (
      <label
        key={method}
        className={`radio-list-item u-ib ${
          selectedMethod === method ? "selected" : ""
        }`}
      >
        <input
          type="radio"
          value={method}
          checked={selectedMethod === method}
          onChange={() => onChange(method)}
        />
        <span className="radio-button u-pos-rel u-v-align-top u-ib"></span>
        <span className="label u-ib u-pos-rel u-v-align-top">
          {method === "mobile" ? "Mobile no." : "Email"}
        </span>
      </label>
    ))}
  </div>
);

// Phone/Email Input component
const LoginInput = ({ selectedMethod }) => (
  <div className="c-input-cntr phone-email-input is-phone">
    <div className="c-country-code-wrapper u-v-align-middle u-ib">
      <div className="c-input-country-code">
        +91<span className="dd-icon ixi-icon-chevron"></span>
      </div>
    </div>
    <div className="c-phone-email-input-wrapper u-v-align-middle u-ib">
      <input
        className="c-input u-v-align-bottom"
        type={selectedMethod === "mobile" ? "tel" : "email"}
        placeholder={selectedMethod === "mobile" ? "Mobile no." : "Email"}
      />
    </div>
  </div>
);

// Continue Button component
const ContinueButton = ({ onClick }) => (
  <div className="login-button">
    <button className="c-btn" onClick={onClick}>
      Continue
    </button>
  </div>
);

// Main Login component
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
          {/* Add creative content or images */}
        </div>
        <div className="content-section">
          <LoginHeader />
          <div className="form-wrapper ixigo-login">
            <LoginMethodSelection
              selectedMethod={selectedLoginMethod}
              onChange={handleLoginMethodChange}
            />
            <LoginInput selectedMethod={selectedLoginMethod} />
            <ContinueButton onClick={handleContinue} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
