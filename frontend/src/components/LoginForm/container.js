 import React, { Component } from "react";
 import LoginForm from "./presenter";
 import PropTypes from "prop-types";
 //const Container = props => <LoginForm {...props} />

 class Container extends Component{
    state = {
        username: "",
        password: ""
    } 

    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        usernameLogin: PropTypes.func.isRequired
    };
    render(){
        const { username, password } = this.state ;
        return (
            <LoginForm  
            handleSubmit={this._handleSubmit}
            handleInputChange={this._handleInputChange}
            usernameValue={username} 
            passwordValue={password}
            handleFacebookLogin={this._handleFacebookLogin}
        />
        )    
    }

    _handleInputChange = event => {
        //console.log(event.target.value);
        //const value = event.target.value;
        const { target : { value, name } } = event;
        //console.log(value, name)
        this.setState({
            [name] : value
        })
        //console.log(this.state);
    };
    _handleSubmit = event => {
        const { usernameLogin } = this.props;
        const { username, password } = this.state;
        event.preventDefault();
        usernameLogin(username, password);
    };

    _handleFacebookLogin = response => {
        //console.log(response);
        const { facebookLogin } = this.props ;
        facebookLogin(response.accessToken);
    };
    

 }

 export default Container;

 