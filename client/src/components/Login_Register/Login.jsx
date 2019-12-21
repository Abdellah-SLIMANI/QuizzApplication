import React, { Component } from 'react'
import './Login_Register.css';
import userlogin from "./user-login.png"

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <div className = 'LoginDiv'>
                    <img src={userlogin} alt="User Login"/>
                    <form action="">
                        <h1>Login</h1>
                        <input type="text" placeholder = 'Full name'/><br/>
                        <input type="password" placeholder= 'password'/><br/>
                        <input type="button" value = 'Submit'/>
                    </form>
                
            </div>
        )
    }
}


export default Login