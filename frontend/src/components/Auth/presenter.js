import React from "react";
import "./styles.scss";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";
//import { LoginForm, SignupForm } from "components/AuthForms";

const Auth = (props, context) => (
  
  <main className="auth">
    <div className="column">
      <img src={require("images/phone.png")} alt="Checkout our app. Is cool" />
    </div>
    <div className="column">
    <div className="whiteBox formBox">
    <img src={require("images/logo.png")} alt="Logo" />
      {props.action === "login" && <LoginForm />}
      {props.action === "signup" && <SignupForm />}
    </div>
      <div className="whiteBox">
      {props.action === "login" && (<p>
          Don't have an account?{" "}
          <span
            className="changeLink"
            onClick={props.changeAction}
          >
            Sign up
          </span>
        </p>)}
      {props.action === "signup" && (<p>
          Have an account?{" "}
          <span
            className="changeLink"
            onClick={props.changeAction}
          >
            Log in
          </span>
        </p>)}
      </div>
      <div className="appBox">
        <span>Get the app</span>
        <div className="appstores">
          <img
            src={require("images/ios.png")}
            alt="Download it on the Apple Appstore"
          />
          <img
            src={require("images/android.png")}
            alt="Download it on the Apple Appstore"
          />
        </div>
      </div>
    </div>
  </main>
);
 export default Auth;
