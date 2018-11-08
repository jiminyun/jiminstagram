import React from "react";
import Ionicon from "react-ionicons";
import "shared/formStyles.scss";

const SignupForm = props => (
    <div className="formComponent">
        <h3 className="signupHeader">
          Sign up to see photos and videos from your friends.
        </h3>
        <button className="button">
          <Ionicon icon="logo-facebook" fontSize="20px" color="white" /> Log in with
          Facebook
        </button>
         <span className="divider">or</span>
          <form className="form">
            <input type="email" placeholder="Email" className="textInput" />
            <input type="text" placeholder="Full Name" className="textInput" />
            <input
              type="username"
              placeholder="Username"
              className="textInput"
            />
            <input
              type="password"
              placeholder="Password"
              className="textInput"
            />
            <input type="submit" value="Sign up" className="button" />
          </form>
        <p className="terms">
          By signing up, you agree to our <span>Terms & Privacy Policy</span>.
        </p>
     </div>   
  
  );

  export default SignupForm ;
  