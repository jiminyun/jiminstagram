import React from "react";
import "shared/formStyles.scss";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";

const SignupForm = (props, context) => (
    <div className="formComponent">
        <h3 className="signupHeader">
          Sign up to see photos and videos from your friends.
        </h3>
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
         <span className="divider">or</span>
          <form className="form" onSubmit={props.handleSubmit}>
            <input 
              type="email" 
              placeholder="Email" 
              className="textInput"
              value={props.emailValue}
              onChange={props.handleInputChange}
              name="email" />
            <input 
              type="text" 
              placeholder="Full Name" 
              className="textInput" 
              value={props.nameValue}
              onChange={props.handleInputChange}
              name="name" />
            <input
              type="username"
              placeholder="Username"
              className="textInput"
              value={props.usernameValue}
              onChange={props.handleInputChange}
              name="username" 
            />
            <input
              type="password"
              placeholder="Password"
              className="textInput"
              value={props.passwordValue}
              onChange={props.handleInputChange}
              name="password" 
            />
            <input type="submit" value="Sign up" className="button" />
          </form>
        <p className="terms">
          By signing up, you agree to our <span>Terms & Privacy Policy</span>.
        </p>
     </div>   
  
  );

  SignupForm.propTypes = {
    emailValue: PropTypes.string.isRequired,
    nameValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
  }

  SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
  }
  export default SignupForm ;
  