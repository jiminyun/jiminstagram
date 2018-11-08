import React from "react";
import Ionicon from "react-ionicons";
import "shared/formStyles.scss";
import { PropTypes } from "prop-types";

const LoginForm = props => (
    <div className="formComponent">
      <form className="form" onSubmit={props.handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          className="textInput" 
          value={props.usernameValue}
          onChange={props.handleInputChange}
          name="username" />
        <input
          type="password"
          placeholder="Password"
          className="textInput"
          value={props.passwordValue}
          onChange={props.handleInputChange}
          name="password" />
        <input type="submit" value="Log in" className="button"   />
      </form>
      <span className="divider">or</span>
      <span className="facebookLink">
      <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> Log in
        with Facebook
      </span>
      <span className="forgotLink">Forgot password?</span>
    </div>
  );

  LoginForm.prototype = {
    usernameValue: PropTypes.toString.isRequired,
    passwordValue: PropTypes.toString.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  export default LoginForm ;