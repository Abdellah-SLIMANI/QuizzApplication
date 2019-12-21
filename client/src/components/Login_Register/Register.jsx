import React from 'react'
import userregister from './user-register.png';
import './Login_Register.css';

class Register extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
                <div className= 'RegisterDiv'>
                <img src={userregister} alt="User Register"/>
                    <form action="">
                    <h1>Register</h1>
                        <input type="text" placeholder = 'Full name'/><br/>
                        <input type="text" placeholder = 'filliere'/><br/>
                        <input type="password" placeholder= 'password'/><br/>
                        <input type="button" value = 'Submit'/>
                    </form>
            </div>
        )
    }
}


export default Register