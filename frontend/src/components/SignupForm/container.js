import React , { Component } from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";

class Container extends Component{
    state = {
        email: "",
        name: "",
        username: "",
        password: ""
    }
    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        usernameLogin: PropTypes.func.isRequired
    };
    render(){
        const { email, name, username, password } = this.state ;
        return (
            <SignupForm
             emailValue={email}
             nameValue={name}
             usernameValue={username}
             passwordValue={password}
             handleInputChange={this._handleInputChange}
             handleSubmit={this._handleSubmit}
             handleFacebookLogin={this._handleFacebookLogin}
            />
        )
    }

    _handleInputChange = event => {
        const { target: { value, name } } = event;
        this.setState({
          [name]: value
        });
        //console.log(this.state);
      };

    _handleSubmit = event => {
        const {email, name, password, username} = this.state;
        const { createAccount } = this.props;
        event.preventDefault();
        createAccount(username, password, email, name);

    };

    _handleFacebookLogin = response => {
        console.log(response);
    };
    
}

export default Container;

