import React from 'react'
import './Login_Register.css';
import Login from './Login'
import Register from './Register'

class Login_Register extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1 className='Title'>Welcome to QuizzApp</h1>
                <Login />
                <Register />
            </div>
        )
    }
}

export default Login_Register
