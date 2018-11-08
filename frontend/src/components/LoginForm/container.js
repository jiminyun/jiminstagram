 import React, { Component } from "react";
 import LoginForm from "./presenter";

 //const Container = props => <LoginForm {...props} />

 class Container extends Component{
    state = {
        username: "",
        password: ""
    } 
    render(){
        const { username, password } = this.state ;
        return (
            <LoginForm  
            handleSubmit={this._handleSubmit}
            handleInputChange={this._handleInputChange}
            usernameValue={username} 
            passwordValue={password}/>
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
        event.preventDefault();
    }

 }

 export default Container;

 