import React from "react";
import FacebookLogin from "react-facebook-login";
import "shared/formStyles.scss";
import { PropTypes } from "prop-types";


const LoginForm = ( props, context ) => (
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
      <FacebookLogin
          appId="317763908819874"
          autoLoad={true}
          fields="name,email,picture"
          callback={props.handleFacebookLogin}
          cssClass="facebookLink"
          icon="fa-facebook-official"
        >
          Log in with Facebook
       </FacebookLogin>

      </span>
      <span className="forgotLink">Forgot password?</span>
    </div>
  );

  LoginForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired

  };

  export default LoginForm ;